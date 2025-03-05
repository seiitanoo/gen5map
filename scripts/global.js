//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Created to consolodate all the map drawing functions. Mostly everything related to map drawing should be 
// drawn from here- Canvas var needs to be in the same file as all the draw functions. 

import { maps } from "./script.js";
//leaflet map and settings
export var Canvas = L.map('map', 
    {crs: L.CRS.Simple,zoomSnap: .125,
         minZoom: -5.0, 
         maxZoom: 2.5, 
         maxBoundsViscosity: 1.0,
         zoomAnimation: false,
         zoomAnimationThreshold: 4,
         fadeAnimation: true,
         markerZoomAnimation: true
        });

//bounds function
function findBounds(png){
const bounds = [[png.y, png.x], [png.y + png.height, png.x + png.width]];
return bounds;
};

//drawing map function
export default function drawMap(InputLayer){
   //loop adds images to map layer
    for (const png of InputLayer) {
      L.imageOverlay(png.path, findBounds(png), {crs: L.CRS.Simple, width: png.width, height: png.height}).addTo(Canvas)};
      // bounds calculation constraining to the smallest and largest values of infinity and -infinity. Oh and its a loop btw.
      const combinedBounds = InputLayer.reduce((acc, image) => {
        const [[minY, minX], [maxY, maxX]] = findBounds(image);
        return [
            [Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)],
            [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]
        ];
    }, [[Infinity, Infinity], [-Infinity, -Infinity]]);
    // Fit map to combined bounds
    Canvas.fitBounds(combinedBounds);
    // Set maximum bounds to prevent endless scrolling

}

// draw border function
export function drawBorder(InputLayer) {
    const rectangles = [];

    for (const png of InputLayer) {
        const bounds = findBounds(png);
        const border = L.rectangle(bounds, { color: 'transparent', weight: 0.0, pngData: png }).addTo(Canvas);
        rectangles.push({ border, bounds });
    }
    Canvas.on('click', function(e) {
        let found = false;
        for (const { border, bounds } of rectangles) {
            const latLng = e.latlng;
            if (latLng.lat >= bounds[0][0] && latLng.lat <= bounds[1][0] &&
                latLng.lng >= bounds[0][1] && latLng.lng <= bounds[1][1]) {
                border.setStyle({ color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.2, dashArray: '5, 5'});
                document.getElementById('area').innerHTML = "Area: " + border.options.pngData.area;
                found = true;
            } else {
                border.setStyle({ color: 'transparent', weight: 0, fillOpacity: 0.1 });
            }
        }
        if (!found) {
            document.getElementById('area').innerHTML = "";
        }
    });
}

// draw pins function
export function drawPins(InputLayer, itemFilter, areaFilter) {
    //rudimentary pin filtering. Probably will change
var pin = InputLayer;
    if (areaFilter !== null) {
        for (pin of InputLayer) {
            if (pin.type === areaFilter) {
                pin.ENABLED = false;
            }
        }
    }
        if (itemFilter !== null) {
            for (pin of InputLayer) {
                if (pin.type === itemFilter) {
                    pin.ENABLED = false;
                }
            }
        }
        //draw pins
for (pin of InputLayer){
    if (pin.ENABLED){
        const iconClass = pin.HIDDEN ? 'grayscale-icon' : '';
        const marker = L.marker([pin.y, pin.x], {icon: L.icon({iconUrl: pin.icon, iconSize: [32, 32], className: iconClass})}).addTo(Canvas);
        marker.bindTooltip(pin.text);
    }
}};

// remove layer function
export function removeLayer(){
    Canvas.eachLayer(function (layer) {
        if(layer instanceof L.ImageOverlay || layer instanceof L.Rectangle || layer instanceof L.Marker) {
            Canvas.removeLayer(layer);
        }
    })};

