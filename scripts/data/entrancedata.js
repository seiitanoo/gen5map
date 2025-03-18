const EtrIco = 
[
    {name: "Entrance", image: './pins/special/entrance.png' },
    {name: "Pokemon Center", image: './pins/special/pkmncenter.png'},
    {name: "Gym", image: './pins/special/gym.png'},
    {name: "Cave", image: './pins/special/cave.png'},
    {name: "Route", image: './pins/special/route.png'}
];

const defaultE = EtrIco[0].image;
const Pcenter = EtrIco[1].image;
const Gym = EtrIco[2].image;
const Cave = EtrIco[3].image;
const Route = EtrIco[4].image;

    // 0
let OverworldLayer = 
[
    // aspertia city
    {out: false, tolayer: 2, arrayid: 0, ItemID: 0, y: 1045, x: 533, icon: Route, text:"Route 19 Pipe"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 1, y:550, x:437, icon: Pcenter, text:"Poke Center"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 2, y:220, x:248, icon: defaultE, text:"1st House"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 3, y:782, x:642, icon: defaultE, text:"5th House"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 4, y:382, x:353, icon: defaultE, text:"Hugh's House"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 5, y:216, x:423, icon: defaultE, text:"Mom's House"},
    {out: false,tolayer: 2, arrayid: 0, ItemID: 6, y:572, x:272, icon: Gym, text:"Inside Trainer School (Gym)"},
    //floccey town

];

    //1
let CaveLayer = [];


//2
let RoomLayer = [

//2 - 0 aspertia City
[
// 2 - 0 - 0 inside route19 tube
[
{out: true, tolayer: 0, y: 222, x: 87,zoomy:1095,zoomx: 534,zoomlevel: 1, icon: EtrIco[0].image, text: "Route 19"},
{out: true, tolayer: 0, y: 0, x: 87, zoomy:857,zoomx: 529,zoomlevel: 1, icon: EtrIco[0].image, text:"Aspertia City"}
],
// 2 - 0 - 1 Poke Center
[{out: true, tolayer: 0, y: 9, x: 124, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],
// 2 - 0 - 2 1st House
[{out: true, tolayer: 0, y: 15, x: 128, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],
// 2 - 0 - 3 5th House
[{out: true, tolayer: 0, y: 17, x: 136, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],
// 2 - 0 - 4 Hugh's House
[{out: true, tolayer: 0, y: 14, x: 133, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],
// 2 - 0 - 5 Mom's House
[{out: true, tolayer: 0, y: 21, x: 105, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],
// 2 - 0 - 6 Trainer School 
[{out: true, tolayer: 0, y: 23, x: 214, zoomy:0,zoomx: 0,zoomlevel: 0, icon: defaultE, text:"Aspertia City"}],

    ]
];


let Entrance = [OverworldLayer, CaveLayer, RoomLayer];
export default Entrance;
