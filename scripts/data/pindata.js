import Icon from './icondata.js';
import Map from './mapdata.js';
// pindata.js Created on 3-3-2025 By quentin99999
// holds mainly holds locational and type data for sorting.
// area is specifically meant to LINK with mapdata.js area id. Useful for per area filtering
// specific filters:
// type: look at item array to find type (gonna get rmemoved)

var Pins = () => { 
  return {
      OverworldLayer: [
        // Aspertia City
      { y: 148, x: 683, 
         area: 0, 
         type: 1,  
         icon: Icon().Pokeballs[0].path, 
         text: Icon().Pokeballs[0].name,
         ENABLED: true, HIDDEN: false},
         
         
         //--Entrances
         { y: 214, x: 255, 
          area: 0, 
          type: 1,  
          icon: Icon().customPins[0].path, 
          text: Icon().customPins[0].name,
          ENABLED: true, HIDDEN: false},
          { y: 214, x: 422, 
            area: 0, 
            type: 1,  
            icon: Icon().customPins[0].path, 
            text: Icon().customPins[0].name,
            ENABLED: true, HIDDEN: false},
            { y: 568, x: 277, 
              area: 0, 
              type: 1,  
              icon: Icon().customPins[0].path, 
              text: Icon().customPins[0].name,
              ENABLED: true, HIDDEN: false},
              { y: 543, x: 439, 
                area: 0, 
                type: 1,  
                icon: Icon().customPins[0].path, 
                text: Icon().customPins[0].name,
                ENABLED: true, HIDDEN: false},
                { y: 786, x: 649, 
                  area: 0, 
                  type: 1,  
                  icon: Icon().customPins[0].path, 
                  text: Icon().customPins[0].name,
                  ENABLED: true, HIDDEN: false},
                  { y: 1026, x: 535, 
                    area: 0, 
                    type: 1,  
                    icon: Icon().customPins[0].path, 
                    text: "To Route 19",
                    ENABLED: true, HIDDEN: false},


         // Route 19
         { y: 1308, x: 1127, 
          area: Map().OverworldLayer[1].area, 
          type: 1,  
          icon: Icon().Pokeballs[0].path, 
          text: Icon().Pokeballs[0].name,
          ENABLED: true, HIDDEN: false},
      ],
      

      CaveLayer: [],


    }};

    export default Pins;

