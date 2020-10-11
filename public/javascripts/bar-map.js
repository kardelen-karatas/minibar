const bar = WINDATAS.bar;

var map = L.map('map').setView({lon: 2.349014, lat: 48.864716}, 15);

// add the OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
// }).addTo(map);

//add diff tiles
L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: 'qmJTaDN8sn4KGPTrteU843R7jKVAqobw3Ihzmy7awmNgEAoCWooiJSsYYyx8qpO0'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

axios.get("https://nominatim.openstreetmap.org/", {params: {format:"json", addressdetails: "1", q: bar.address, limit:"1"}})
.then(response => {
  
  const lon = response.data[0].lon;
  const lat = response.data[0].lat;
  
  map.setView({lon: lon, lat: lat}, 18); 

  var beerIcon = L.icon({
    iconUrl: '../images/bar-marker.png',
    iconSize: [70, 70], // size of the icon
    popupAnchor: [0, -30],
  });

  var marker = L.marker({lon:lon, lat:lat}).addTo(map);
  marker.setIcon(beerIcon);
})
.catch(error => {

  console.log(error);

});

