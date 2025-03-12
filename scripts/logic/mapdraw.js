//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Created to consolodate all the map drawing functions. Mostly everything related to map drawing should be 
// drawn from here- Canvas var needs to be in the same file as all the draw functions. 
import Map from "../data/mapdata.js";
import Pins from "../data/pindata.js";
import Entrance from "../data/entrancedata.js";
import {currentLayer, currentPinLayer, currentEntranceLayer } from "../script.js";
import drawTable, { deleteTable } from "./table.js";
import OverworldTable from "../data/encounterdata/encounters.js";
//init leaflet map and settings

export var Canvas = L.map('map', 
    {attributionControl: false, zoomControl:false,
        crs: L.CRS.Simple,zoomSnap: .125,
         minZoom: -5.0, 
         maxZoom: 2.5, 
         maxBoundsViscosity: 1.0,
         zoomAnimation: true,
         zoomAnimationThreshold: 4,
         fadeAnimation: true,
         markerZoomAnimation: true,
         doubleClickZoom: false,
        });
       L.control.attribution({position:'bottomleft', prefix: 'Made with <a href="https://leafletjs.com/" target="_blank">Leaflet</a> | <br>created by quentin9999 and seiitanoo'}).addTo(Canvas);
        new L.Control.Zoom({ position: 'bottomleft' }).addTo(Canvas);
       console.info(`✅Leaflet Map Created`);
        
//drawing map function/ strict datastructure of array [array {data},{data}]] or this function will not work
 function drawMap(InputLayer) {
    if (InputLayer !== undefined){
for (const png of InputLayer){ 
    const overlay = L.imageOverlay(png.path, findBounds(png), {crs: L.CRS.Simple, width: png.width, height: png.height, opacity: 0}).addTo(Canvas); 
   fadeIn(overlay);
}
      const combinedBounds = InputLayer.reduce(
        (acc, image) => {
          const [[minY, minX], [maxY, maxX]] = findBounds(image);
          return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)],
                  [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];
              }, [[Infinity, Infinity],[-Infinity, -Infinity],]);
             console.info(`✅Map Drawn with ${InputLayer.length} layers`);
       Canvas.fitBounds(combinedBounds);}};



// draw border function
function drawBorder(InputLayer) {
    // Adding borders of maps to the rectangles array
    removeBorders(); // Removes all borders before drawing new ones
    const rectangles = InputLayer.map(png => {
        const border = L.rectangle(findBounds(png), {
            color: 'transparent',
            weight: 0.0,
            pngData: png
        }).addTo(Canvas);
        return { border, png };
    });
    console.info(`✅Inital Border Layer Drawn`);
    
    Canvas.on('click', function(e) {
        const latLng = e.latlng;
        let clickedRectangleIndex = rectangles.findIndex(({ png }) => {
            // Check to see if over an item
            const bounds = findBounds(png);
            return latLng.lat >= bounds[0][0] && latLng.lat <= bounds[1][0] && latLng.lng >= bounds[0][1] && latLng.lng <= bounds[1][1];
        });

        rectangles.forEach(({ border }) => {
            border.setStyle({ color: 'transparent', weight: 0, fillOpacity: 0.1 });
        });

        // If a rectangle was clicked
        if (clickedRectangleIndex !== -1) {
            const clickedRectangle = rectangles[clickedRectangleIndex];
            let index = clickedRectangle.png.area;
            openTable(index, OverworldTable); // Open the table with the index of the clicked rectangle
            console.info(`✅Successfully created Table`);
            clickedRectangle.border.setStyle({ color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.2, dashArray: '5, 5' });
            document.getElementById('area').innerHTML = "Area: " + clickedRectangle.border.options.pngData.area;
        } else {
            document.getElementById('area').innerHTML = "";
        }
    });
}


// drawicons
function drawPins(Input_PinLayer){
    if (Input_PinLayer !== undefined){
        for (const pin of Input_PinLayer){
            if (pin.HIDDEN === true) {
                if (!pin.text.endsWith("❗(Hidden)")) { // Check if the up arrow is already there
                    pin.text += "❗(Hidden)";
                }
              }
            const iconClass = pin.HIDDEN ? 'grayscale-icon' : '';
            if (pin.HIDDEN === true){}
            const marker = L.marker([pin.y, pin.x], {icon: L.icon({iconUrl: pin.icon, iconSize: [38, 38], className: iconClass,}), opacity: pin.HIDDEN ? 0.80 : 1}).addTo(Canvas);
            marker.bindTooltip(pin.text);
         }}};


