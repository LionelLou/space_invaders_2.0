//================================== Définitions des variables utiles pour le fonctionnement du jeu =================================


let monsterXY = [], heroXY = {}, laserXY = [];

let state = {

    life : 3,
    stage : 1,
    score : 0

}

let isGameStarted = false; // booléen qui agît comme un On/Off

let myInterval; // interval principal pour faire tourner le jeu 

let htmlPage = document.querySelector('html'); // stockage de l'id la page dans une variable

let canvas = document.querySelector('canvas'); // récupére l'objet canvas dans la page html et le stocke dans une variable
let ctx = canvas.getContext('2d'); 



/*------------------------------------------- FONCTIONS PRINCIPALES ------------------------------------------*/




//  Fonction pour faire tourner le jeu


/*------------------------------------------- Main function ------------------------------------------*/

function spaceInvader() {

    barSetup(state.life, state.stage, state.score);

    heroStartUp(); // lance la fonction créant la position du héros initiale et l'animation de celui ci

    monsterStartUp(/* TODO ajouter la variable qui donne le niveaux en cours  */);  // Créee les monstres du niveau selon un patern prédéfini


    htmlPage.addEventListener('keydown', getKey); // ajoute un écouteur d'évenements 

    myInterval = setInterval(gameKernel, 8.333); // 8.333 ms ~= 120 frames/seconde

    

}

/*--------------------------------------------------------------------------------------------------*/

function gameKernel() {
    
    laserMove();

    animateHero();

    animateMonsters();

    if(!isGameStarted){
        reset();
    }

}
