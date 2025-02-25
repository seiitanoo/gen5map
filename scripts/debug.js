import mapData from './mapdata.js'

export default function debug(map){
// Debugging feature: Displaying mouse coordinates



map.on('mousemove', function(e) {
    // Get the mouse position (LatLng format)
    var latlng = e.latlng;
    // Log to console (you can change this to display somewhere else)
    console.log('Mouse position: Lat: ' + latlng.lat + ', Lng: ' + latlng.lng);
    // Alternatively, update an HTML element with the coordinates
    document.getElementById('coords').innerHTML = "Lat: " + latlng.lat.toFixed(3) + ", Lng: " + latlng.lng.toFixed(3);  
    
    
    for (let i = 0; i < mapData.length; i++) { // Correct loop and variable declaration
        if (latlng.lng < mapData[i].x + mapData[i].width && latlng.lng > mapData[i].x && latlng.lat < mapData[i].y + mapData[i].height && latlng.lat > mapData[i].y) {
            console.log("Mouse is within the bounds of", mapData[i].path);
            document.getElementById('area').innerHTML = "Area Name: " + mapData[i].path;  
            // Add your logic here
        }
    }
});



// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    var latlng = e.latlng;
    let coordinates = "Latitude: " + latlng.lat + "<br>Longitude: " + latlng.lng; // Format coordinate
    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}
