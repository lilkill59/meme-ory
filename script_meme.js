const section = document.querySelector("section");
const coups   = document.querySelector("span");


const image = [
    {imgSrc: "./meme/meme_01.jpg", name: "meme_01"},
    {imgSrc: "./meme/meme_02.jpg", name: "meme_02"},
    {imgSrc: "./meme/meme_03.jpg", name: "meme_03"},
    {imgSrc: "./meme/meme_04.jpg", name: "meme_04"},
    {imgSrc: "./meme/meme_05.jpg", name: "meme_05"},
    {imgSrc: "./meme/meme_06.jpg", name: "meme_06"},
    {imgSrc: "./meme/meme_07.jpg", name: "meme_07"},
    {imgSrc: "./meme/meme_08.jpg", name: "meme_08"},

    {imgSrc: "./meme/meme_01.jpg", name: "meme_01"},
    {imgSrc: "./meme/meme_02.jpg", name: "meme_02"},
    {imgSrc: "./meme/meme_03.jpg", name: "meme_03"},
    {imgSrc: "./meme/meme_04.jpg", name: "meme_04"},
    {imgSrc: "./meme/meme_05.jpg", name: "meme_05"},
    {imgSrc: "./meme/meme_06.jpg", name: "meme_06"},
    {imgSrc: "./meme/meme_07.jpg", name: "meme_07"},
    {imgSrc: "./meme/meme_08.jpg", name: "meme_08"},
]

//change aléatoirement l'ordre des cartes 
function randomize() {
    const cardData = image;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;}

// crée les deux faces de la carte
const card_gen = () => {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img'); 
        const back = document.createElement('div');

        card.classList="card"; 
        face.classList="face"; 
        back.classList="back";

        face.src = item.imgSrc;
        back.src = "./meme/arriere.jpg";

        
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", () => {
            card.classList.toggle("retourner");
            verif(e);
            clickCount++;
            coups.textContent = clickCount; 
        });
    });
};
let clickCount = 0;
card_gen();
//verifier les cartes
const verif = (e)=> {
    const verif = e.target;
    const active = document.querySelectorAll(".retourner");
    const total = image.length/2;}
