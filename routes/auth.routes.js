const express = require('express');
const mongoose = require('mongoose');

const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

const User = require('../models/User.model.js');
const Bar = require('../models/Bar.model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', {});
});

router.post('/signup', (req, res, next) => {
  
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return;
  }
 
  const hashedPassword = bcryptjs.hashSync(password, salt);
  
  User.create({
    username,
    email,
    passwordHash: hashedPassword
  })
    .then(userFromDB => {

      req.session.currentUser = userFromDB;
      res.redirect('/userProfile');
    
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
          res.status(500).render('auth/signup', { errorMessage: error.message });
      } 
      else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
           errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } 
      else {
          next(error);
      }
    });
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
})


router.post('/login', (req, res, next) => {
  const { name, email, password } = req.body;
 
  if (name === '' || email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter name, email and password to login.'
    });
    return;
  }
 
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        
        req.session.currentUser = user;
        res.redirect('/userProfile');
      
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

router.get('/userProfile', (req, res) => {
  const user_id = req.session.currentUser._id;
  console.log(user_id);

  Bar.find({user_id: mongoose.Types.ObjectId(`${user_id}`)})
  .then((allBarsFromDB) => {

    res.render('users/user-profile',
    { 
      userInSession: req.session.currentUser,
      bars : allBarsFromDB,
      addedBars: allBarsFromDB.length,
      day: new Date(req.session.currentUser.createdAt).getDay(),
      month: new Date(req.session.currentUser.createdAt).getMonth(),
      year: new Date(req.session.currentUser.createdAt).getYear()
    });
  })
  .catch((error) => {
    console.log("Error while getting the bars from the DB: ", error);
    next(error);
  });

  
});

router.post('/logout', (req, res) => {

  req.session.destroy();
  res.redirect('/');

});
module.exports = router;