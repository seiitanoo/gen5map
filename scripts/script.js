//script.js Created on ??-??-2025 By seiitanoo// EDITED BY quentin99999
// Cleaned tf out of this code hard.
//Explanation: Main Script


import Map from './data/mapdata.js';
import Pins from './data/pindata.js';
import Entrance from './data/entrancedata.js'
import swapAll, {Canvas} from './logic/mapdraw.js';
import debug from './ui/debug.js';

//init default layer

export var currentLayer = Map[0];
export var currentPinLayer = Pins[0];
export var currentEntranceLayer = Entrance[0];

swapAll(currentLayer, currentPinLayer, currentEntranceLayer);











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





document.getElementById('button2').addEventListener('click', function() {
    currentLayer = Map[1]; currentPinLayer = Pins[1]; currentEntranceLayer = Entrance[1];
    swapAll(currentLayer,currentPinLayer, currentEntranceLayer);
});
document.getElementById('button1').addEventListener('click', function() {
    currentLayer = Map[0]; currentPinLayer = Pins[0]; currentEntranceLayer = Entrance[0];
    swapAll(currentLayer, currentPinLayer,currentEntranceLayer);
});


   //comment this out if you Don't want the debug function
   debug(Canvas);
 