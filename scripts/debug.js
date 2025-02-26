import mapData from './mapdata.js'

export default function debug(map){
// Debugging feature: Displaying mouse coordinates
map.on('mousemove', function(e) {
    //mouse pos
    var latlng = e.latlng;
    //updatehtml
    document.getElementById('coords').innerHTML = "Lat: " + latlng.lat.toFixed(3) + ", Lng: " + latlng.lng.toFixed(3);  
});

// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    var latlng = e.latlng;
    let coordinates = "Latitude: " + latlng.lat + "<br>Longitude: " + latlng.lng; // Format coordinate
    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}