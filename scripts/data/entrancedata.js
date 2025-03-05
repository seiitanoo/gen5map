//mapdata.js Created on 3-5-2025 By quentin99999
//created to hold the locations and redirs of the entrance pins. 
// TO DO
import Icon from './icondata.js';
import Map from './mapdata.js';

var EntrancePins = () => { 
    return {
       OverworldLayer: [
        { y: 214, x: 255, 
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
                      text: "To Route 19",
                      ENABLED: true, HIDDEN: false},   

       ],
    CaveLayer: [],
    RoomLayer: [],
}
}
export default EntrancePins;