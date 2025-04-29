const section = document.querySelector(".espjeu");
const coups   = document.querySelector("span");
const chrono = document.querySelector(".chrono");  // Corriger le sélecteur
const paire = document.getElementById("paire");  // Corriger l'ID
const boutonReset = document.querySelector(".reset");  // Corriger le sélecteur

// Récupérer pseudo depuis l'URL et le stocker
const params = new URLSearchParams(window.location.search);
const pseudo = params.get("pseudo");
if (pseudo) {
    sessionStorage.setItem("pseudo", pseudo);
}

let compteurCoups = 0;
let compteurPaires = 0;
let premiereCarte = null;
let deuxiemeCarte = null;
let verrouillerPlateau = false; // Empêche de cliquer pendant l'animation

const images = [
    { imgSrc: "meme_09.jpg", nom: "meme_09" },
    { imgSrc: "meme_10.jpg", nom: "meme_10" },
    { imgSrc: "meme_11.jpg", nom: "meme_11" },
    { imgSrc: "meme_12.jpg", nom: "meme_12" },
    { imgSrc: "meme_13.jpg", nom: "meme_13" },
    { imgSrc: "meme_14.jpg", nom: "meme_14" },
    { imgSrc: "meme_15.jpg", nom: "meme_15" },
    { imgSrc: "meme_16.jpg", nom: "meme_16" },
    { imgSrc: "meme_17.jpg", nom: "meme_17" },
    { imgSrc: "meme_18.jpg", nom: "meme_18" },
    { imgSrc: "meme_19.jpg", nom: "meme_19" },
    { imgSrc: "meme_20.jpg", nom: "meme_20" },
    { imgSrc: "meme_21.jpg", nom: "meme_21" },
    { imgSrc: "meme_22.jpg", nom: "meme_22" },
    { imgSrc: "meme_23.jpg", nom: "meme_23" },
    { imgSrc: "meme_24.jpg", nom: "meme_24" },
    { imgSrc: "meme_25.jpg", nom: "meme_25" },
    { imgSrc: "meme_26.jpg", nom: "meme_26" },
    { imgSrc: "meme_09.jpg", nom: "meme_09" },
    { imgSrc: "meme_10.jpg", nom: "meme_10" },
    { imgSrc: "meme_11.jpg", nom: "meme_11" },
    { imgSrc: "meme_12.jpg", nom: "meme_12" },
    { imgSrc: "meme_13.jpg", nom: "meme_13" },
    { imgSrc: "meme_14.jpg", nom: "meme_14" },
    { imgSrc: "meme_15.jpg", nom: "meme_15" },
    { imgSrc: "meme_16.jpg", nom: "meme_16" },
    { imgSrc: "meme_17.jpg", nom: "meme_17" },
    { imgSrc: "meme_18.jpg", nom: "meme_18" },
    { imgSrc: "meme_19.jpg", nom: "meme_19" },
    { imgSrc: "meme_20.jpg", nom: "meme_20" },
    { imgSrc: "meme_21.jpg", nom: "meme_21" },
    { imgSrc: "meme_22.jpg", nom: "meme_22" },
    { imgSrc: "meme_23.jpg", nom: "meme_23" },
    { imgSrc: "meme_24.jpg", nom: "meme_24" },
    { imgSrc: "meme_25.jpg", nom: "meme_25" },
    { imgSrc: "meme_26.jpg", nom: "meme_26" }
];

// Mélanger les cartes
function melanger() {
    return images.sort(() => Math.random() - 0.5);
}

// Générer les cartes
function genererCartes() {
    section.innerHTML = "";  // Effacer avant de générer (utile pour reset)
    const donneesCartes = melanger();
    
    donneesCartes.forEach((element) => {
        const carte = document.createElement('div');
        const face = document.createElement('img');
        const dos = document.createElement('div');  // Changement ici

        carte.classList.add("carte");
        face.classList.add("face");
        dos.classList.add("dos");

        face.src = element.imgSrc;
        carte.setAttribute("nom", element.nom);

        carte.appendChild(face);
        carte.appendChild(dos);
        section.appendChild(carte);

        carte.addEventListener("click", gererClicCarte);
    });

    console.log("Cartes générées !");  // Débogage
}
console.log(document.querySelectorAll(".carte"));

// Gérer le clic sur une carte
function gererClicCarte(e) {
    if (verrouillerPlateau) return; // Empêche de cliquer pendant l'animation
    const carteCliquee = e.currentTarget;

    if (carteCliquee === premiereCarte) return; // Empêche de cliquer deux fois sur la même carte

    carteCliquee.classList.add("retourner");

    if (!premiereCarte) {
        premiereCarte = carteCliquee;
    } else {
        deuxiemeCarte = carteCliquee;
        verrouillerPlateau = true; // Bloquer les clics supplémentaires
        verifierPaire();
    }
}