// draw entrance function, a little bit complex function
function drawEntrance(Input_EntranceLayer) {
if (Input_EntranceLayer !== undefined) {
for (const entrance of Input_EntranceLayer) {
    if (entrance.out === true) {if (!entrance.text.endsWith(" 🔼")) { entrance.text += " 🔼";}}
      if (entrance.out === false) {if (!entrance.text.endsWith(" 🔽")) {entrance.text += " 🔽";}}
const marker = L.marker([entrance.y, entrance.x], {icon: L.icon({iconUrl: entrance.icon, iconSize: [38, 38]})}).addTo(Canvas);
 marker.bindTooltip("To " + entrance.text);
 if (entrance.out === false) { // logic for entering
    marker.on('click', function() { 
    currentLayer == Map[entrance.tolayer]
    const layerID = entrance.tolayer; const pinlayerID = entrance.tolayer; const entrancelayerID = entrance.tolayer; const arrayID = entrance.arrayid; const itemID = entrance.ItemID;
        swapToRoom(Map[layerID][arrayID][itemID], Pins[pinlayerID][arrayID][itemID], Entrance[entrancelayerID][arrayID][itemID]);drawSingleBorder(Map[layerID][arrayID][itemID], layerID, arrayID, itemID);})
 }
if (entrance.out === true) { // logic for leaving
marker.on('click', function(){
currentLayer == Map[entrance.tolayer]; currentPinLayer == Pins[entrance.tolayer]; currentEntranceLayer == Entrance[entrance.tolayer]; 
swapAll(currentLayer, currentPinLayer, currentEntranceLayer); drawBorder(currentLayer);
Canvas.setView([entrance.zoomy,entrance.zoomx],entrance.zoomlevel);})
}}}
console.info(`✅ Successfully Created all Entrances`);

};
// fade in animation for map

function fadeIn(imageOverlay, duration = 25) {
    let opacity = 0;
    const interval = .5;
    const steps = duration / interval;
    const increment = 1 / steps;
    const fadeInterval = setInterval(() => {
        opacity += increment;
        imageOverlay.setOpacity(opacity);
        if (opacity >= 1) {
            clearInterval(fadeInterval);
            imageOverlay.setOpacity(1);
        }
    }, interval);
}

// swap all layers at the same time
export default function swapAll(InputLayer, Input_PinLayer, Input_EntranceLayer){
    removeAllLayers(); 
    if (InputLayer !== undefined){drawMap(InputLayer); drawBorder(InputLayer); drawEntrance(Input_EntranceLayer);}
    if (Input_PinLayer !== undefined){drawPins(Input_PinLayer);}
};
// individual swapfunctions
function openTable (InputIndex,table){ tableContainer.style.display = 'block'; drawTable(InputIndex, table, 'tableContainer');};
function removeTable(index){tableContainer.style.display = 'none'; deleteTable(index);};
function swapToRoom (InputLayer, Input_PinLayer, Input_EntranceLayer){removeAllLayers();singleDrawMap(InputLayer); drawPins(Input_PinLayer); drawEntrance(Input_EntranceLayer);}
function swapMap(InputLayer){removeMap(); drawMap (InputLayer);} 
function swapPins(Input_PinLayer){removePins(); drawPins(Input_PinLayer);};
function swapEntrance(Input_EntranceLayer){removePins(); drawEntrance(Input_EntranceLayer);};
//removal functions
function removeAllLayers(){ removeMap(); removePins();
    console.info(`✅Removed All Layers`);
}
function removePins(){Canvas.eachLayer(function (InputLayer) {if(InputLayer instanceof L.Marker) {Canvas.removeLayer(InputLayer);}})};
function removeBorders(){Canvas.eachLayer(function (InputLayer) {if(InputLayer instanceof L.Rectangle) {Canvas.removeLayer(InputLayer);}})};
function removeMap(){Canvas.eachLayer(function (InputLayer) {if(InputLayer instanceof L.ImageOverlay || InputLayer instanceof L.Rectangle) {Canvas.removeLayer(InputLayer);}})};
//bounds function
function findBounds(png){ const bounds = [[png.y, png.x], [png.y + png.height, png.x + png.width]]; return bounds;};
//draws a singular map piece strict data of array --> what its looking for a sigular data point. so {data}
function singleDrawMap(InputLayer) {
    const bounds = findBounds(InputLayer); 
    const overlay = L.imageOverlay(InputLayer.path,bounds, {crs: L.CRS.Simple, width: InputLayer.width, height: InputLayer.height}).addTo(Canvas); 
    Canvas.fitBounds(bounds); fadeIn(overlay);} 

    //draw single border
function drawSingleBorder(layer, layeridnex ,arrayindex, itemindex) {
    removeBorders();

    // Create a border for the single layer
    const bounds = findBounds(layer);
    const border = L.rectangle(bounds, {
        color: 'transparent',
        weight: 0,
        fillOpacity: 0.1,
        pngData: layer
    }).addTo(Canvas);

    // Add click event to the canvas to handle border highlighting
    Canvas.on('click', function(e) {
        const latLng = e.latlng;
        // Check if the click is within the bounds
        if (latLng.lat >= bounds[0][0] && latLng.lat <= bounds[1][0] &&
            latLng.lng >= bounds[0][1] && latLng.lng <= bounds[1][1]) {
            // Highlight the border
            border.setStyle({
                color: 'rgba(255, 255, 255, 1)',
                weight: 3,
                fillOpacity: 0.2,
                dashArray: '5, 5'
            });
            document.getElementById('area').innerHTML = "Area: " + border.options.pngData.area;
        } else {
            // Reset the border style
            border.setStyle({
                color: 'transparent',
                weight: 0,
                fillOpacity: 0.1
            });
            document.getElementById('area').innerHTML = "";
        }
    });
}