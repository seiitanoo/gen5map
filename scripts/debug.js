import mapData from './mapdata.js'

export default function debug(map){
// Debugging feature: Displaying mouse coordinates
map.on('mousemove', function(e) {
    //mouse pos
    var latlng = e.latlng;
    //updatehtml
    document.getElementById('coords').innerHTML = "y: " + latlng.lat.toFixed(0) + ", x: " + latlng.lng.toFixed(0);  
});

// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    var latlng = e.latlng;
    let coordinates = "y: " + latlng.lat.toFixed(0) + "<br>x: " + latlng.lng.toFixed(0); // Format coordinate
    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}