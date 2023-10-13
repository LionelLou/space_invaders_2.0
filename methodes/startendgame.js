
// Fonction pour lancer la partie 

function startNewGame() {

    if (!isGameStarted) {

        isGameStarted = true;

        if (state.life == 0) {

            resetState();
        }
        reset();
        spaceInvader();
    }
}



// Fonction pour mettre fin à toutes les animations 



// Fonction fin de partie

function endGame(end) {

    isGameStarted = false;
    clearInterval(myInterval);
    //cancelAnimationFrame(monsterAnimation);
    
    
    if (end == 'lose') {

        audioGameOver.play(); 
        // audio pour la défaite 
        
        state.life -= 1;

        if (state.life == 0) {

            
            alert(' Vous avez Perdu ! ');
            alert(' Votre score est de : ' + state.score + ' points ');

            //TODO Ajouter une fonction pour rentrer le score s'il est dans le top 10 
            
            if (confirm(' Voulez vous recommencer une partie ? ')){

            
                resetState();

            }


        } else {

            alert('Dommage ! Il vous reste encore ' + state.life + ' vie(s) !');
            
            if(confirm('Voulez vous continuer à jouer ?' )){
                
                barSetup(state.life, state.stage, state.score);
                
            }
            else{

                resetState();
                
                
            }

        }

    } else if (end == 'win') {

        audioWin.play();
        alert(' Bravo ! Vous avez gagné ! ');
            
        if( confirm('Voulez vous continuer à jouer ?' )){

            
            barSetup(state.life, state.stage, state.score);

        }else{

            //TODO ajouter la possibilité de noter son score s'il est dans le TOP 10 
            
            resetState();
            
        } 
        
    }

}