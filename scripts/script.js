//script.js Created on ??-??-2025 By seiitanoo// EDITED BY quentin99999
// Cleaned tf out of this code hard.
//Explanation: Main Script

import debug, { CheckMapArray, CheckPinsArray, } from './ui/debug.js';
import drawMap, { drawEntrancePins } from './global.js';
import {Canvas, drawBorder, removeLayer, drawPins } from './global.js';
import Map from './data/mapdata.js';
import Pins from './data/pindata.js';
import EntrancePins from './data/entrancedata.js';

//init default layer
var currentLayer = Map().OverworldLayer;
var currentPinLayer = Pins().OverworldLayer;
var currentEntranceLayer = EntrancePins().Entrances;
export var maps = [Map().OverworldLayer, Map().CaveLayer];
drawMap(currentLayer); drawBorder(currentLayer); drawPins(currentPinLayer); drawEntrancePins(currentEntranceLayer);













//version switch
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
// switch layer
function LayerSwitch(layer, backgroundImage, versionText, pinLayer) {
    currentLayer = layer;
    currentPinLayer = pinLayer;
    removeLayer();  drawMap(layer); drawBorder(layer); drawPins(pinLayer); 
     map.style.backgroundImage = backgroundImage;
 // display current layer
    document.getElementById('layer-display').innerHTML = versionText;
}


document.getElementById('button2').addEventListener('click', function() {
    LayerSwitch(Map().CaveLayer, map.style.backgroundImage, "Current Layer: Cave", Pins().CaveLayer);
});
document.getElementById('button1').addEventListener('click', function() {
    LayerSwitch(Map().OverworldLayer, map.style.backgroundImage, "Current Layer: Overworld",Pins().OverworldLayer);
});


   //comment this out if you Don't want the debug function
   debug(Canvas);
  CheckMapArray();
CheckPinsArray();