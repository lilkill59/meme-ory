const nb_mouvements = document.getElementById("compteur_mouv");
const durée_partie = document.getElementById("chrono");
const commencer = document.getElementById("start");
const arreter = document.getElementById("stop");
const nivstop = document.querySelector(".niveaux_et_stop");
const resultatsfin = document.getElementById("resultats");
const controles = document.querySelector("contolesbox");
let cartes;
let intervalles;
let carte1 = false;
let carte2 = false;

// Cartes 

const memesniv1 = [
    {name:"meme1",image: meme1.png},
    {name:"meme2",image: meme2.png},
    {name:"meme3",image: meme3.png},
    {name:"meme4",image: meme4.png},
    {name:"meme5",image: meme5.png},
    {name:"meme6",image: meme6.png},
    {name:"meme7",image: meme7.png},
    {name:"meme8",image: meme8.png},
]
const memesniv2 = [
    {name:"meme9",image: meme9.png},
    {name:"meme10",image: meme10.png},
    {name:"meme11",image: meme11.png},
    {name:"meme12",image: meme12.png},
    {name:"meme13",image: meme13.png},
    {name:"meme14",image: meme14.png},
    {name:"meme15",image: meme15.png},
    {name:"meme16",image: meme16.png},
    {name:"meme17",image: meme17.png},
    {name:"meme18",image: meme18.png},
    {name:"meme19",image: meme19.png},
    {name:"meme20",image: meme20.png},
    {name:"meme21",image: meme21.png},
    {name:"meme22",image: meme22.png},
    {name:"meme23",image: meme23.png},
    {name:"meme24",image: meme24.png},
    {name:"meme25",image: meme25.png},
    {name:"meme26",image: meme26.png},
]

const memesniv2 = [
    {name:"meme27",image: meme27.png},
    {name:"meme28",image: meme28.png},
    {name:"meme29",image: meme29.png},
    {name:"meme30",image: meme30.png},
    {name:"meme31",image: meme31.png},
    {name:"meme32",image: meme32.png},
    {name:"meme33",image: meme33.png},
    {name:"meme34",image: meme34.png},
    {name:"meme35",image: meme35.png},
    {name:"meme36",image: meme36.png},
    {name:"meme37",image: meme37.png},
    {name:"meme38",image: meme38.png},
    {name:"meme39",image: meme39.png},
    {name:"meme40",image: meme40.png},
    {name:"meme41",image: meme41.png},
    {name:"meme42",image: meme42.png},
    {name:"meme43",image: meme43.png},
    {name:"meme44",image: meme44.png},
    {name:"meme45",image: meme45.png},
    {name:"meme46",image: meme46.png},
    {name:"meme47",image: meme47.png},
    {name:"meme48",image: meme48.png},
    {name:"meme49",image: meme49.png},
    {name:"meme50",image: meme50.png},
    {name:"meme51",image: meme51.png},
    {name:"meme52",image: meme52.png},
    {name:"meme53",image: meme53.png},
    {name:"meme54",image: meme54.png},
    {name:"meme55",image: meme55.png},
    {name:"meme56",image: meme56.png},
    {name:"meme57",image: meme57.png},
    {name:"meme58",image: meme58.png},
]
