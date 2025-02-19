// Leaflet map setup (same as before)S
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4.0,
    maxZoom: 2.5
});
//inital map position
map.setView([2490, 4118], 2.5);
//creating an array of all the images (perferably we make these 'relatively' 
// small so we can do the seperate image thing.) this also enables us to just make new const for each
// area. So say lowerleftunova, make const LLU =  [each image's data here].
const imageData = [
    // Lower Left Unova
    {
        y: 0,
        x: 0,
        width: 4777,
        height: 3906,
        path: 'tmpimg/LowerLeftUnova.png'
    },
    // Castelia City
    {
        y: 1024,
        x: 5000,
        width: 3922,
        height: 3596,
        path: 'Map Piece Clusters/FullCluster/CasteliaCity.png'
    },
    // Lower Central Unova
    {
        y: 4200,
        x: 4155,
        width: 4396,
        height: 4685,
        path: 'tmpimg/LowerCentralUnova.png'
    },
]
        // loop to draw each map piece
        for (const image of imageData) {
            // second element of array gets the correct image bounding box
            const bounds = [[image.y, image.x], [image.y + image.height, image.x + image.width]];
            // crs: L.CRS.Simple is some leaflet stuff to say the coordinates are PIXELS and not litteral real lat and long data
            L.imageOverlay(image.path, bounds,{
                crs: L.CRS.Simple, 
                    width: image.width, 
                    height: image.height
                }).addTo(map);
            }
    
    // Fit the map bounds to encompass all images
    const allBounds = imageData.map(image => [[image.y, image.x], [image.y + image.height, image.x + image.width]]);
    // ngl i dont understand this math ill do it later, i chatgpt'ed this part. from my understanding it uses more complex math to make sure no fuckery happens when a new image is added
    // to the array, which would completely disrupt the bounding box we used before
    const combinedBounds = allBounds.reduce((acc, curr) => {
        const [[minY, minX], [maxY, maxX]] = curr;
        return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)], [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];
    }, [[Infinity, Infinity], [-Infinity, -Infinity]]);
    
    map.fitBounds(combinedBounds);
    

// Adds a marker on the map when clicked
map.on('click', function(e) {
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    let coordinates = "Latitude: " + lat + "<br>Longitude: " + lng; // Format coordinates

    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});

// Debugging feature: Displaying mouse coordinates
map.on('mousemove', function(e) {
    // Get the mouse position (LatLng format)
    var latlng = e.latlng;

    // Log to console (you can change this to display somewhere else)
    console.log('Mouse position: Lat: ' + latlng.lat + ', Lng: ' + latlng.lng);

    // Alternatively, update an HTML element with the coordinates
    document.getElementById('coords').innerHTML = "Lat: " + latlng.lat.toFixed(3) + ", Lng: " + latlng.lng.toFixed(3);
});
