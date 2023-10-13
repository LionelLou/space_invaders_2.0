

//----------------------------- Gestion des paramètres du jeu en fonction de l'étage -------------------------------------




function difficultyStageSetup(stage){

    switch(stage){

        case 1: 
            monsterSpeed = 0.05;
            break;
        
        case 2:
            monsterSpeed = 0.1;
            break;
        
        case 3:
            monsterSpeed = 0.15;
            break;

        case 4:
            monsterSpeed = 0.20;
            break;
        
        case 5:
            monsterSpeed = 0.25;
            break;
        
        case 6:
            monsterSpeed = 0.30;
            break;
        
        case 7: 
            monsterSpeed = 0.35;
            break;
        
        case 8:
            monsterSpeed = 0.40;
            break;

        case 9:
            monsterSpeed = 0.45;
            break; 
        
        case 10:
            monsterSpeed = 0.5;
            break;

        default:
            monsterSpeed = 0.5;
            break;
    }     

}