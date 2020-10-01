const mongoose = require('mongoose');
const Bar = require('../models/Bar.model');
const User = require('../models/User.model');
var ObjectId = require('mongodb').ObjectID;
 
Bar.collection.drop();
User.collection.drop();
 
const dbtitle = 'minibar';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
 

const dataUser = [
  {
    id: 1,
    username: "Mrs Brown",
    email: "mrsbrown@yahoo.com",
    passwordHash: "testpassword"
  },
  {
    id: 2,
    username: "Clementine Nocton",
    email: "clm@yahoo.com",
    passwordHash: "testpassword"

  },
]

const dataBar = [
  {
    name: "Northern Bar",
    user_id: ObjectId("5f7618ac7161b12206244230"),
    address: "1 rue de voltaire, 75001 Paris",
    minimumCb : 5,
    latlng: [0.0, 0.0]
  },
  {
    name: "Parisien Bar",
    user_id: ObjectId("5f7618ac7161b1220624422f"),
    address: "100 rue de colle bert, 92310 Sevres",
    minimumCb : 15,
    latlng: [1.0, 1.0]
  },
  {
    name: "Optimum",
    user_id: ObjectId("5f7618ac7161b12206244230"),
    address: "35 rue d'amsterdam', 75003 Paris",
    minimumCb : 10,
    latlng: [10.0, 10.0]
  },
  {
    name: "Les Chavillois",
    user_id: ObjectId("5f7618ac7161b1220624422f"),
    address: "96 avenue de roger salengro, 92370 Chaville",
    minimumCb : 25,
    latlng: [2.0, 2.0]
  }
]


User.insertMany(dataUser).then(
  console.log("data inserted")
).catch(err=> {
  console.log(`Error: ${err}`)
})

Bar.insertMany(dataBar).then(
  console.log("data inserted")
).catch(err=> {
  console.log(`Error: ${err}`)
})
