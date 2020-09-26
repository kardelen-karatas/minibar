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

  User.create({
    username,
    email,
    passwordHash: hashedPassword
  })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
    })
    .catch(error => next(error));
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
})

router.get('/login', (req, res, next) => {
  res.redirect('index');
})

router.post('/logout', (req, res, next) => {
  res.redirect('index');
})

router.get('/userProfile', (req, res, next) => {
  res.render('users/user-profile');
})
module.exports = router;