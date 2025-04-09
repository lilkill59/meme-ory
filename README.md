# Jeu de Memory

Bienvenue sur le projet de jeu de Memory fait par des elèves de première année de licence Informatique pour la matière Technologie du Web! Ce jeu permet aux joueurs de retrouver des paires de cartes identiques dans une grille, avec un système de score basé sur le temps et le nombre de coups.

## Table des matières

- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribution](#contribution)
- [Licence](#licence)

## Description

Le jeu de Memory est un classique qui met à l'épreuve la mémoire des joueurs. Le but est de retrouver des paires de cartes identiques parmi celles disposées face cachée sur une grille. Plus vous êtes rapide et précis, meilleur sera votre score !

## Fonctionnalités

### Front-End

- **Génération dynamique des cartes** : Les cartes sont générées et disposées aléatoirement à chaque nouvelle partie.
- **Animation fluide** : Effet de retournement des cartes réalisé via CSS et JavaScript.
- **Interface de jeu** :
  - Chronomètre pour mesurer le temps écoulé.
  - Compteur de coups pour suivre le nombre de tentatives.
  - Indicateurs visuels pour les paires trouvées et la progression.
- **Niveaux de difficulté** : Choix du nombre de cartes et du temps imparti pour varier les défis.
- **Feedback utilisateur** : Messages de félicitations, encouragements ou suggestions en cas d'erreur.
- **Bouton de redémarrage** : Permet de relancer une nouvelle partie facilement.

### Back-End

- **Gestion des scores** : Enregistrement et récupération des meilleurs scores via PHP.
- **Base de données** : Utilisation de MySQL pour stocker les statistiques des joueurs et afficher un classement en ligne.

## Technologies utilisées

- **Front-End** : HTML, CSS, JavaScript
- **Back-End** : PHP
- **Base de données** : MySQL

## Installation

1. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/jeu-de-memory.git`
2. Accédez au répertoire du projet : `cd jeu-de-memory`
3. Installez les dépendances nécessaires (si applicable).

## Utilisation

1. Lancez le serveur local pour le front-end.
2. Assurez-vous que le serveur back-end et la base de données MySQL sont configurés et en cours d'exécution.
3. Ouvrez le jeu dans votre navigateur et commencez à jouer !
