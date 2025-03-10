//script.js Created on ??-??-2025 By seiitanoo// EDITED BY quentin99999
// Cleaned tf out of this code hard.
//Explanation: Main Script


import Map from './data/mapdata.js';
import Pins from './data/pindata.js';
import Entrance from './data/entrancedata.js'
import swapAll, {Canvas} from './logic/mapdraw.js';
import debug from './ui/debug.js';
import drawTable, {table1,table2} from './data/tabletest.js';
//init default layer

export var currentLayer = Map[0];
export var currentPinLayer = Pins[0];
export var currentEntranceLayer = Entrance[0];

swapAll(currentLayer, currentPinLayer, currentEntranceLayer);











//version switch
const map = document.getElementById('map');
map.style.backgroundImage = "url('media/site/background.png')";
document.getElementById('version-switch').addEventListener('click', function() {
    if (map.style.backgroundImage.includes('background.png')) {
        map.style.backgroundImage = "url('media/site/background2.png')";
         document.getElementById('version-display').innerHTML = "Current Version: Black 2"
    } else {
        map.style.backgroundImage = "url('media/site/background.png')";
        document.getElementById('version-display').innerHTML = "Current Version: White 2"
    }
});





document.getElementById('button2').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    if (tableContainer) {
      if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
        tableContainer.style.display = 'block'; // Or 'inline', 'inline-block', etc.
      } else {
        tableContainer.style.display = 'none';
      }
    }
  });
document.getElementById('button1').addEventListener('click', function() {
    currentLayer = Map[0]; currentPinLayer = Pins[0]; currentEntranceLayer = Entrance[0];
    swapAll(currentLayer, currentPinLayer,currentEntranceLayer);
});


   //comment this out if you Don't want the debug function
   debug(Canvas);
 drawTable(table1, "tableContainer", 0);