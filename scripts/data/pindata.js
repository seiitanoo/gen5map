// pindata.js Created on 3-3-2025 By quentin99999
// holds mainly holds locational and type data for sorting.
// area is specifically meant to LINK with mapdata.js area id. Useful for per area filtering
// specific filters:
// type: look at item array to find type (gonna get rmemoved)
import Icons from "./icondata.js";
import Pokemon from "./encounterdata/pokemon.js";
// 0
const OverworldLayer = [
    //aspertia city
    {area: 0, y: 147, x: 684, icon: Icons[5][0].image, text: "TM53 (Energy Ball)", HIDDEN: false},

];



// 1
const CaveLayer = [];


// 2
const RoomLayer = 
[

//  Aspertia City
[
// 2 - 0 - 0 inside route19 tube
[],
// 2 - 0 - 1 Poke Center
[],
// 2 - 0 - 2 1st House
[],
// 2 - 0 - 3 5th House
[],
// 2 - 0 - 4 Hugh's House
[],
// 2 - 0 - 5 Mom's House
[],
// 2 - 0 - 6 Trainer School
[
// trainer boy
{area: 0, y: 385, x: 326, icon: Icons[4][0].image, text: "Gives: <br> " + '<img src="' + Icons[1][1].image + '" alt="Icon" /> X-Defend', HIDDEN: false},
// guy that gives you water
 {area: 0, y: 580, x: 159, icon: Icons[4][0].image, text: "Gives: <br> " + '<img src="' + Icons[3][5].image + '" alt="Icon" /> Fresh Water', HIDDEN: false},
 //cheren
 {area: 0, y: 885, x: 214, icon: Icons[4][1].image, text: '<img src="' + Pokemon[504].Front + '" alt="Icon" /> Patrat: Level: 11, Ability: Keen Eye <br> <img src="' + Pokemon[506].Front + '" alt="Icon" /> Lillipup: Level 13, Ability: Vital Spirit'  , HIDDEN: false},
],
]
    
];


const Pins = [OverworldLayer,CaveLayer,RoomLayer];
export default Pins;