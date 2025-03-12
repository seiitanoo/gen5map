const PokemonS = [
    {dex: 0, name: "Egg"},
    {dex: 1, name: "Bulbasaur", icon:'media/pokemon/icons/shiny/1.png',  Front: 'media/pokemon/frontsprite/shiny/1.gif',Back: 'media/pokemon/backsprite/shiny/1.gif',  HasFemale: false, HasForm: false},
    {dex: 2, name: "Ivysaur", icon:'media/pokemon/icons/shiny/2.png',  Front: 'media/pokemon/frontsprite/shiny/2.gif',Back: 'media/pokemon/backsprite/shiny/2.gif',  HasFemale: false, HasForm: false},
    {dex: 3, name: "Venusaur", icon:'media/pokemon/icons/shiny/3.png',  Front: 'media/pokemon/frontsprite/shiny/3.gif',Back: 'media/pokemon/backsprite/shiny/3.gif',  HasFemale: false, HasForm: false},
    {dex: 4, name: "Charmander", icon:'media/pokemon/icons/shiny/4.png',  Front: 'media/pokemon/frontsprite/shiny/4.gif',Back: 'media/pokemon/backsprite/shiny/4.gif',  HasFemale: false, HasForm: false},
    {dex: 5, name: "Charmeleon", icon:'media/pokemon/icons/shiny/5.png',  Front: 'media/pokemon/frontsprite/shiny/5.gif',Back: 'media/pokemon/backsprite/shiny/5.gif',  HasFemale: false, HasForm: false},
    {dex: 6, name: "Charizard", icon:'media/pokemon/icons/shiny/6.png',  Front: 'media/pokemon/frontsprite/shiny/6.gif',Back: 'media/pokemon/backsprite/shiny/6.gif',  HasFemale: false, HasForm: false},
    {dex: 7, name: "Squirtle", icon:'media/pokemon/icons/shiny/7.png',  Front: 'media/pokemon/frontsprite/shiny/7.gif',Back: 'media/pokemon/backsprite/shiny/7.gif',  HasFemale: false, HasForm: false},
    {dex: 8, name: "Wartortle", icon:'media/pokemon/icons/shiny/8.png',  Front: 'media/pokemon/frontsprite/shiny/8.gif',Back: 'media/pokemon/backsprite/shiny/8.gif',  HasFemale: false, HasForm: false},
    {dex: 9, name: "Blastoise", icon:'media/pokemon/icons/shiny/9.png',  Front: 'media/pokemon/frontsprite/shiny/9.gif',Back: 'media/pokemon/backsprite/shiny/9.gif',  HasFemale: false, HasForm: false},
    {dex: 10, name: "Caterpie", icon:'media/pokemon/icons/shiny/10.png',  Front: 'media/pokemon/frontsprite/shiny/10.gif',Back: 'media/pokemon/backsprite/shiny/10.gif',  HasFemale: false, HasForm: false},
    {dex: 11, name: "Metapod", icon:'media/pokemon/icons/shiny/11.png',  Front: 'media/pokemon/frontsprite/shiny/11.gif',Back: 'media/pokemon/backsprite/shiny/11.gif',  HasFemale: false, HasForm: false},
    {dex: 12, name: "Butterfree", icon:'media/pokemon/icons/shiny/12.png',  Front: 'media/pokemon/frontsprite/shiny/12.gif',Back: 'media/pokemon/backsprite/shiny/12.gif',  HasFemale: false, HasForm: false},
    {dex: 13, name: "Weedle", icon:'media/pokemon/icons/shiny/13.png',  Front: 'media/pokemon/frontsprite/shiny/13.gif',Back: 'media/pokemon/backsprite/shiny/13.gif',  HasFemale: false, HasForm: false},
    {dex: 14, name: "Kakuna", icon:'media/pokemon/icons/shiny/14.png',  Front: 'media/pokemon/frontsprite/shiny/14.gif',Back: 'media/pokemon/backsprite/shiny/14.gif',  HasFemale: false, HasForm: false},
    {dex: 15, name: "Beedrill", icon:'media/pokemon/icons/shiny/15.png',  Front: 'media/pokemon/frontsprite/shiny/15.gif',Back: 'media/pokemon/backsprite/shiny/15.gif',  HasFemale: false, HasForm: false},
    {dex: 16, name: "Pidgey", icon:'media/pokemon/icons/shiny/16.png',  Front: 'media/pokemon/frontsprite/shiny/16.gif',Back: 'media/pokemon/backsprite/shiny/16.gif',  HasFemale: false, HasForm: false},
    {dex: 17, name: "Pidgeotto", icon:'media/pokemon/icons/shiny/17.png',  Front: 'media/pokemon/frontsprite/shiny/17.gif',Back: 'media/pokemon/backsprite/shiny/17.gif',  HasFemale: false, HasForm: false},
    {dex: 18, name: "Pidgeot", icon:'media/pokemon/icons/shiny/18.png',  Front: 'media/pokemon/frontsprite/shiny/18.gif',Back: 'media/pokemon/backsprite/shiny/18.gif',  HasFemale: false, HasForm: false},
    {dex: 19, name: "Rattata", icon:'media/pokemon/icons/shiny/19.png',  Front: 'media/pokemon/frontsprite/shiny/19.gif',Back: 'media/pokemon/backsprite/shiny/19.gif',  HasFemale: false, HasForm: false},
    {dex: 20, name: "Raticate", icon:'media/pokemon/icons/shiny/20.png',  Front: 'media/pokemon/frontsprite/shiny/20.gif',Back: 'media/pokemon/backsprite/shiny/20.gif',  HasFemale: false, HasForm: false},
    {dex: 21, name: "Spearow", icon:'media/pokemon/icons/shiny/21.png',  Front: 'media/pokemon/frontsprite/shiny/21.gif',Back: 'media/pokemon/backsprite/shiny/21.gif',  HasFemale: false, HasForm: false},
    {dex: 22, name: "Fearow", icon:'media/pokemon/icons/shiny/22.png',  Front: 'media/pokemon/frontsprite/shiny/22.gif',Back: 'media/pokemon/backsprite/shiny/22.gif',  HasFemale: false, HasForm: false},
    {dex: 23, name: "Ekans", icon:'media/pokemon/icons/shiny/23.png',  Front: 'media/pokemon/frontsprite/shiny/23.gif',Back: 'media/pokemon/backsprite/shiny/23.gif',  HasFemale: false, HasForm: false},
    {dex: 24, name: "Arbok", icon:'media/pokemon/icons/shiny/24.png',  Front: 'media/pokemon/frontsprite/shiny/24.gif',Back: 'media/pokemon/backsprite/shiny/24.gif',  HasFemale: false, HasForm: false},
    {dex: 25, name: "Pikachu", icon:'media/pokemon/icons/shiny/25.png',  Front: 'media/pokemon/frontsprite/shiny/25.gif',Back: 'media/pokemon/backsprite/shiny/25.gif',  HasFemale: false, HasForm: false},
    {dex: 26, name: "Raichu", icon:'media/pokemon/icons/shiny/26.png',  Front: 'media/pokemon/frontsprite/shiny/26.gif',Back: 'media/pokemon/backsprite/shiny/26.gif',  HasFemale: false, HasForm: false},
    {dex: 27, name: "Sandshrew", icon:'media/pokemon/icons/shiny/27.png',  Front: 'media/pokemon/frontsprite/shiny/27.gif',Back: 'media/pokemon/backsprite/shiny/27.gif',  HasFemale: false, HasForm: false},
    {dex: 28, name: "Sandslash", icon:'media/pokemon/icons/shiny/28.png',  Front: 'media/pokemon/frontsprite/shiny/28.gif',Back: 'media/pokemon/backsprite/shiny/28.gif',  HasFemale: false, HasForm: false},
    {dex: 29, name: "Nidoran♀", icon:'media/pokemon/icons/shiny/29.png',  Front: 'media/pokemon/frontsprite/shiny/29.gif',Back: 'media/pokemon/backsprite/shiny/29.gif',  HasFemale: true, HasForm: false},
    {dex: 30, name: "Nidorina", icon:'media/pokemon/icons/shiny/30.png',  Front: 'media/pokemon/frontsprite/shiny/30.gif',Back: 'media/pokemon/backsprite/shiny/30.gif',  HasFemale: true, HasForm: false},
    
];
export default PokemonS;
/*
icon_S:'media/pokemon/icons/shiny/1.png'
Front_S: 'media/pokemon/frontsprite/shiny/1.gif'
Back_S: 'media/pokemon/backsprite/1.gif'
Female_icon: null
Female_Front_S: null
Female_Back_S: null,
Form_icon_S: null,
Form_Front_S: null,
Form_Back_S: null
*/