


/*----------------  Importation des sprites   ------------------------------------------*/

let laserImage = new Image();
laserImage.src = "sprites/laser_sprite.png";
let laserWidth = 2;
let laserHeight = 10;




/*----------------  Fonction pour l'affichage du laser   ------------------------------------------*/

function laserSkin(X, Y) {

    ctx.drawImage(laserImage, X, Y);

}


/*----------------  Fonction pour ajouter un laser   ------------------------------------------*/

function addLaser(laserTable){
    
    if (laserTable.length < 10) { // maximum capé à 10 projectiles 


        audioLaser.play(); // Bruit d'un tir de laser 

        laserTable.push({  // on crée un objet laser que l'on stocke dans un tableau regroupant les lasers

            X: heroXY.X + (heroWidth / 2) - 1,
            Y: heroXY.Y,
            speed: 2

        });
    }
} 


/*----------------  Fonction pour déplacer les lasers   ------------------------------------------*/



function laserMove(){
  
    let index = 0; // compteur pour la boucle while pour les indexes
    let hit = null; // permet de recupérer l'index du monstre qui est touché, reste négatif tant que aucun monstres n'est touché
    let numberOfLasers = laserXY.length; // on stocke le nombre de lasers avant opérations 

    //Boucle for pour faire avancer les lasers

    while (index < numberOfLasers) {  
        
        hit = collisionDetection(laserXY[index], monsterXY); // on detecte s'il y colision entre laser et monstres

        if ((laserXY[index].Y + laserHeight) <= 0) { // Gestion du cas où le laser dépasse le plafond

            laserXY.splice(index, 1);
            numberOfLasers = laserXY.length;

        } else if (hit != null) { //gestion en cas de colision avec un laser 

            
            audioHit.play(); // Son du monstre touché par un tir de laser 

            ctx.clearRect(monsterXY[hit].X, monsterXY[hit].Y, monsterWidth, monsterHeight);
            ctx.clearRect(laserXY[index].X, laserXY[index].Y, laserWidth, laserHeight);

            state.score += 100;
            barSetup(state.life , state.stage , state.score );

            laserXY.splice(index, 1);
            monsterXY.splice(hit, 1);
            hit = null;


        } else { // déplacement classique des lasers si aucune perturbation


            ctx.clearRect(laserXY[index].X, laserXY[index].Y , laserWidth, laserHeight);

            laserXY[index].Y -= laserXY[index].speed; //vitesse de déplacement des lasers

            laserSkin(laserXY[index].X, laserXY[index].Y);

            numberOfLasers = laserXY.length; // on récupère le nombre de lasers restants après opération
            index++;

        }

    }
}
    

