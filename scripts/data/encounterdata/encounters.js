//created on 3-10-25 to store encounter data per area
//by quentin99999
// the data in this table is in parity with /scripts/data/mapdata.js

var fishing = "Fishing 🎣";
var surfing = "Surfing 🌊"
var grass = "Grass 🌱";
var darkgrass = "Dark Grass 🌱🌑";
var ripple = "Ripple 💦";


let OverworldTable = 
[
//aspertia City
[
    {sprite: 1, name: 1, encounterrate: "70%", encountertype: grass, level: "32-40", Season:"All" },
    {sprite: 4, name: 4, encounterrate: "70%", encountertype: darkgrass, level: "32-40", Season:"All" },
    {sprite: 7, name: 7, encounterrate: "70%", encountertype: fishing, level: "32-40", Season:"All" },
    {sprite: 10, name: 10, encounterrate: "70%", encountertype: surfing, level: "32-40", Season:"All" },
    {sprite: 13, name: 13, encounterrate: "70%", encountertype: ripple, level: "32-40", Season:"All" },
    {sprite: 16, name: 16, encounterrate: "70%", encountertype: fishing, level: "32-40", Season:"All" },
    {sprite: 19, name: 19, encounterrate: "70%", encountertype: surfing, level: "32-40", Season:"All" },
    {sprite: 22, name: 22, encounterrate: "70%", encountertype: fishing, level: "32-40", Season:"All" },
    {sprite: 25, name: 25, encounterrate: "70%", encountertype: surfing, level: "32-40", Season:"All" },

],
//floccesy town
[
    {sprite: 1, name: 1, encounterrate: "70%", encountertype: grass, level: "32-40", Season:"All" },
    {sprite: 7, name: 7, encounterrate: "70%", encountertype: fishing, level: "32-40", Season:"All" },
    {sprite: 10, name: 10, encounterrate: "70%", encountertype: surfing, level: "32-40", Season:"All" },
    {sprite: 13, name: 13, encounterrate: "70%", encountertype: ripple, level: "32-40", Season:"All" },
    {sprite: 25, name: 25, encounterrate: "70%", encountertype: surfing, level: "32-40", Season:"All" },
],
//floccy Ranch
[],
//route19
[],
//virbankcomplex (outside) 
[],
//pokestar studios
[],
//virbankcity
[],
// virbank complex (inside)
[],
//route20
[],
//liberty garden
[],
//pledgegrove
[],
//castelia city
[],
//route4
[],
//desertresort
[],
//outsideresort
[],
//joinavenue
[],
//nimbasacity
[],
//route5
[],
//lostlorn forest
[],
//route16
[],
//driftveildrawbridge
[],
//driftveil city
[],
//pokemon world tournement
[],
//mistltron city
[],
//route6
[],
//route7
[],

]

let CaveLayerTable = [
    [],
    [],
    [],
]


export default OverworldTable;