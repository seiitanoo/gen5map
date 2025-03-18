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


// Popout Button Container: 
    //version switch
    const map = document.getElementById('map');
    const buttonswitch = document.getElementById('version-switch');
    map.style.backgroundImage = "url('media/site/background.png')";
    document.getElementById('version-switch').addEventListener('click', function() {
        if (map.style.backgroundImage.includes('background.png')) {
            map.style.backgroundImage = "url('media/site/background2.png')";
            document.getElementById('version-display').innerHTML = "Current Version: Black 2"
        
        } else {
            map.style.backgroundImage = "url('media/site/background.png')";
            document.getElementById('version-display').innerHTML = "Current Version: White 2"      
    }
    buttonswitch.classList.toggle('active');
    });



// item dropdown popup (maybe)
const itemsBtn = document.getElementById('item-button-drop');
const itemsList = document.getElementById('item-checklist');
const labels = document.querySelectorAll('#item-checklist label');

itemsBtn.addEventListener('click', function() {
  itemsList.style.display = itemsList.style.display === 'grid' ? 'none' : 'grid';
  itemsBtn.classList.toggle('active');
});

labels.forEach(label => {
  label.addEventListener('click', function() {

    if (label.classList.contains('checked')) {
      label.classList.remove('checked');
      label.classList.add('unchecked');
    } else {
      label.classList.remove('unchecked');
      label.classList.add('checked');
    } 
});
});

// gym filter button
document.getElementById('gym-button').addEventListener('click', function() {
});
// entrance filter button
document.getElementById('entrance-button').addEventListener('click', function() {
});
// version switch


   //comment this out if you Don't want the debug function
   debug(Canvas);