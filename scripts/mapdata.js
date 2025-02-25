//mapdata.js Created on 2-19-2025 By quentin99999
//Explanation: Called to script.js to make the code look much cleaner. Also makes it easy to see
// which part of the code is fucked up lmao.

//Array Explanation

//  the 'area:" shows the topographical location of the image.
// LowerLeftUnova:0, CentralUnova: 1, LowerRightUnova: 2,UpperUnova: 3, PokemonLeague: 4, SpecialLocation: 5 
// the y, and x are the positional data of the image. use debug to help you, its based on the images lower left corner position
// the width and height are the images resolution data. so use windows for this.
// the path is the relative path
// you can call a specific arrays functions using mapData[yournumber].(type,x,y,width,height,path)

const mapData = [
    {area:0, y:0, x:0, width:877, height:1115, path:'maps/lowerleftunova/AspertiaCity.png'},
    {area:0, y:1070, x:1320, width:600, height:997, path:'maps/lowerleftunova/FloccesyTown.png'},
    {area:0, y:1060, x:350, width:978, height:595, path: 'maps/lowerleftunova/Route19.png'},
    {area:0, y:1048, x:3100, width:693, height:481, path:'maps/lowerleftunova/Virbank Complex (Outside).png'},
    {area:0, y:1440, x:3090, width:1319, height:676, path:'maps/lowerleftunova/VirbankCity.png'},
    {area:0, y:393, x:3097, width:693, height:807, path:'maps/lowerleftunova/Virbank Complex (Inside).png '}, 
    {area:0, y:1036, x:1915, width:1185, height:1080, path:'maps/lowerleftunova/Route20.png'}, 
    
    
    
]
export default mapData;


