const express = require('express');
const bcryptjs = require('bcryptjs');
const salt = bcryptjs.genSaltSync(10);

const User = require('../models/User.model.js');

const router = express.Router();

router.get('/signup', (req, res, next) => {
  res.render('auth/signup', {});
});

router.post('/signup', (req, res, next) => {
  res.redirect('auth/signup');
});

router.get('/login', (req, res, next) => {
  res.render('auth/login');
})

router.get('/login', (req, res, next) => {
  res.redirect('auth/login');
})

router.post('/logout', (req, res, next) => {
  res.redirect('index');
})

router.get('/userProfile', (req, res, next) => {
  res.render('users/user-profile');
})
module.exports = router;