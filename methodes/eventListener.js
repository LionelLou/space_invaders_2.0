/*-------------Récupération de la touches appuyée, pour la création du laser ou le déplacement associé au héros selon Y ------------------*/


function getKey(event) {

    let touche = event.key; //on récupère la valeur de la touche enfoncée 

    if ((touche == 'q' || touche == 'ArrowLeft') && heroXY.X > 2 ) {  //Déplacement vers la gauche et test si proche du bord

        ctx.clearRect(heroXY.X, heroXY.Y, heroWidth, heroHeight);
        heroXY.X -= heroXY.speed;
        
    }

    if ((touche == 'd' || touche == 'ArrowRight') && heroXY.X < (canvas.width - heroWidth - 2)) {  // Déplacement vers la droite et test si proche du bord

        ctx.clearRect(heroXY.X, heroXY.Y, heroWidth, heroHeight);
        heroXY.X += heroXY.speed;

    }

    if(touche == 'p' ){

        alert("Le jeu est en pause. Cliquez sur OK pour reprendre");

    }

    if (touche == ' ') {   // Création d'un objet laser chaque fois que l'on appuye sur Espace
        
        
        addLaser(laserXY);
    

    }

    if (touche != '' && !isGameStarted ){

        startNewGame();

    }

}
