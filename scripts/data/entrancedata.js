const EtrIco = 
[
    {name: "Entrance", image: './pins/special/entrance.png' },
    {name: "Pokemon Center", image: './pins/special/pkmncenter.png'},
    {name: "Gym", image: './pins/special/gym.png'},
    {name: "Cave", image: './pins/special/cave.png'},
    {name: "Route", image: './pins/special/route.png'}
];

    // 0
let OverworldLayer = 
[
    {out: false, tolayer: 2, arrayid: 0, ItemID: 0, y: 1045, x: 533, icon: EtrIco[0].image, text:"Route 19 Pipe"}
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
]

    ]
];


let Entrance = [OverworldLayer, CaveLayer, RoomLayer];
export default Entrance;
