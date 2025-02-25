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
    
    // check if mouse is within bounds
    for (let i = 0; i < mapData.length; i++) { // Correct loop and variable declaration
        if (latlng.lng < mapData[i].x + mapData[i].width && latlng.lng > mapData[i].x && latlng.lat < mapData[i].y + mapData[i].height && latlng.lat > mapData[i].y) {
            console.log("Mouse is within the bounds of", mapData[i].path);
            document.getElementById('area').innerHTML = "Area Name: " + mapData[i].path;  
            // Add your logic here
        }
    }
});

const hoverBounds = [];
    mapData.forEach(area => {
        const bounds = [[area.y, area.x], [area.y + area.height, area.x + area.width]];
        const border = L.rectangle(bounds, { color: 'transparent', weight: 0.0, areaData: area}).addTo(map);
// condition
        border.on({
            // on mouse hovering over bounds
            mouseover: function(e) {
                e.target.setStyle({color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.0});
                document.getElementById('area').innerHTML = "Area Name: " + e.target.options.areaData.path;},
           // mouse stops hovering over bounds
                mouseout: function(e) {
                e.target.setStyle({
                    color: 'transparent', // Remove border on mouseout
                    weight: 0, // Remove border on mouseout
                    fillOpacity: 0.1 // Revert to original fill opacity
                });
                // edit active name on html
                document.getElementById('area').innerHTML = "Area Name: ";
            }
        });
        hoverBounds.push(border);
    });

// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    var latlng = e.latlng;
    let coordinates = "Latitude: " + latlng.lat + "<br>Longitude: " + latlng.lng; // Format coordinate
    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}