// Vérifier si les cartes correspondent
function verifierPaire() {
    if (!premiereCarte || !deuxiemeCarte) return;  // Vérifier que les cartes existent

    let estPaire = premiereCarte.getAttribute("nom") === deuxiemeCarte.getAttribute("nom");

    if (estPaire) {
        desactiverCartes();
    } else {
        retournerCartes();
    }
    compteurCoups++;
    coups.textContent = compteurCoups;
}

// Désactiver les cartes trouvées
function desactiverCartes() {
    premiereCarte.removeEventListener("click", gererClicCarte);
    deuxiemeCarte.removeEventListener("click", gererClicCarte);
    premiereCarte.classList.add("trouvee");
    deuxiemeCarte.classList.add("trouvee");

    compteurPaires++;
    paire.textContent = compteurPaires;

    reinitialiserPlateau();

    // Vérifier si toutes les paires ont été trouvées
    if (compteurPaires === images.length / 2) {
        clearInterval(intervalleTimer); // Stoppe le chrono
        let tempsRestant = parseInt(chrono.textContent, 10); // 🔢 Récupérer le temps restant
        let score = Math.max(0, (tempsRestant * 10) + (compteurPaires * 50) - (compteurCoups * 5));

        enregistrerScore(tempsRestant, compteurCoups, score);

        setTimeout(() => {
            alert(`🎉 Bravo ! Vous avez gagné ! 🎉\nCoups joués : ${compteurCoups}\nTemps restant : ${tempsRestant} secondes\nScore final : ${score}`);
        }, 500);
    }
}


// Retourner les cartes après un délai
function retournerCartes() {
    setTimeout(() => {
        premiereCarte.classList.remove("retourner");
        deuxiemeCarte.classList.remove("retourner");
        reinitialiserPlateau();
    }, 1000);
}

// Réinitialiser les variables pour le prochain tour
function reinitialiserPlateau() {
    [premiereCarte, deuxiemeCarte] = [null, null];
    verrouillerPlateau = false;
}

let intervalleTimer; // Stocke l'intervalle pour pouvoir l'arrêter

// Timer
function lancerTimer() {
    clearInterval(intervalleTimer); // Stoppe l'ancien timer avant d'en créer un nouveau
    
    let temps = 180;
    chrono.textContent = temps; // Réinitialise l'affichage
    intervalleTimer = setInterval(() => {
        temps--;
        chrono.textContent = temps;

        if (temps === 0) {
            clearInterval(intervalleTimer);
            let score = Math.max(0, (compteurPaires * 50) - (compteurCoups * 5));
            alert(`Temps écoulé !\nCoups joués : ${compteurCoups}\nPaires trouvées : ${compteurPaires}\nScore final : ${score}`);
            enregistrerScore(tempsRestant, compteurCoups, score);
            
            // Retourner toutes les cartes
            document.querySelectorAll(".carte").forEach((carte) => {
                carte.classList.add("retourner");
                carte.style.pointerEvents = "none"; // Désactiver les clics
            });
        }
    }, 1000);
}
// Fonction pour réinitialiser le jeu
function reinitialiserJeu() {
    clearInterval(intervalleTimer); // Stoppe le chrono actuel pour éviter le bug
    section.innerHTML = ''; // Supprime toutes les cartes actuelles
    compteurCoups = 0;
    compteurPaires = 0;
    coups.textContent = compteurCoups;
    paire.textContent = compteurPaires;
    genererCartes(); // Générer un nouveau jeu
    lancerTimer(); // Redémarrer le chrono proprement
}

function enregistrerScore(tempsRestant, coups, score) {
    const pseudo = sessionStorage.getItem("pseudo"); // pseudo stocké dans sessionStorage
    console.log("Pseudo récupéré :", pseudo);
    
    if (!pseudo) {
        alert("Pseudo introuvable");
        return;
    }

    // Créer un objet avec les données à envoyer
    const data = {
        pseudo: pseudo,
        temps: tempsRestant,
        coups: coups,
        niveau: 2,
        score: score
    };

    // Envoyer les données au serveur via une requête POST avec fetch
    fetch('enregistrer_score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // Convertir l'objet en JSON
    })
    .then(response => response.json()) // On s'attend à une réponse JSON
    .then(data => {
        console.log('Score enregistré avec succès:', data);
    })
    .catch(error => {
        console.error('Erreur lors de l\'enregistrement du score:', error);
    });
}

// Ajouter un événement de réinitialisation du jeu
boutonReset.addEventListener("click", reinitialiserJeu);

// Lancer le jeu initial
genererCartes();
lancerTimer();

// Ajouter un événement de réinitialisation du jeu
boutonReset.addEventListener("click", reinitialiserJeu);

// Lancer le jeu initial
genererCartes();
lancerTimer();