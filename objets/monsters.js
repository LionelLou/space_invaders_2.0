


/*-----------------------  Importation des sprites et définition diverses ------------------------------------------*/



let monsterlist = [];
let monsterImage = new Image();

monsterImageList = ["sprites/monsters/monster_sprite_sheet_1.png", "sprites/monsters/monster_sprite_sheet_2.png", 
                    "sprites/monsters/monster_sprite_sheet_3.png" ]

let monsterWidth = 14;
let monsterHeight = 12;
//let monsterCycleLoop = [0, 1];

let monsterFrameCount = 0;
let monsterAnimationLoop = 0;

let monsterSpeed;

/*---------------------  Fonction pour créer les animations des monstres  ------------------------------------------*/

function animateMonsters() {



    if (monsterXY.length == 0 && isGameStarted) { // On teste s'il reste des monstres à détruire, si oui, on met fin à la partie 

        state.score += 10000;
        state.stage += 1;

        barSetup(state.life, state.stage, state.score);

        endGame('win');

    }


    switch (monsterFrameCount) {

        case 0:
            monsterAnimationLoop = 0;
            break;

        case 60:
            monsterAnimationLoop = 1;
            break;

        default:
            break;
    }
    
    monsterFrameCount++;

    if (monsterFrameCount == 120) {
        
        monsterAnimationLoop = 0;
        monsterFrameCount = 0;
    }


    

    monsterXY.forEach(element => {


        if (heroXY.Y - (element.Y + monsterHeight) <= 5 && isGameStarted) { //si les monstres sont trop proches du heros selon Y on met fin à la partie 


            endGame('lose');
           
            


        } else if (element.X <= 0 || element.X >= (canvas.width - monsterWidth)) { //gestion de colision avec le bord des montres

            monsterXY.forEach(element2 => {

                // boucle pour effacer les sprites des monstres et les afficher un pas plus bas si colision avec un des murs selon X 

                ctx.clearRect(element2.X , element2.Y , monsterWidth + 2, monsterHeight + 2 );
                element2.marginX = -element2.marginX;
                element2.X += element2.marginX;
                element2.Y -= element2.marginY;
                drawFrame(monsterImage, monsterAnimationLoop, 0, monsterWidth, monsterHeight, element);

            });




        } else {

            ctx.clearRect(element.X, element.Y, monsterWidth + 2, monsterHeight + 2 );
            element.X += element.marginX;
            drawFrame(monsterImage, monsterAnimationLoop, 0, monsterWidth, monsterHeight, element);

        }

    });
}




/*------------------------------  Fonction pour créer les objets monstres  ------------------------------------------*/


function monsterStartUp() {


    monsterImage.src = monsterImageList[Math.floor(Math.random() * 3)];

    let stepX = (canvas.width / 6), stepY = (canvas.height / 12) + 5;

    monsterXY = [];

    for (let i = 1; i <= 5; i++) {

        for (let j = 1; j <= 4; j++) {

            monsterXY.push({

                X: Math.round(stepX * i),
                Y: Math.round(stepY * j),
                marginX: monsterSpeed,  // vitesse de déplacement selon X
                marginY: -5 // vitesse de déplacement selon Y

            });
        }
    }
    




    //----------------------- DEBUGEUR NE PAS SUPPRIMER --------------------

    // Test avec 1 monstre pour le débug en cas de soucis : 


    // monsterImage.src = monsterImageList[Math.floor(Math.random() * 2)];

    // monsterXY = [];

    // monsterXY.push({

    //     X: Math.round(canvas.width / 6),
    //     Y: Math.round(canvas.height / 12),
    //     marginX: monsterSpeed,
    //     marginY: -5,
    //     animationState: true

    // });

    //----------------------- DEBUGEUR NE PAS SUPPRIMER --------------------


}