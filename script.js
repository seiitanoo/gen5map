// Leaflet map stuff idk?
var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2.5,
    maxZoom: 2.5
});

// Coordinates and size for map bounds [y-axis x-axis] [height, width], if change y1/x1 must change y2/x2 for positioning.
var bounds1 = [[300, -896], [2276, 624]]; // Bounds for Lower Left Unova
var bounds2 = [[1024, 512], [2048, 1536]]; // Bounds for Castelia City
var bounds3 = [[2050, 500], [3184, 1300]]; // Bounds for Lower Central Unova

// Places the image ontop of the map
L.imageOverlay('tmpimg/LowerLeftUnova.png', bounds1).addTo(map);
L.imageOverlay('tmpimg/CasteliaCity.png', bounds2).addTo(map);
L.imageOverlay('tmpimg/LowerCentralUnova.png', bounds3).addTo(map);

// Gives map view limits to its given bound
map.fitBounds(bounds2);
// Adds a marker on the map when clicked
map.on('click', function(e) {
    L.marker(e.latlng).addTo(map).bindPopup("New Marker");
});