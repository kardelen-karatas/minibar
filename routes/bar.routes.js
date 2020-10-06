const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

module.exports = router;

const Bar = require('../models/Bar.model.js');
const fileUploader = require('../configs/cloudinary.config');


router.get('/bars/new', (req, res, next) => {

  if(!req.session.currentUser){
    res.redirect('/login');
  }
  res.render('bars/new', { userInSession: req.session.currentUser });
});

router.post('/bars/new', fileUploader.single('image'), (req, res, next) => {
  // creation d'un bar
  const { name, address, minimumCb } = req.body;
  const user_id = req.session.currentUser._id;

  if (name === '' || address === '' || minimumCb === '') {
    res.render('bars/new', {userInSession: req.session.currentUser, errorMessage: 'All fields are mandatory. Please provide bar name, address and min payment by cart.' });
    return;
  }

  Bar.create({ name, address, minimumCb, user_id, imageUrl: req.file.path })
    .then((newBar) => {
      console.log(req.file.path);
      res.redirect('/bars');
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(500).render('bars/new', { errorMessage: err.message });
      }
      else {
        next(err);
      }
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

  router.get('/bars/:id', (req, res, next) => {
  const { id } = req.params;

    // check if the logged in user is creator of the bar
    function isCreator(bar){
      if(req.session.currentUser && bar.user_id.toString() === req.session.currentUser._id){
        return true;
      }
      return false;
    }

    Bar.findById(id)
      .then((theBar) => {
      
        res.render("bars/show", { bar: theBar, userInSession: req.session.currentUser, isCreator: isCreator(theBar)});
      
      })
      .catch((error) => {
        console.log("Error while retrieving bar details: ", error);
        next(error);
      });
});

router.get('/bars/:id/edit', (req, res, next) => {

  const { id } = req.params;

  if(!req.session.currentUser){
    res.redirect('/login');
  }

  Bar.findById(id)
  .then(barToEdit => {

    if(barToEdit.user_id.toString() !== req.session.currentUser._id){
      res.redirect(`/bars/${barToEdit.id}`);
    }

    res.render('bars/edit', {bar: barToEdit, userInSession: req.session.currentUser});
  })
  .catch(error => next(error));

});

router.post('/bars/:id/edit', (req, res, next) => {
    
  const { id } = req.params;
  const { name, address, minimumCb } = req.body;

  console.log(typeof(minimumCb));
   
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