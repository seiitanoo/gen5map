// Calling From other script
import debug from './debug.js';
import drawMap from './global.js';
import {Canvas, borderLayer, removeLayer} from './global.js';
import Map from './mapdata.js';

// init
let OverWorld = Map().OverworldLayer; let Cave = Map().CaveLayer;

//default layer
drawMap(OverWorld); borderLayer(OverWorld);

//button functions
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        removeLayer();
        const layer = button.id === 'button1' ? OverWorld : Cave;
        drawMap(layer);
        borderLayer(layer);
    });
});
   //comment this out if you Don't want the debug function
   debug(Canvas);
  
