const bar = WINDATAS.bar

var map = L.map('map').setView({lon: 2.349014, lat: 48.864716}, 15);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);


console.log(bar.address)
axios.get("https://nominatim.openstreetmap.org/", {params: {format:"json", addressdetails: "1", q: bar.address, format:"json", limit:"1"}})
.then(response => {
  const lon = response.data[0]["lon"]
  const lat = response.data[0]["lat"]
  L.marker({lon: lon, lat: lat}).bindPopup(bar.name).addTo(map);
  map.setView({lon: lon, lat: lat}, 20);  
})
.catch(error => {
  console.log(error);
});

