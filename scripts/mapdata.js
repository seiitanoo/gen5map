//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Called to script.js to make the code look much cleaner. Also makes it easy to see
// which part of the code is fucked up lmao.

//Array Explanation

//  the 'area:" shows the topographical location of the image.
//  LowerLeftUnova:0, CentralUnova: 1, LowerRightUnova: 2
//  UpperUnova: 4, PokemonLeague: 5, SpecialLocation: 6 
// the y, and x are the positional data of the image. use debug to help you, its based on the images lower left corner position
// the width and height are the images resolution data. so use windows for this.
// the path is the relative path, so don't use c:\user\yourusername\folder\genmapiamges\image.png,
// use genmapimages/image.png.
// you can call a specific arrays functions using mapData[yournumber].(type,x,y,width,height,path)

const mapData = [
    {
        area: 0,
        //position
        y: 0,
        x: 0,
        //image size
        width: 877,
        height:1115,
        path: 'lowerleftunova/AspertiaCity.png'
    },
    {
        area: 0,
        //position
        y: 1070,
        x: 1320,
        //image size
        width: 600,
        height:997,
        path: 'lowerleftunova/FloccesyTown.png'
    },
    {
        area: 0,
        //position
        y: 1060,
        x: 350,
        //image size
        width: 978,
        height:595,
        path: 'lowerleftunova/Route19.png'
    },
    {
        area: 0,
        //position
        y: 1440,
        x: 3090,
        //image size
        width: 1319,
        height:676,
        path: 'lowerleftunova/VirbankCity.png'
    },
    {
        area: 0,
        //position
        y: 1036,
        x: 1915,
        //image size
        width: 1185,
        height:1080,
        path: 'lowerleftunova/Route20.png'
    },
    {
        area: 0,
        //position
        y: 1050,
        x: 3100,
        //image size
        width: 693,
        height: 481,
        path: 'lowerleftunova/Virbank Complex (Outside.png'
    }
  
]
export default mapData;