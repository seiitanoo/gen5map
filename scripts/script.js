// Calling From other script
import debug from './debug.js';
import drawMap from './global.js';
import {Canvas, borderLayer, removeLayer} from './global.js';
import OverWorldLayer from './mapdata.js';
import { CaveLayer } from './mapdata.js';


// init
drawMap(OverWorldLayer); 
borderLayer(OverWorldLayer);

//buttons
    document.getElementById('button1').addEventListener('click', function() {
        removeLayer();
        drawMap(OverWorldLayer);
        borderLayer(OverWorldLayer);
});
document.getElementById('button2').addEventListener('click', function() {
    removeLayer();
    drawMap(CaveLayer);
    borderLayer(CaveLayer);
});
   //comment this out if you Don't want the debug function
   debug(Canvas);
  
