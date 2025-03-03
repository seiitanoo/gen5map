//debug.js Created on 2-19-2025 By quentin99999
//Explanation: All the random debug stuff I might need.

import Map from "../data/mapdata.js";
import Pins from "../data/pindata.js";

export default function debug(map){
// Debugging feature: Displaying mouse coordinates
map.on('mousemove', function(e) {
    //mouse pos
    var latlng = e.latlng;
    //updatehtml
    document.getElementById('coords').innerHTML = "y: " + latlng.lat.toFixed(0) + ", x: " + latlng.lng.toFixed(0);  
});

// Adds a marker on the map when clicked, which displays the coordinates of the pin
map.on('click', function(e) {
    var latlng = e.latlng;
    let coordinates = "y: " + latlng.lat.toFixed(0) + "<br>x: " + latlng.lng.toFixed(0); // Format coordinate
    L.marker(e.latlng).addTo(map).bindPopup(coordinates); // Use coordinates in popup
});
}

// display display contents of arrays (good to check for bad data)
export function CheckMapArray(){
    const mapData = Map();
    for (const layer in mapData) {
      if (mapData.hasOwnProperty(layer)) {
        console.log(`Layer: ${layer}`);
        mapData[layer].forEach((item, index) => {
          console.log(`Item ${index}:`, item);
        });
      }
    }
}

export function CheckPinsArray(){

  const pins = Pins();

  console.log('OverworldLayer Pins:');
  for (const pin of pins.OverworldLayer) {
      console.log(`Area: ${pin.area}, X: ${pin.x}, Y: ${pin.y}, Icon: ${pin.icon}, Text: ${pin.text}, Enabled: ${pin.ENABLED}, Hidden: ${pin.HIDDEN}`);
  }

  console.log('CaveLayer Pins:');
  for (const pin of pins.CaveLayer) {
      console.log(`Area: ${pin.area}, X: ${pin.x}, Y: ${pin.y}, Icon: ${pin.icon}, Text: ${pin.text}, Enabled: ${pin.ENABLED}, Hidden: ${pin.HIDDEN}`);
  }
}
