//script.js Created on ??-??-2025 By seiitanoo// EDITED BY quentin99999
// Cleaned tf out of this code hard.
//Explanation: Main Script

import debug from './debug.js';
import drawMap from './global.js';
import {Canvas, borderLayer, removeLayer} from './global.js';
import Map from './mapdata.js';

//init default layer

var currentLayer = Map().OverworldLayer;
drawMap(currentLayer); borderLayer(currentLayer);

//button functions
const map = document.getElementById('map');
map.style.backgroundImage = "url('maps/site/background.png')";
document.getElementById('version-switch').addEventListener('click', function() {
    if (map.style.backgroundImage.includes('background.png')) {
        map.style.backgroundImage = "url('maps/site/background2.png')";
         document.getElementById('version-display').innerHTML = "Current Version: Black 2"
    } else {
        map.style.backgroundImage = "url('maps/site/background.png')";
        document.getElementById('version-display').innerHTML = "Current Version: White 2"
    }
});

function LayerSwitch(layer, backgroundImage, versionText) {
    currentLayer = layer;
    drawMap(currentLayer);
    borderLayer(currentLayer);
    map.style.backgroundImage = backgroundImage;
    document.getElementById('version-display').innerHTML = versionText;
}
document.getElementById('cave-switch').addEventListener('click', function() {
    LayerSwitch(Map().CaveLayer, map.style.backgroundImage, "Current Layer: Cave");
});


   //comment this out if you Don't want the debug function
   debug(Canvas);
  
