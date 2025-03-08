// pindata.js Created on 3-3-2025 By quentin99999
// holds mainly holds locational and type data for sorting.
// area is specifically meant to LINK with mapdata.js area id. Useful for per area filtering
// specific filters:
// type: look at item array to find type (gonna get rmemoved)
import Icons from "./icondata.js";
// 0
const OverworldLayer = [
    //aspertia city
    {area: 0, y: 147, x: 684, icon: Icons[0][0].image, text: Icons[0][0].name, HIDDEN: true},
];



// 1
const CaveLayer = [];


// 2
const RoomLayer = 
[

//  Aspertia City
[

]
    
];


const Pins = [OverworldLayer,CaveLayer,RoomLayer];
export default Pins;