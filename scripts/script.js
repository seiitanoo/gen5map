// Calling From other script
import debug from './debug.js';
import drawMap from './global.js';
import {Canvas, borderLayer, removeLayer} from './global.js';
import Map from './mapdata.js';

// init
let OverWorld = Map().OverworldLayer;
let Cave = Map().CaveLayer;

drawMap(OverWorld); 
borderLayer(OverWorld);

//buttons
    document.getElementById('button1').addEventListener('click', function() {
        removeLayer();
        drawMap(OverWorld);
        borderLayer(OverWorld);
});
document.getElementById('button2').addEventListener('click', function() {
    removeLayer();
    drawMap(Cave);
    borderLayer(Cave);
});
   //comment this out if you Don't want the debug function
   debug(Canvas);
  
