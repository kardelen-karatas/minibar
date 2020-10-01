const mongoose = require('mongoose');
const Bar = require('../models/Bar.model');
const User = require('../models/User.model');
 
const dbtitle = 'minibar';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});


Bar.collection.drop();

const user_list = []

// t: 0.1
User.find()
.then(users => {
  // t: 2
  for (let user of users) {
    user_list.push(user["_id"])
    console.log(user["_id"])
  }

  const dataBar = [
    {
      name: "Northern Bar",
      user_id: user_list[0],
      address: "1 rue de voltaire, 75001 Paris",
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    {
      name: "Parisien Bar",
      user_id: user_list[1],
      address: "100 rue de colle bert, 92310 Sevres",
      minimumCb : 15,
      latlng: [1.0, 1.0]
    },
    {
      name: "Optimum",
      user_id: user_list[0],
      address: "35 rue d'amsterdam', 75003 Paris",
      minimumCb : 10,
      latlng: [10.0, 10.0]
    },
    {
      name: "Les Chavillois",
      user_id: user_list[1],
      address: "96 avenue de roger salengro, 92370 Chaville",
      minimumCb : 25,
      latlng: [2.0, 2.0]
    },
    {
      name: "La garde de nuit",
      user_id: user_list[3],
      address: "23 rue d'aubergine, 75020 Paris",
      minimumCb : 5,
      latlng: [3.0, 3.0]
    },
    {
      name: "Soif",
      user_id: user_list[3],
      address: "68 rue de cougette, 75015 Paris",
      minimumCb : 5,
      latlng: [3.5, 3.5]
    }
  ]
  
  Bar.insertMany(dataBar)
    .then( data => {
      console.log("data inserted")
      mongoose.connection.close()    
    })
    .catch(err => {
      console.log(`Error while inserting bars: ${err}`)
    })
  ;

})
.catch(err=>{
  console.log(`cannot find users in db ${err}`)
})
