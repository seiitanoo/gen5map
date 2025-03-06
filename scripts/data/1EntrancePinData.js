//mapdata.js Created on 3-5-2025 By quentin99999
//created to hold the locations and redirs of the entrance pins. 
// TO DO
/// jump = location in array in roomdata.js
import Icon from './icondata.js';
import Map from './mapdata.js';
var EntrancePins = () => { 
    return {
       OverworldLayer: [
        {   y: 214, x: 255, 
            area: Map().OverworldLayer[0].area, 
            type: 1,  
            icon: Icon().customPins[0].path, 
            text: Icon().customPins[0].name,
            ENABLED: true, HIDDEN: false},
            { y: 214, x: 422, 
              area: Map().OverworldLayer[0].area, 
              type: 1,  
              icon: Icon().customPins[0].path, 
              text: Icon().customPins[0].name,
              ENABLED: true, HIDDEN: false},
              //gym
              { y: 568, x: 277, 
                area: Map().OverworldLayer[0].area, 
                type: 1,  
                icon: Icon().customPins[2].path, 
                text: "To Aspertia City Gym",
                ENABLED: true, HIDDEN: false},
                //pkmncenter
                { y: 543, x: 439, 
                  area: Map().OverworldLayer[0].area, 
                  type: 1,  
                  icon: Icon().customPins[1].path, 
                  text: Icon().customPins[1].name,
                  ENABLED: true, HIDDEN: false},
                  { y: 786, x: 649, 
                    area: Map().OverworldLayer[0].area, 
                    type: 1,  
                    icon: Icon().customPins[0].path, 
                    text: Icon().customPins[0].name,
                    ENABLED: true, HIDDEN: false},
                    //routetunnel
                    { y: 1050, x: 535, 
                      area: Map().OverworldLayer[0].area, 
                      type: 1,  
                      icon: Icon().customPins[4].path, 
                      text: "Aspertia City </br>To </br>Route 19",
                      jump: 0,
                      // zoomx, zoomy
                      ENABLED: true, HIDDEN: false},   

       ],
    CaveLayer: [],
    RoomLayer: [
      //aspertia city
// 0: routepipe
      [{ y: 231, x: 85, 
        area: Map().OverworldLayer[0].area, 
        type: 1,  
        icon: Icon().customPins[0].path, 
        text: Icon().customPins[0].name,
        jump: Map().OverworldLayer,
        jumpy: 1111,
        jumpx: 537,
        jumpzoom: 1,
        ENABLED: true, HIDDEN: false},
        { y: 11, x: 81, 
          area: Map().OverworldLayer[0].area, 
          type: 1,  
          icon: Icon().customPins[0].path, 
          text: Icon().customPins[0].name,
          ENABLED: true, HIDDEN: false},]
// 1: pokemongym




    ]
}
}
export default EntrancePins;