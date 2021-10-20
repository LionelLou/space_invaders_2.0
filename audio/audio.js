/*------------------------------------------- Variables Audio ------------------------------------------*/ 

//On stocke les fichiers audio dans des variables pour les jouer en temps voulu

let audioWin = new Audio('audio/musiclegends__pickup-coin.wav');
let audioGameOver = new Audio('audio/deleted-user-877451__game-over.wav');
let audioHit = new Audio('audio/musiclegends__hit-hurt.wav');
let audioLaser = new Audio('audio/musiclegends__laser-shoot.wav');

// on règle le volume des audio pour que le son ne soit pas trop fort
audioWin.volume= 0.1;
audioGameOver.volume = 0.1;
audioHit.volume = 0.1;
audioLaser.volume = 0.1;


// let audioBomb = new Audio('audio/musiclegends__explosion.wav')   // Futur son de bombe
// audioBomb.volume = 0.1;