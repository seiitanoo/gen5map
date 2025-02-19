

export default function debug(map){
// Debugging feature: Displaying mouse coordinates
map.on('mousemove', function(e) {
    // Get the mouse position (LatLng format)
    var latlng = e.latlng;

    // Log to console (you can change this to display somewhere else)
    console.log('Mouse position: Lat: ' + latlng.lat + ', Lng: ' + latlng.lng);

    // Alternatively, update an HTML element with the coordinates
    document.getElementById('coords').innerHTML = "Lat: " + latlng.lat.toFixed(3) + ", Lng: " + latlng.lng.toFixed(3);
});
// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let coordinates = "Latitude: " + lat + "<br>Longitude: " + lng; // Format coordinates

    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}
