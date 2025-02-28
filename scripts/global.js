
//map settings
export var Canvas = L.map('map', {crs: L.CRS.Simple,zoomSnap: .125, minZoom: -4.0, maxZoom: 2.5});

function findBounds(image){
const bounds = [[image.y, image.x], [image.y + image.height, image.x + image.width]];
return bounds;
};


//default
//drawing map function
export default function drawMap(Layer){
    for (const image of Layer) {
      L.imageOverlay(image.path, findBounds(image), {crs: L.CRS.Simple, width:image.width, height:image.height}).addTo(Canvas)};
        
      const allBounds = Layer.map(image => findBounds(image));
        const combinedBounds = allBounds.reduce((acc, curr) => { const [[minY, minX], [maxY, maxX]] = curr;
            return [[Math.min(acc[0][0], minY), Math.min(acc[0][1], minX)], [Math.max(acc[1][0], maxY), Math.max(acc[1][1], maxX)]];}, [[Infinity, Infinity], [-Infinity, -Infinity]]);
        Canvas.fitBounds(combinedBounds);
        
    };

// border function
export function borderLayer(Layer){
    for (const image of Layer) {
        const border = L.rectangle(findBounds(image), { color: 'transparent', weight: 0.0, imageData: image}).addTo(Canvas);
        border.on({
            // on mouse hovering over image
            mouseover: function(e) {
                e.target.setStyle({color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.0});
                document.getElementById('area').innerHTML = "image Name: " + e.target.options.imageData.path;},
           // mouse stops hovering over image
                mouseout: function(e) {
                e.target.setStyle({color: 'transparent',weight: 0, fillOpacity: 0.1});
                document.getElementById('area').innerHTML = "Area Name:";
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