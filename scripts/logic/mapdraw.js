//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Created to consolodate all the map drawing functions. Mostly everything related to map drawing should be 
// drawn from here- Canvas var needs to be in the same file as all the draw functions. 
import Map from "../data/mapdata.js";
import Pins from "../data/pindata.js";
import Entrance from "../data/entrancedata.js";
import {currentLayer, currentPinLayer, currentEntranceLayer } from "../script.js";
//init leaflet map and settings

export var Canvas = L.map('map', 
    {crs: L.CRS.Simple,zoomSnap: .125,
         minZoom: -5.0, 
         maxZoom: 2.5, 
         maxBoundsViscosity: 1.0,
         zoomAnimation: true,
         zoomAnimationThreshold: 4,
         fadeAnimation: true,
         markerZoomAnimation: true
        });

//drawing map function/ strict datastructure of array [array {data},{data}]] or this function will not work
 function drawMap(InputLayer) {
    if (InputLayer !== undefined){
for (const png of InputLayer) {L.imageOverlay(png.path, findBounds(png), {crs: L.CRS.Simple, width: png.width, height: png.height,}).addTo(Canvas);}
      const combinedBounds = InputLayer.reduce(
        (acc, image) => {
          const [[minY, minX], [maxY, maxX]] = findBounds(image);
          return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)],
                  [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];
              }, [[Infinity, Infinity],[-Infinity, -Infinity],]
 );
       Canvas.fitBounds(combinedBounds);
    }};



// draw border function
function drawBorder(InputLayer) {
    //adding borders of maps to the rectangles array
    const rectangles = InputLayer.map(png => {const border = L.rectangle(findBounds(png), { color: 'transparent', weight: 0.0, pngData: png }).addTo(Canvas); return { border, png };});

    Canvas.on('click', function(e) {
        let clickedRectangle = rectangles.find(({ border, png }) => {
            //check to see if over an item
            const latLng = e.latlng;
            const bounds = findBounds(png); 
            //check to see within bounds box
            return latLng.lat >= bounds[0][0] && latLng.lat <= bounds[1][0] &&
                   latLng.lng >= bounds[0][1] && latLng.lng <= bounds[1][1];
        });
        rectangles.forEach(({ border }) => {border.setStyle({ color: 'transparent', weight: 0, fillOpacity: 0.1 });});
        if (clickedRectangle) {
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
            const iconClass = pin.HIDDEN ? 'grayscale-icon' : '';
            pin.text = pin.HIDDEN ? "Hidden: " + pin.text : pin.text; 
            const marker = L.marker([pin.y, pin.x], {icon: L.icon({iconUrl: pin.icon, iconSize: [38, 38], className: iconClass})}).addTo(Canvas);
            marker.bindTooltip(pin.text);
         }}};


// draw entrance function, a little bit complex function
function drawEntrance(Input_EntranceLayer) {
if (Input_EntranceLayer !== undefined) {
for (const entrance of Input_EntranceLayer) {
const marker = L.marker([entrance.y, entrance.x], {icon: L.icon({iconUrl: entrance.icon, iconSize: [38, 38]})}).addTo(Canvas);
 marker.bindTooltip("To " + entrance.text);
 if (entrance.out === false) { // logic for entering
    marker.on('click', function() { 
    currentLayer == Map[entrance.tolayer]
    const layerID = entrance.tolayer; const pinlayerID = entrance.tolayer; const entrancelayerID = entrance.tolayer; const arrayID = entrance.arrayid; const itemID = entrance.ItemID;
        swapToRoom(Map[layerID][arrayID][itemID], Pins[pinlayerID][arrayID][itemID], Entrance[entrancelayerID][arrayID][itemID]);})
 }
if (entrance.out === true) { // logic for leaving
marker.on('click', function(){
currentLayer == Map[entrance.tolayer]; currentPinLayer == Pins[entrance.tolayer]; currentEntranceLayer == Entrance[entrance.tolayer]; 
swapAll(currentLayer, currentPinLayer, currentEntranceLayer)
Canvas.setView([entrance.zoomy,entrance.zoomx],entrance.zoomlevel);})
}}}};
        

// swap all layers at the same time
export default function swapAll(InputLayer, Input_PinLayer, Input_EntranceLayer){
    removeAllLayers(); 
    if (InputLayer !== undefined){drawMap(InputLayer); drawBorder(InputLayer); drawEntrance(Input_EntranceLayer);}
    if (Input_PinLayer !== undefined){drawPins(Input_PinLayer);}
};

// individual swapfunctions
function swapToRoom (InputLayer, Input_PinLayer, Input_EntranceLayer){removeAllLayers();singleDrawMap(InputLayer); drawPins(Input_PinLayer); drawEntrance(Input_EntranceLayer);}
function swapMap(InputLayer){removeMap(); drawMap (InputLayer);} 
function swapPins(Input_PinLayer){removePins(); drawPins(Input_PinLayer);};
function swapEntrance(Input_EntranceLayer){removePins(); drawEntrance(Input_EntranceLayer);};
//removal functions
function removeAllLayers(){ removeMap(); removePins();}
function removePins(){Canvas.eachLayer(function (InputLayer) {if(InputLayer instanceof L.Marker) {Canvas.removeLayer(InputLayer);}})};
function removeMap(){Canvas.eachLayer(function (InputLayer) {if(InputLayer instanceof L.ImageOverlay || InputLayer instanceof L.Rectangle) {Canvas.removeLayer(InputLayer);}})};
//bounds function
function findBounds(png){ const bounds = [[png.y, png.x], [png.y + png.height, png.x + png.width]]; return bounds;};
//draws a singular map piece strict data of array --> what its looking for a sigular data point. so {data}
function singleDrawMap(InputLayer) {const bounds = findBounds(InputLayer);{L.imageOverlay(InputLayer.path,bounds, {crs: L.CRS.Simple, width: InputLayer.width, height: InputLayer.height}).addTo(Canvas);} Canvas.fitBounds(bounds);};

