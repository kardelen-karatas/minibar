const mongoose = require('mongoose');
const Bar = require('../models/Bar.model');
const User = require('../models/User.model');
 
const dbtitle = 'minibar';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
  .then( db => {
  console.log(`connected to ${db}`);
})
  .catch(err => {
  console.log(`Connexion problem: ${err}`);
});


Bar.collection.drop();

const user_list = [];

// t: 0.1
User.find()
.then(users => {
  // t: 2
  for (let user of users) {
    user_list.push(user["_id"]);
  }

  const dataBar = [
    {
      name: "Northern Bar",
      user_id: user_list[0],
      address: "1 rue voltaire, 75001 Paris",
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    {
      name: "Optimum",
      user_id: user_list[0],
      address: "35 rue d'amsterdam', 75003 Paris",
      minimumCb : 10,
      latlng: [10.0, 10.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    {
      name: "Les Chavillois",
      user_id: user_list[1],
      address: "96 avenue roger salengro, 92370 Chaville",
      minimumCb : 25,
      latlng: [2.0, 2.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    {
      name:"Bar Hemingway",
      address:"Ritz Paris, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Ballroom",
      address:"58 rue Jean Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"N’importe Quoi",
      address:"16 rue du Roule, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"The Drink Doctor",
      address:"9 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"RESET",
      address:"17 rue du Cygne, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Dernier Bar avant la Fin du Monde",
      address:"19 avenue Victoria, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"A Jean Nicot",
      address:"173 Rue St Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar 228",
      address:"Le Meurice, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Rubis",
      address:"10 rue du Marché Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"The Labo",
      address:"37 rue des Lombards, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Ritz Bar",
      address:"Ritz Paris, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Fumoir",
      address:"6 rue de l'Amiral de Coligny, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Beho",
      address:"8 place Ste Opportune, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1502819126416-d387f86d47a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Au Caveau Montpensier",
      address:"15 rue Montpensier, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar 8",
      address:"251 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"ACT 21",
      address:"5 rue Sauval, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Verjus",
      address:"47 rue Montpensier, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Poule Up",
      address:"12 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Carpe Diem Café",
      address:"21 rue des Halles, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar O",
      address:"19 rue Hérold, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Perdition",
      address:"60 rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar Eight",
      address:"251 rue Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Willi’s Wine Bar",
      address:"13 rue des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"De Voltaire à Rousseau",
      address:"4 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1468072114808-903e572b8ead?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le 3.6.9",
      address:"11 rue de la Feronnerie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Balagan",
      address:"9 rue d'Alger, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Hôtel Costes",
      address:"239 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Maison Maison",
      address:"16 quai du Louvre, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Max",
      address:"6 rue de la Petite Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar du Saint James",
      address:"6 rue du 29 Juillet, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Quid",
      address:"12 rue de la Grande Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Les Voyelles",
      address:"74 quai des Orfèvres, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Du Coq à l’Ane",
      address:"28 rue Croix des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Bon Pêcheur",
      address:"9 rue des Prêcheurs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Cercle Suédois",
      address:"242 rue de Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Bogman ex Gobelet d’argent",
      address:"2 rue de la Petite Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"La Cave à Saké",
      address:"8 rue Thérèse, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Au Cabanon",
      address:"42 Rue Croix des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Oustaou Café",
      address:"28 bis rue Richelieu, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Garde Robe",
      address:"41 rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Guinness Tavern",
      address:"31 rue des Lombards, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le 7ème Bar",
      address:"Forum des Images, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"L’Ecluse",
      address:"34 place du Marché Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Mc Brides",
      address:"54 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Nelson’s",
      address:"16 rue Coquillière, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Étienne Marcel",
      address:"34 rue Etienne Marcel, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1523567830207-96731740fa71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"L’Avant Première",
      address:"9 rue Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Else",
      address:"49 rue Berger, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Isadora",
      address:"60 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Sanseveria",
      address:"248 rue de Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Caylus",
      address:"18 rue des Halles, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"La Cave Crus Paris",
      address:"3 rue du Plat d'Etain, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Café de l’Epoque",
      address:"2 Rue Bouloi, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Relais du Vin",
      address:"85 Rue St Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"La Coupe d’Or",
      address:"330 rue St Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Promenade Newyorkais",
      address:"44 rue du Louvre, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Corona",
      address:"2 rue de l'Amiral de Coligny, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Sous Bock",
      address:"49 rue Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Les Aigles",
      address:"176 rue Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1491333078588-55b6733c7de6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Jip’s",
      address:"41 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    {
      name:"L’Oratoire",
      address:"143 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Velvet Bar",
      address:"43 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Nomad’s",
      address:"12-14 rue du Marché Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Esperantie Kitchen & Bar",
      address:"74 quai des Orfèvres, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Café Joly",
      address:"23 avenue Victoria, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Inavoué",
      address:"4 impasse Gomboust, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Juvéniles",
      address:"47 rue de Richelieu, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Banana Café",
      address:"13 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Vini",
      address:"12 rue jean jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Café Oz - Châtelet",
      address:"18 rue Saint-Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Au Trappiste",
      address:"4 rue Saint Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Chez Gab’s",
      address:"12 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"L’Absinthe",
      address:"24 place du Marché Saint-Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Au Bistro",
      address:"8 rue Marché St Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Hide Pub Club",
      address:"46 rue des Lombards, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Ô Chateau",
      address:"68 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Bar Tuileries",
      address:"3 Rue de Castglione, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Postiche",
      address:"62 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"El Tonel",
      address:"5 rue des Pyramides, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Café des Faussaires",
      address:"28 Croix des Petits Champs, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Ellsworth",
      address:"34 rue de Richelieu, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Grand Bay Café",
      address:"11 rue des Halles, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    },
    { name:"Le Vieux Léon",
      address:"18 rue de la Grande Truanderie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0],
      imageURL: "https://images.unsplash.com/photo-1510238890104-d15a38f787b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=320"
    }
  ];
  
  Bar.insertMany(dataBar)
    .then( data => {
      console.log("data inserted");
      mongoose.connection.close();
    })
    .catch(err => {
      console.log(`Error while inserting bars: ${err}`);
    })
  ;

})
.catch(err=>{
  console.log(`cannot find users in db ${err}`);
});
