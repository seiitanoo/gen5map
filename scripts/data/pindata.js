// pindata.js Created on 3-3-2025 By quentin99999
// holds mainly holds locational and type data for sorting.
// area is specifically meant to LINK with mapdata.js area id. Useful for per area filtering
// specific filters:
// type: look at item array to find type (gonna get rmemoved)
import Icon from './icondata.js';
import Map from './mapdata.js';

var Pins = () => { 
  return {
      OverworldLayer: [
        // Aspertia City
      { y: 148, x: 683, 
         area: Map().OverworldLayer[0].area, 
         type: 1,  
         icon: Icon().Pokeballs[0].path, 
         text: Icon().Pokeballs[0].name,
         ENABLED: true, HIDDEN: false},
         
         
         //--Entrances
        


         // Route 19
         { y: 1308, x: 1127, 
          area: Map().OverworldLayer[3].area, 
          type: 1,  
          icon: Icon().Pokeballs[0].path, 
          text: Icon().Pokeballs[0].name,
          ENABLED: true, HIDDEN: false},
      ],
      

      CaveLayer: [],

      RoomLayer:[]

    }};

    export default Pins;

