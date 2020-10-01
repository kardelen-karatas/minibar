const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

const Bar = require('../models/Bar.model.js');

router.get('/bars', (req, res, next) => {
  Bar.find()
  .then((allBarsFromDB) => {
    res.render("bars/index", { bars : allBarsFromDB });
  })
  .catch((error) => {
    console.log("Error while getting the bars from the DB: ", error);
    next(error);
  });
});

router.post('/bars', (req, res, next) => {
  // creation d'un bar
  });

  router.get('/bars/new', (req, res, next) => {
    res.render('bars/new', {});
  });

//CLEMENTINE 
  router.get('/bars/:id', (req, res, next) => {
  // res.send(`details for bar ID : ${req.params.id}`);
  const { id } = req.params;
  Bar.findById(id)
  .then((theBar) =>
    res.render("bars/show", { bar: theBar })
  )
  .catch((error) => {
    console.log("Error while retrieving bar details: ", error);
    next(error);
  });
});

router.get('/bars/:id/edit', (req, res, next) => {
  const { id } = req.params;
 
  Bar.findById(id)
    .then(barToEdit => {
      res.render('bars/edit', {bar: barToEdit});
    })
    .catch(error => next(error));
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
    res.redirect("/bars");
  })
  .catch((err) => next(err));
});







