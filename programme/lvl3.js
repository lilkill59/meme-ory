const section = document.querySelector("section");
const coups   = document.querySelector(".coups");
const chrono  = document.querySelector("p");
const paire   = document.querySelector(".paire");

let couptotal = 0;
let paireCount = 0;


const image = [
    {imgSrc: "./meme/meme_25.jpg", name: "meme_25"},
    {imgSrc: "./meme/meme_26.jpg", name: "meme_26"},
    {imgSrc: "./meme/meme_27.jpg", name: "meme_27"},
    {imgSrc: "./meme/meme_28.jpg", name: "meme_28"},
    {imgSrc: "./meme/meme_29.jpg", name: "meme_29"},
    {imgSrc: "./meme/meme_30.jpg", name: "meme_30"},
    {imgSrc: "./meme/meme_31.jpg", name: "meme_31"},
    {imgSrc: "./meme/meme_32.jpg", name: "meme_32"},
    {imgSrc: "./meme/meme_33.jpg", name: "meme_33"},
    {imgSrc: "./meme/meme_34.jpg", name: "meme_34"},
    {imgSrc: "./meme/meme_35.jpg", name: "meme_35"},
    {imgSrc: "./meme/meme_36.jpg", name: "meme_36"},
    {imgSrc: "./meme/meme_37.jpg", name: "meme_37"},
    {imgSrc: "./meme/meme_38.jpg", name: "meme_38"},
    {imgSrc: "./meme/meme_39.jpg", name: "meme_39"},
    {imgSrc: "./meme/meme_40.jpg", name: "meme_40"},
    {imgSrc: "./meme/meme_41.jpg", name: "meme_41"},
    {imgSrc: "./meme/meme_42.jpg", name: "meme_42"},
    {imgSrc: "./meme/meme_43.jpg", name: "meme_43"},
    {imgSrc: "./meme/meme_44.jpg", name: "meme_44"},
    {imgSrc: "./meme/meme_45.jpg", name: "meme_45"},
    {imgSrc: "./meme/meme_46.jpg", name: "meme_46"},
    {imgSrc: "./meme/meme_47.jpg", name: "meme_47"},
    {imgSrc: "./meme/meme_48.jpg", name: "meme_48"},

    {imgSrc: "./meme/meme_25.jpg", name: "meme_25"},
    {imgSrc: "./meme/meme_26.jpg", name: "meme_26"},
    {imgSrc: "./meme/meme_27.jpg", name: "meme_27"},
    {imgSrc: "./meme/meme_28.jpg", name: "meme_28"},
    {imgSrc: "./meme/meme_29.jpg", name: "meme_29"},
    {imgSrc: "./meme/meme_30.jpg", name: "meme_30"},
    {imgSrc: "./meme/meme_31.jpg", name: "meme_31"},
    {imgSrc: "./meme/meme_32.jpg", name: "meme_32"},
    {imgSrc: "./meme/meme_33.jpg", name: "meme_33"},
    {imgSrc: "./meme/meme_34.jpg", name: "meme_34"},
    {imgSrc: "./meme/meme_35.jpg", name: "meme_35"},
    {imgSrc: "./meme/meme_36.jpg", name: "meme_36"},
    {imgSrc: "./meme/meme_37.jpg", name: "meme_37"},
    {imgSrc: "./meme/meme_38.jpg", name: "meme_38"},
    {imgSrc: "./meme/meme_39.jpg", name: "meme_39"},
    {imgSrc: "./meme/meme_40.jpg", name: "meme_40"},
    {imgSrc: "./meme/meme_41.jpg", name: "meme_41"},
    {imgSrc: "./meme/meme_42.jpg", name: "meme_42"},
    {imgSrc: "./meme/meme_43.jpg", name: "meme_43"},
    {imgSrc: "./meme/meme_44.jpg", name: "meme_44"},
    {imgSrc: "./meme/meme_45.jpg", name: "meme_45"},
    {imgSrc: "./meme/meme_46.jpg", name: "meme_46"},
    {imgSrc: "./meme/meme_47.jpg", name: "meme_47"},
    {imgSrc: "./meme/meme_48.jpg", name: "meme_48"},
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