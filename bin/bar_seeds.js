const mongoose = require('mongoose');
const Bar = require('../models/Bar.model');
const User = require('../models/User.model');
 
const dbtitle = 'minibar';
mongoose.connect(`mongodb://localhost/${dbtitle}`, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
  .then( db => {
  console.log(`connected to ${db}`)
})
  .catch(err => {
  console.log(`Connexion problem: ${err}`)
});


Bar.collection.drop();

const user_list = []

// t: 0.1
User.find()
.then(users => {
  // t: 2
  for (let user of users) {
    user_list.push(user["_id"])
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
      user_id: user_list[2],
      address: "23 rue d'aubergine, 75020 Paris",
      minimumCb : 5,
      latlng: [3.0, 3.0]
    },
    {
      name: "Soif",
      user_id: user_list[2],
      address: "68 rue de cougette, 75015 Paris",
      minimumCb : 5,
      latlng: [3.5, 3.5]
    },
    {
      name:"Bar Hemingway",
      address:"Ritz Paris, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Ballroom",
      address:"58 rue Jean Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"N’importe Quoi",
      address:"16 rue du Roule, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"The Drink Doctor",
      address:"9 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"RESET",
      address:"17 rue du Cygne, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Dernier Bar avant la Fin du Monde",
      address:"19 avenue Victoria, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"A Jean Nicot",
      address:"173 Rue St Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar 228",
      address:"Le Meurice, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Rubis",
      address:"10 rue du Marché Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"The Labo",
      address:"37 rue des Lombards, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Ritz Bar",
      address:"Ritz Paris, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Fumoir",
      address:"6 rue de l'Amiral de Coligny, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Beho",
      address:"8 place Ste Opportune, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Caveau Montpensier",
      address:"15 rue Montpensier, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar 8",
      address:"251 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"ACT 21",
      address:"5 rue Sauval, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Verjus",
      address:"47 rue Montpensier, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Poule Up",
      address:"12 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Carpe Diem Café",
      address:"21 rue des Halles, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar O",
      address:"19 rue Hérold, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Perdition",
      address:"60 rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar Eight",
      address:"251 rue Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Willi’s Wine Bar",
      address:"13 rue des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"De Voltaire à Rousseau",
      address:"4 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le 3.6.9",
      address:"11 rue de la Feronnerie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Balagan",
      address:"9 rue d'Alger, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Hôtel Costes",
      address:"239 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Maison Maison",
      address:"16 quai du Louvre, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Max",
      address:"6 rue de la Petite Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar du Saint James",
      address:"6 rue du 29 Juillet, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Quid",
      address:"12 rue de la Grande Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Les Voyelles",
      address:"74 quai des Orfèvres, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Du Coq à l’Ane",
      address:"28 rue Croix des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Bon Pêcheur",
      address:"9 rue des Prêcheurs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Cercle Suédois",
      address:"242 rue de Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Bogman ex Gobelet d’argent",
      address:"2 rue de la Petite Truanderie, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Cave à Saké",
      address:"8 rue Thérèse, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Cabanon",
      address:"42 Rue Croix des Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Oustaou Café",
      address:"28 bis rue Richelieu, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Garde Robe",
      address:"41 rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Guinness Tavern",
      address:"31 rue des Lombards, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le 7ème Bar",
      address:"Forum des Images, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Ecluse",
      address:"34 place du Marché Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Mc Brides",
      address:"54 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Nelson’s",
      address:"16 rue Coquillière, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Étienne Marcel",
      address:"34 rue Etienne Marcel, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Avant Première",
      address:"9 rue Petits Champs, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Else",
      address:"49 rue Berger, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Isadora",
      address:"60 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Sanseveria",
      address:"248 rue de Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Caylus",
      address:"18 rue des Halles, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Cave Crus Paris",
      address:"3 rue du Plat d'Etain, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café de l’Epoque",
      address:"2 Rue Bouloi, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Relais du Vin",
      address:"85 Rue St Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Coupe d’Or",
      address:"330 rue St Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Promenade Newyorkais",
      address:"44 rue du Louvre, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Corona",
      address:"2 rue de l'Amiral de Coligny, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Sous Bock",
      address:"49 rue Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Les Aigles",
      address:"176 rue Rivoli, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Jip’s",
      address:"41 rue Saint-Denis, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
       latlng: [0.0, 0.0]
       },{name:"L’Oratoire",
      address:"143 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Velvet Bar",
      address:"43 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Nomad’s",
      address:"12-14 rue du Marché Saint Honoré, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Esperantie Kitchen & Bar",
      address:"74 quai des Orfèvres, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Joly",
      address:"23 avenue Victoria, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Inavoué",
      address:"4 impasse Gomboust, 75001 Paris",
      user_id: user_list[1],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Juvéniles",
      address:"47 rue de Richelieu, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Banana Café",
      address:"13 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Vini",
      address:"12 rue jean jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Oz - Châtelet",
      address:"18 rue Saint-Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Trappiste",
      address:"4 rue Saint Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Chez Gab’s",
      address:"12 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Absinthe",
      address:"24 place du Marché Saint-Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Bistro",
      address:"8 rue Marché St Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Hide Pub Club",
      address:"46 rue des Lombards, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Ô Chateau",
      address:"68 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar Tuileries",
      address:"3 Rue de Castglione, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Postiche",
      address:"62 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"El Tonel",
      address:"5 rue des Pyramides, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café des Faussaires",
      address:"28 Croix des Petits Champs, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Ellsworth",
      address:"34 rue de Richelieu, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Grand Bay Café",
      address:"11 rue des Halles, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Vieux Léon",
      address:"18 rue de la Grande Truanderie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Colombe",
      address:"2 Rue De La Paix, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Transfert",
      address:"3 rue la Sourdière, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Odette",
      address:"25 rue du Pont Neuf, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Uma",
      address:"7 rue du 29 juillet, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"CHANG",
      address:"22 rue des Pyramides, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Kong",
      address:"1 rue du Pont Neuf, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Entracte",
      address:"47 rue Montpensier, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Hall’s Beer Tavern",
      address:"68 rue Saint-Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Excuse Bar",
      address:"4 bis place Sainte-Opportune, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Gioia",
      address:"188 rue de Rivoli, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Yakishop",
      address:"15 Rue du Roule, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Pot de Vins",
      address:"36 rue Croix des Petits Champs, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Cochon à l’Oreille",
      address:"15 rue Montmartre, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Nustrale",
      address:"44 rue de la Coquillière, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Taverne de l’Arbre Sec",
      address:"109 rue St Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Chez Serge",
      address:"84 Rue St Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Spicy Home",
      address:"65 boulevard de Sébastopol, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Oustaou",
      address:"28 rue de Richelieu, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Les Voutes Saint Honoré",
      address:"99-101 rue saint honore, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Mil’a",
      address:"11 rue Jean-Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café GIG",
      address:"Rue des Halles, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Shisha One",
      address:"1 rue de la Grande Truanderie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Carrousel Français",
      address:"12 rue de Turbigo, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Envers",
      address:"41 rue Coquillère, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Potion and Co",
      address:"99 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Clairon",
      address:"12 rue de Montmartre, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"California Avenue",
      address:"33 rue des Lombards, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"A la Tête d’Or",
      address:"6 rue des Lavandières Sainte Opportune, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Cosy",
      address:"26 rue Mont Thabor, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Monstre",
      address:"5 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Etienne",
      address:"14 rue Turbigo, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Crazytroc",
      address:"1 rue Plat d'Etain, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Black Turtle",
      address:"46 rue Croix-des-Petits-Champs, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Pointe Saint-Eustache",
      address:"1 Rue Montorgueil, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Divins",
      address:"25 rue Hérold, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Quigley’s Point",
      address:"5 Rue Jour, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Baltard",
      address:"11 Rue St Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"La Cave de l’Auberge",
      address:"14 quai de la Mégisserie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Renard",
      address:"Jardin des Tuileries, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Num",
      address:"10 rue Coquillière, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Kachette",
      address:"60 rue de l'Arbre-Sec, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Hysteria",
      address:"188 bis rue de Rivoli, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Louvre Ripaille",
      address:"1 Rue Perrault, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Officine du Louvre",
      address:"Hôtel du Louvre, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Scilicet",
      address:"134 voie Georges Pompidou, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Chez Bichon",
      address:"51 rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"T’as pas des Tapas",
      address:"11 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Père Tranquille",
      address:"16 rue Pierre Lescot, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Liquorium",
      address:"11 rue Saint Denis, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Galerie Schmit",
      address:"396 Rue Saint Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’alternative",
      address:"5 rue molière, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"El Coude à Coude",
      address:"46 rue Saint-Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Postiche",
      address:"62 Rue Jean Jacques Rousseau, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Au Coeur Couronné",
      address:"6 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Bailleul",
      address:"39 Rue de l'Arbre Sec, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Bar des Halles",
      address:"71 rue Saint Honoré, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café du musée Chez Alex et Mamy",
      address:"10 Rue du Louvre, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café de Diane",
      address:"Allée de Diane, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Casa Montorgueil",
      address:"24 rue Montorgueil, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Kent’S",
      address:"2 Rue Vauvilliers, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Elite",
      address:"8 rue Baillet, 75001 Paris",
      user_id: user_list[2],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Starcooker et Cie",
      address:"4 Rue Gomboust, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Café Launi",
      address:"19 Place du Marché St-Honoré, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Museveraite",
      address:"10 rue du Jour, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Cointreau Privé 2",
      address:"19 Rue Danielle Casanova, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"K.V.K",
      address:"3-5 rue de la Ferronnerie, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Isis Café",
      address:"31 rue des Lombards, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Vino’S",
      address:"29 Rue d'Argenteuil, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Comptoir du Baron",
      address:"Rue Française, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"L’Antipasti",
      address:"17 rue du Cygne, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Il Cimino",
      address:"19 rue Hérold, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Comptoir Saint Honore",
      address:"29 rue du Pont-Neuf, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Baboto",
      address:"12 rue Ferronnerie, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"I Love Opéra",
      address:"31 avenue de l'Opéra, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Rose Club",
      address:"14 rue Mondétour, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Thermidor",
      address:"2 rue croix des Petits Champs, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Fbf Saint Orens",
      address:"29 rue Jean Jacques Rousseau, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Baja Montparnasse",
      address:"29 rue Jean Jacques Rousseau, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Saint-Amour",
      address:"19 Rue Etienne Marcel, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Espace Madeleine",
      address:"11 rue Duphot, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Coffee Shop Segafredo",
      address:"18 Rue Duphot, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Jean Durup Pere et Fils",
      address:"68 Rue St Denis, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"MeoMeo",
      address:"176 rue Rivoli, 75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Le Centre Halles",
      address:"75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
    },
    { name:"Les Aigles",
      address:"75001 Paris",
      user_id: user_list[0],
      minimumCb : 5,
      latlng: [0.0, 0.0]
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