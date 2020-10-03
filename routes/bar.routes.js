const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

const Bar = require('../models/Bar.model.js');

router.get('/bars/new', (req, res, next) => {
  res.render('bars/new', { userInSession: req.session.currentUser });
});

router.post('/bars/new', (req, res, next) => {
  // creation d'un bar
  const { name, address, minimumCb } = req.body;
  Bar.create({ name, address, minimumCb })
    .then((newBar) => {
      res.redirect('/bars');
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/bars', (req, res, next) => {
  Bar.find()
  .then((allBarsFromDB) => {
    res.render("bars/index", { bars : allBarsFromDB, userInSession: req.session.currentUser });
  })
  .catch((error) => {
    console.log("Error while getting the bars from the DB: ", error);
    next(error);
  });
});

//CLEMENTINE 
  router.get('/bars/:id', (req, res, next) => {
  // res.send(`details for bar ID : ${req.params.id}`);
  const { id } = req.params;
  Bar.findById(id)
  .then((theBar) =>
  res.render("bars/show", { bar: theBar, userInSession: req.session.currentUser })
  )
  .catch((error) => {
    console.log("Error while retrieving bar details: ", error);
    next(error);
  });
});

router.get('/bars/:id/edit', (req, res, next) => {

  const { id } = req.params;

  if (!req.session.currentUser) {
    console.log("Error while retrieving bar details");
    return;
  }

  if (req.params.user_id === req.session.currentUser.id) {
    Bar.findById(id)
    .then(barToEdit => {
      res.render('bars/edit', {bar: barToEdit, userInSession: req.session.currentUser});
    })
    .catch(error => next(error));
  } else {
    console.log("Error while retrieving bar details");
    return;
  }
});

router.post('/bars/:id/edit', (req, res, next) => {
    // Update bar  
    const { id } = req.params;
    const { name, address, minimumCb } = req.body;
   
    Bar.findByIdAndUpdate(id, { name, address, minimumCb }, { new: true })
      .then(updatedBar => res.redirect(`/bars/${updatedBar.id}`))
      .catch(error => next(error));
});

router.post('/bars/:id/delete', (req, res, next) => {
  Bar.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/bars');
  })
  .catch((err) => next(err));
});