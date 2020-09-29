const express = require('express');
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

const User = require('../models/User.model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', {});
});

router.post('/signup', (req, res, next) => {
  console.log('The form data: ', req.body);

  const { username, email, password } = req.body;
 
  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);

  userToCreate = {
    username,
    email,
    passwordHash: hashedPassword
  }

  User.create(userToCreate)
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      req.session.currentUser = userFromDB;
      res.redirect('/userProfile');
    })
    .catch(error => next(error));
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
})


router.post('/login', (req, res, next) => {
  const { name, email, password } = req.body;

  console.log('SESSION =====> ', req.session);
 
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
  res.render('users/user-profile', { userInSession: req.session.currentUser });
});

router.post('/logout', (req, res) => {

  req.session.destroy();
  res.redirect('/');

});
module.exports = router;