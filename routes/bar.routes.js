const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

const Bar = require('../models/Bar.model.js');

router.get('/', (req, res, next) => {
  res.render('bars/index', {})
})

router.post('/bars', (req, res, next) => {
  // creation d'un bar
  })

  router.get('/bars/new', (req, res, next) => {
    res.render('bars/new', {})
  })  

  router.get('/bars/:id', (req, res, next) => {
  res.send(`details for bar ID : ${req.params.id}`)
})

router.post('/bars/:id', (req, res, next) => {
    // Update bar  
})

router.post('/bars/:id/delete', (req, res, next) => {
    // Delete bar
})


router.get('/bars/:id/edit', (req, res, next) => {
  res.send(`editing bar ID : ${req.params.id}`)
})






