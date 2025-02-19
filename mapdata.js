//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Called to script.js to make the code look much cleaner. Also makes it easy to see
// which part of the code is fucked up lmao.

//Array Explanation

//  the 'type:" shows the topographical location of the image.
//  LowerLeftUnova:0, CentralUnova: 1, LowerRightUnova: 2
//  UpperUnova: 4, PokemonLeague: 5, SpecialLocation: 6 
// the y, and x are the positional data of the image. use debug to help you, its based on the images lower left corner position
// the width and height are the images resolution data. so use windows for this.
// the path is the relative path, so don't use c:\user\yourusername\folder\genmapiamges\image.png,
// use genmapimages/image.png.
// you can call a specific arrays functions using mapData[yournumber].(type,x,y,width,height,path)

const mapData = [
    {
        type: "city",
        //position
        y: 0,
        x: 0,
        //image size
        width: 877,
        height:1115,
        path: 'lowerleftunova/Aspertia City.png'
    }
]
export default mapData;