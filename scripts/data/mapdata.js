//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Holds the arrays for the seperate layers. Probably gonna have to refactor this to something else, maybe make more specific arrays.
// 

//Array Explanation

//  area is now an id number.
// the width and height are the images resolution data. so use windows for this.
// the path is the relative path
// you can call a specific arrays functions using mapData[yournumber].(type,x,y,width,height,path)
      

// array id: 0
let OverworldLayer = 
[
        // lower left unova
{ area: 0, y: 0,    x: 0,    width: 877,  height: 1115, path: 'maps/lowerleftunova/AspertiaCity.png' },
{ area: 1, y: 1070, x: 1320, width: 600,  height: 997,  path: 'maps/lowerleftunova/FloccesyTown.png' },
{ area: 2, y: 2085, x: 1249, width: 1297, height: 938,  path: 'maps/lowerleftunova/Floccesy Ranch.png' },
{ area: 3, y: 1060, x: 350,  width: 978,  height: 595,  path: 'maps/lowerleftunova/Route19.png' },
{ area: 4, y: 1048, x: 3100, width: 693,  height: 481,  path: 'maps/lowerleftunova/Virbank Complex (Outside).png' },
{ area: 5, y: 2077, x: 2986, width: 1172, height: 940,  path: 'maps/lowerleftunova/Pokestar Studios.png'},
{ area: 6, y: 1440, x: 3090, width: 1319, height: 676,  path: 'maps/lowerleftunova/VirbankCity.png' },
{ area: 7, y: 393,  x: 3097, width: 693,  height: 807,  path: 'maps/lowerleftunova/Virbank Complex (Inside).png' },
{ area: 8, y: 1036, x: 1915, width: 1185, height: 1080, path: 'maps/lowerleftunova/Route20.png' },
{ area: 9, y: -400, x: 1850, width: 785, height: 522, path: 'maps/specialareas/Liberty Garden.png' },
{ area: 10, y: 3035, x: 1419, width: 560, height: 864, path: 'maps/specialareas/Pledge Grove.png' },

        // central unova
{area: 11, y: 1600, x: 5900, width: 3531, height: 2910,path: ' maps/centralunova/Castelia_City_Map_BWFULL.png'},
{area: 12, y: 4500, x: 6687, width: 1185, height: 1869, path: 'maps/centralunova/Route 4FULL.png'},
{area: 13, y: 6232, x: 4938, width: 1683, height: 1221, path: 'maps/centralunova/Desert ResortFULL.png'  },
{area: 14, y: 5931, x: 6291, width: 1000, height:  476, path: 'maps/centralunova/Outside Desert ResortFULL.png'},
{area: 15, y: 6380, x: 7384, width:  325, height:  866, path: 'maps/centralunova/Join AvenueFULL.png'},
{area: 16, y: 7250, x: 6683, width: 2648, height: 1019, path: 'maps/centralunova/Nimbasa CityFULL.png'},
{area: 17, y: 7661, x: 5580, width: 1091, height:  547, path: 'maps/centralunova/Route 5FULL.png' },
{area: 18, y:8233, x: 8171, width: 704, height: 952, path:'maps/centralunova/Lostlorn ForestFULL.png' },
{area: 19, y: 7768, x: 7920, width: 1046, height:  509, path: 'maps/centralunova/Route 16FULL.png' },
{area: 20, y: 7700, x: 2909,  width: 2630, height: 677, path:'maps/centralunova/Driftveil_Drawbridge_BW.png' },
//area 21 other bridge (rightside)

        //upper left unova
{area: 22, y: 7697, x: 1090, width: 1764, height: 925, path: 'maps/upperleftunova/Driftveil CityFULL.png'},
{area: 23, y: 6830, x: 1045, width: 1200, height: 868, path: 'maps/upperleftunova/PWTFULL.png'},
{area: 24, y: 9130, x: -597, width: 1094, height: 1434, path: 'maps/upperleftunova/Misltron cityFULL.png'},
{area: 25, y: 8175, x: -96, width: 1186, height: 1449, path: 'maps/upperleftunova/Route6.png'},
{area: 26, y: 10098, x: -96, width: 1186, height: 1419, path: 'maps/upperleftunova/Route7.png'},
];
    
// array id: 1
let CaveLayer = [];
      
// array id: 2
let RoomLayer =  
[
 
  //2 - 0  Aspertia City
[
    {id: 0, y:0,x: 0, width: 166,  height: 301, path: 'maps/rooms/Aspertia Citiy/Pipe To Route 19.png' },
    {id: 1, y:0, x: 0, width: 250, height: 301,  path: 'maps/rooms/Aspertia Citiy/Poke Center.png' },
    {id: 2, y:0, x: 0, width: 256, height: 493, path: 'maps/rooms/Aspertia Citiy/1st House.png'},
    {id: 3, y:0, x: 0, width: 256, height: 466, path:'maps/rooms/Aspertia Citiy/5th House.png' },
    {id: 4, y:0, x: 0, width: 256, height: 447, path: 'maps/rooms/Aspertia Citiy/Hughs House.png' },
    {id: 5, y:0, x: 0, width: 319, height: 195, path:'maps/rooms/Aspertia Citiy/Moms House.png' },
    {id: 6, y:0, x: 0, width: 426, height: 939, path: 'maps/rooms/Aspertia Citiy/Outside (Gym).png'},
],

    
  
    ];

   
let Map = [OverworldLayer, CaveLayer, RoomLayer];
export default Map;