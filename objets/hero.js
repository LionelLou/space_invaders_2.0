

/*----------------------------  Importation des sprites et définition des compteurs d'images  ------------------------------------------*/





let heroImage = new Image();
heroImage.src = "sprites/hero_sprite_sheet.png";
let heroWidth = 16;
let heroHeight = 16;
// let heroCycleLoop = [0, 1, 2, 3];
let heroFrameCount = 0;
let heroAnimationLoop = 0;

/*----------------------------  Fonction pour créer les animations du heros  ------------------------------------------*/


function animateHero() {


    switch (heroFrameCount) {

        case 0:
            heroAnimationLoop = 0;
            break;

        case 5:
            heroAnimationLoop = 1;
            break;
        case 10:
            heroAnimationLoop = 2;
            break;

        case 15:
            heroAnimationLoop = 3;
            break;

        default:
            break;
    }

    heroFrameCount++;

    if (heroFrameCount == 20) {
        heroAnimationLoop = 0;
        heroFrameCount = 0;
    }


    drawFrame(heroImage, heroAnimationLoop, 0, heroWidth, heroHeight, heroXY);

}





/*----------------------------  Fonction pour définir le héros et lancer l'animation  ------------------------------------------*/


function heroStartUp() {

    heroXY = {
        X: Math.round(canvas.width / 2) - heroWidth / 2,
        Y: Math.round(canvas.height - heroHeight - 5),
        speed: 4
    };
}