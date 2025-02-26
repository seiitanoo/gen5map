import activeMap from './script.js';

export default function hoverfunc(map){
    activeMap.forEach(area => {
        const bounds = [[area.y, area.x], [area.y + area.height, area.x + area.width]];
        const border = L.rectangle(bounds, { color: 'transparent', weight: 0.0, areaData: area}).addTo(map);
// condition
        border.on({
            // on mouse hovering over bounds
            mouseover: function(e) {
                e.target.setStyle({color: 'rgba(255, 255, 255, 1)', weight: 3, fillOpacity: 0.0});
                document.getElementById('area').innerHTML = "Area Name: " + e.target.options.areaData.path;},
           // mouse stops hovering over bounds
                mouseout: function(e) {
                e.target.setStyle({
                    color: 'transparent', // Remove border on mouseout
                    weight: 0, // Remove border on mouseout
                    fillOpacity: 0.1 // Revert to original fill opacity
                });
                // edit active name on html
                document.getElementById('area').innerHTML = "Area Name: ";
            }
        });

    });

};