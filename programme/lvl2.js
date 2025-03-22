const section = document.querySelector("section");
const coups   = document.querySelector(".coups");
const chrono  = document.querySelector("p");
const paire   = document.querySelector(".paire");

let couptotal = 0;
let paireCount = 0;


const image = [
    {imgSrc: "./meme/meme_09.jpg", name: "meme_09"},
    {imgSrc: "./meme/meme_10.jpg", name: "meme_10"},
    {imgSrc: "./meme/meme_11.jpg", name: "meme_11"},
    {imgSrc: "./meme/meme_12.jpg", name: "meme_12"},
    {imgSrc: "./meme/meme_13.jpg", name: "meme_13"},
    {imgSrc: "./meme/meme_14.jpg", name: "meme_14"},
    {imgSrc: "./meme/meme_15.jpg", name: "meme_15"},
    {imgSrc: "./meme/meme_16.jpg", name: "meme_16"},
    {imgSrc: "./meme/meme_17.jpg", name: "meme_17"},
    {imgSrc: "./meme/meme_18.jpg", name: "meme_18"},
    {imgSrc: "./meme/meme_19.jpg", name: "meme_19"},
    {imgSrc: "./meme/meme_20.jpg", name: "meme_20"},
    {imgSrc: "./meme/meme_21.jpg", name: "meme_21"},
    {imgSrc: "./meme/meme_22.jpg", name: "meme_22"},
    {imgSrc: "./meme/meme_23.jpg", name: "meme_23"},
    {imgSrc: "./meme/meme_24.jpg", name: "meme_24"},

    {imgSrc: "./meme/meme_09.jpg", name: "meme_09"},
    {imgSrc: "./meme/meme_10.jpg", name: "meme_10"},
    {imgSrc: "./meme/meme_11.jpg", name: "meme_11"},
    {imgSrc: "./meme/meme_12.jpg", name: "meme_12"},
    {imgSrc: "./meme/meme_13.jpg", name: "meme_13"},
    {imgSrc: "./meme/meme_14.jpg", name: "meme_14"},
    {imgSrc: "./meme/meme_15.jpg", name: "meme_15"},
    {imgSrc: "./meme/meme_16.jpg", name: "meme_16"},
    {imgSrc: "./meme/meme_17.jpg", name: "meme_17"},
    {imgSrc: "./meme/meme_18.jpg", name: "meme_18"},
    {imgSrc: "./meme/meme_19.jpg", name: "meme_19"},
    {imgSrc: "./meme/meme_20.jpg", name: "meme_20"},
    {imgSrc: "./meme/meme_21.jpg", name: "meme_21"},
    {imgSrc: "./meme/meme_22.jpg", name: "meme_22"},
    {imgSrc: "./meme/meme_23.jpg", name: "meme_23"},
    {imgSrc: "./meme/meme_24.jpg", name: "meme_24"},
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
        document.querySelectorAll('.card').forEach((card) => {
            card.style.pointerEvents = "none";
        })
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
        setTimeout(() => {
            document.querySelectorAll('.card').forEach((card) => {
                if (!card.classList.contains("found")) {
                    card.style.pointerEvents = "auto";
                }
            });
        }, 1000);

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

card_gen();
timer();