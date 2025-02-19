// Calling From other script
import mapData from './scripts/mapdata.js';
import debug from './scripts/debug.js';

// Leaflet map setup (same as before)
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4.0,
    maxZoom: 2.5
});

//inital map position


// loop to draw each map piece
    // create to become a global function. 
        for (const image of mapData) {
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
    const allBounds = mapData.map(image => [[image.y, image.x], [image.y + image.height, image.x + image.width]]);
    // ngl i dont understand this math ill do it later, i chatgpt'ed this part. from my understanding it uses more complex math to make sure no fuckery happens when a new image is added
    // to the array, which would completely disrupt the bounding box we used before
    const combinedBounds = allBounds.reduce((acc, curr) => {
        const [[minY, minX], [maxY, maxX]] = curr;
        return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)], [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];
    }, [[Infinity, Infinity], [-Infinity, -Infinity]]);
    
    map.fitBounds(combinedBounds);
    map.setView([1552, 2060], -2.0);
   //comment this out if you Don't want the debug function
   debug(map);
   