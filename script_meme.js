const section = document.querySelector("section");
const coups   = document.querySelector("span");
const chrono  = document.querySelector("p");
const paire   = document.getElementsByClassName("paire");
paire.innerHTML='eeeeee'

let couptotal = 0;
let paireCount = 0;

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
        const back = document.createElement('img');

        card.classList="card"; 
        face.classList="face"; 
        back.classList="back";

        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("retourner");
            card.classList.toggle("flipped");
            verif(e);
        });
    });
};

//verifier les cartes
const verif = (e) => {
    console.log(e);
    const clickedCard = e.target;
    const flippedCards = document.querySelectorAll(".flipped");
    clickedCard.classList.add("flipped");

    if (flippedCards.length == 2) {
        if (flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            paireCount++;
            paire.innerHTML = paireCount;            
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.classList.add("found");
                card.style.pointerEvents = "none";
                });
            
        } else {
            console.log("try again");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("retourner"), 1000);
            });
        }
        couptotal++;
        coups.textContent = couptotal;
        }
    }


const timer = () => {
    let time=10
    const interval = setInterval(() => {
        time--;
        chrono.textContent = time;
        if (time === 0) {
            clearInterval(interval);
            alert("fin du temps impartie !");
            setTimeout(()=> {
                document.querySelectorAll('.card').forEach((card) => {
                    if (!card.classList.contains("flipped")) {
                        if(!card.classList.contains("found")){
                            card.classList.toggle("retourner");
                        }
                    }
                    card.style.pointerEvents = "none";
                });}, 500);
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    actual.addEventListener('click', function() {
        card_gen();
        timer();
        couptotal = 0;
    });
});

card_gen();
timer();