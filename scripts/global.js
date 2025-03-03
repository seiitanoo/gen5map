//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Created to consolodate all the map drawing functions. Mostly everything related to map drawing should be 
// drawn from here- Canvas var needs to be in the same file as all the draw functions. 


//map settings
export var Canvas = L.map('map', {crs: L.CRS.Simple,zoomSnap: .125, minZoom: -2.5, maxZoom: 2.5, maxBoundsViscosity: 1.0});

function findBounds(image){
const bounds = [[image.y, image.x], [image.y + image.height, image.x + image.width]];
return bounds;
};

//drawing map function
export default function drawMap(Layer){
   //loop adds images to map layer
    for (const image of Layer) {
      L.imageOverlay(image.path, findBounds(image), {crs: L.CRS.Simple, width:image.width, height:image.height}).addTo(Canvas)};
      // bounds calculation constraining to the smallest and largest values of infinity and -infinity. Oh and its a loop btw.
      const combinedBounds = Layer.reduce((acc, image) => {
        const [[minY, minX], [maxY, maxX]] = findBounds(image);
        return [
            [Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)],
            [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]
        ];
    }, [[Infinity, Infinity], [-Infinity, -Infinity]]);
    // Fit map to combined bounds
    Canvas.fitBounds(combinedBounds);
    // Set maximum bounds to prevent endless scrolling
    Canvas.setMaxBounds(combinedBounds);
}


// border function
export function borderLayer(Layer){
    for (const image of Layer) {
        const border = L.rectangle(findBounds(image), { color: 'transparent', weight: 0.0, imageData: image}).addTo(Canvas);
        border.on({
            mouseover: function(e) {
                e.target.setStyle({color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.0});
                document.getElementById('area').innerHTML = "Area: " + e.target.options.imageData.path;},
                mouseout: function(e) {
                e.target.setStyle({color: 'transparent',weight: 0, fillOpacity: 0.1});
                document.getElementById('area').innerHTML = "";
            }
        });
    };
};

// remove layer function
export function removeLayer(){
    Canvas.eachLayer(function (layer) {
        if(layer instanceof L.ImageOverlay || layer instanceof L.Rectangle) {
            Canvas.removeLayer(layer);
        }
    })};

    