
// Gestion de colision Monstre Projectile et des Hitboxs

function collisionDetection( laserXY, monsterXY ){

    let monsterPosition = null;

    let distanceX;

    for( let i = 0 ; i < monsterXY.length ; i++ ){ // on parcourt la liste des montres pour tester si un laser les touche

        let isXValid = false;
        let isYValid = false;

        // Gestion de la colision du laser sur le monstre selon l'axe X 
        
        
            // cas où le laser est à gauche du monstre
        if( laserXY.X + laserWidth <= monsterXY[i].X + (monsterWidth / 2) ) { 

            distanceX = monsterXY[i].X - (laserXY.X + laserWidth);
            

        }   // cas où le laser est à droite du monstre
        else if ( laserXY.X <= monsterXY[i].X + monsterWidth)  
        {
            distanceX = laserXY.X - (monsterXY[i].X + monsterWidth);
            
        }

        // si une distance faible à été détectée verticalement, donc qu'une collision laser/monstre à lieu sur l'axe X
        // alors on confirme pour la partie X la colision, sinon les booléens de validation restent à False  

        if ( distanceX <= 0 ) {
            
            isXValid = true;

        
        // si une distance faible à été détectée horizontalement, donc qu'une collision laser/monstre à lieu sur l'axe Y
        // alors on confirme pour la partie Y la colision, sinon les booléens de validation restent à False     
            
        if (((monsterXY[i].Y <= laserXY.Y) && (laserXY.Y <= monsterXY[i].Y + monsterHeight)))    
        
        // Ici on vient tester si les lasers rentrer dans les dimensions de la boite du monstre 
        // Pour cela on vérifie que la position sur Y du laser est contenue dans les dimensions de la taille de la boîte un hauteur
        
            isYValid = true;
        
        }

        // Si les positions X et Y du laser donnent sur un point de colision avec un monstre alors on garde l'index de la boîte touchée
        if( isXValid && isYValid ){

            monsterPosition = i;
                  
        }
        
    }
    

    return monsterPosition ; // on renvoie l'index de la boîte touchée 

}



/*----------------------- DEBUGEUR NE PAS SUPPRIMER --------------------

partie debug à gauche :

            console.log("-------------------");
            console.log("monster X = " + monsterXY[i].X);
            console.log("positionlaser = " + laserX);
            console.log("lasewidth = " + laserWidth);
            console.log("-------------------");
            console.log("distanceX = " + distanceX);
            console.log("-------------------");
           
  
partie débug à droite :

            console.log("-------------------");
            console.log("positionlaser = " + laserX);
            console.log("monster X = " + monsterXY[i].X);
            console.log("monster width = " + monsterWidth);
            console.log("-------------------");
            console.log("distanceX = " + distanceX);
            console.log("-------------------");


----------------------- DEBUGEUR NE PAS SUPPRIMER --------------------*/
