const section = document.querySelector("section");
const coups   = document.querySelector("span");
const chrono  = document.querySelector("p");
const niveau  = document.querySelector("select");

let couptotal = 0;
let time = 0;
let image = [];


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
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
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
    const interval = setInterval(() => {
        if (niveau.value==="facile"){
            let time = 120;
        }
        else if (niveau.value==="moyen"){
            let time = 90;
        }
        else if (niveau.value==="difficile"){
            let time = 60;
        }
        time--;
        chrono.textContent = time;
        if (time === 0) {
            clearInterval(interval);
            alert("fin du temps impartie !");
            setTimeout(()=> {
                document.querySelectorAll('.card').forEach((card) => {
                    if (!card.classList.contains("flipped")) {
                        card.classList.toggle("retourner");
                    }
                    card.style.pointerEvents = "none";
                });}, 500);
        }
    }, 1000);
}

const diff =()=>{
    if (niveau.value === "facile") {
            let couptotal = 0;

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
        } 

        else if (niveau.value === "moyen") {
            let couptotal = 0;

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
        }

        else if (niveau.value === "difficile") {
            let couptotal = 0;

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
        }
        card_gen();
        timer();
}

niveau.addEventListener("change", diff);
