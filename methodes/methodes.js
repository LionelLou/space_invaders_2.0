



// Fonction pour initialiser les valeurs d'affichage de la barre d'état

function barSetup(life, stage, score){

    let hearts = '';
    
    for (let i = 1; i <= life; i++) {

        hearts += '<box style="color:darkred; padding-right:3px;"><i class="bi bi-heart-fill"></i></box>';

    }

    document.getElementById('life').innerHTML = 'Vies : ' + hearts;
    document.getElementById('stage').innerHTML = 'Etage : ' + stage;
    document.getElementById('score').innerHTML = 'Score : ' + score;

}

// Fonction reset de l'affichage du canvas


function reset() {

    //remise à zéro des positions de la précedente partie

    
    monsterXY = [];
    heroXY = {};
    laserXY = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Fonction reset des statistiques du joueur 

function resetState() {

    state.life = 3;
    state.stage = 1;
    state.score = 0;

    barSetup(state.life, state.stage, state.score);

}



// Fonction pour afficher la frame souhaité du fichier Sprite Sheet 


function drawFrame(image, frameX, frameY, spriteWidth, spriteHeight, object){

    ctx.drawImage(image, frameX*spriteWidth, frameY*spriteHeight, spriteWidth, spriteHeight, object.X, object.Y, spriteWidth, spriteHeight );
}









