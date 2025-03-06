//mapdata.js Created on 3-5-2025 By quentin99999
// holds all the rooms in the game. this includes gyms, pokecenters. The format for this data is
// subject to change. 
//TODO
// IMPORTANT. ARRAY NUMBER = IS WHOLY CONNECTED TO 
// ENTRANCEDATA.JS (entrances().RoomLayer[]) 
// PINDATA.JS (Pins().RoomLayer[])

var Rooms = [
        // aspertia city
        // route pipe
    {area: 0, y:0,x: 0, width: 166,  height: 301, path: 'maps/rooms/Aspertia Citiy/Pipe To Route 19.png' },
    //pokemoncenter
    {area: 0, y:0, x: 0, width: 600,  height: 997,  path: 'maps/lowerleftunova/Poke Center.png' },
    //gym

    ]

;

export default Rooms;