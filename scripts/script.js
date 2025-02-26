// Calling From other script
import debug from './debug.js';
import hoverfunc from './global.js';
import { lowerUnovaMap, UpperUnovaMap, } from './mapdata.js';
import fullmap  from './mapdata.js';

// Leaflet map setup (same as before)
var map = L.map('map', {
    crs: L.CRS.Simple,
    zoomSnap: .125,
    minZoom: -4.0,
    maxZoom: 2.5
});

var activeMap = fullmap;
function drawMap(){
    for (const image of activeMap) {
         const bounds = [[image.y, image.x], [image.y + image.height, image.x + image.width]];
        L.imageOverlay(image.path, bounds, {crs: L.CRS.Simple, width:image.width, height:image.height}).addTo(map)};
        const allBounds = activeMap.map(image => [[image.y, image.x], [image.y + image.height, image.x + image.width]]);
        const combinedBounds = allBounds.reduce((acc, curr) => {
            const [[minY, minX], [maxY, maxX]] = curr;
            return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)], [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];
        }, [[Infinity, Infinity], [-Infinity, -Infinity]]);
        
        map.fitBounds(combinedBounds);

    }

drawMap();
export default activeMap;
hoverfunc(map);
    

    // ngl i dont understand this math ill do it later, i chatgpt'ed this part. from my understanding it uses more complex math to make sure no fuckery happens when a new image is added
    // to the array, which would completely disrupt the bounding box we used before

    function removeLayer(){
        map.eachLayer(function (layer) {
            if(layer instanceof L.ImageOverlay){
                map.removeLayer(layer);
            }
        });
    }
    
   


    document.getElementById('map1').addEventListener('click', function() {
    if (activeMap !== lowerUnovaMap) {
        removeLayer();
        activeMap = lowerUnovaMap;
        drawMap();
        hoverfunc(map);
    }
});

document.getElementById('map2').addEventListener('click', function() {
    if (activeMap !== UpperUnovaMap) {
        removeLayer();
        activeMap = UpperUnovaMap;
        drawMap();
        hoverfunc(map);
    }
});
document.getElementById('map3').addEventListener('click', function() {
    if (activeMap !== fullmap) {
        removeLayer();
        activeMap = fullmap;
        drawMap();
        hoverfunc(map);
    }
});



   //comment this out if you Don't want the debug function
   debug(map);
  
