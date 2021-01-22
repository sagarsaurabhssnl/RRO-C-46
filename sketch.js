let playerCar, carImg;
let track1, track2, trackImg;
let distCheck, trackSelector;
let distance, playerX = [75, 285, 500, 665, 880, 1095], playerxPos;
let obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8, obstacleImg = [];
let obs = [], obsCount = 0;
let gameState = "mainmenu";
let police, policeGroup, policeCarImg;
let started = false;
let policeCarDiffrence;
let carCamera, policeCamera, changeCamera = false;

function preload() {
    carImg = loadImage("img/player.png");
    trackImg = loadImage("img/track.png");
    obsImg1 = loadImage("img/1.png");
    obsImg2 = loadImage("img/2.png");
    obsImg3 = loadImage("img/3.png");
    obsImg4 = loadImage("img/4.png");
    obsImg5 = loadImage("img/5.png");
    obsImg6 = loadImage("img/6.png");
    obsImg7 = loadImage("img/7.png");
    obsImg8 = loadImage("img/8.png");
    obstacleImg = [obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8];
    policeCarImg = loadImage("img/police.png");
    policeGroup = new Group();
}

function setup() {
    var mainCanvas = createCanvas(1200, 600);
    mainCanvas._pixelsState.rotationX = 10;
    console.log(mainCanvas._pixelsState);
    playerCar = new Player();
    police = new Policecar(playerCar.car.y + 1000);
    policeCarDiffrence = police.car1.y - playerCar.car.y;
    // camera.position.y = police.car1.y - 150;
    // setTimeout(() => {
    //     changeCamera = true;
    // }, 100);
}

function draw() {
    background(150);
    policeCarDiffrence = police.car1.y - playerCar.car.y;
    policeCarDiffrence = Math.round(policeCarDiffrence);

    // if (changeCamera && gameState === mainmenu) {
    //     camera.position.y -= 10;
    // } else {
    //     // camera.position.y = police.car1.y - 150;
    // }
    playerCar.controls();
    console.log(mouseX);
    drawSprites();
    push();
    translate(camera.x - 570, camera.y + 200);
    fill(200);
    rect(0, 0, 200, 80);
    fill(0);
    text("Press C for Source Code", 5, 15);
    text("Press R to reload the game", 5, 30);
    text("Game is under construction", 5, 45);
    text("Away From Police Car :" + policeCarDiffrence, 5, 75);
    text("Use Arrow keys to control the car", 5, 60);
    pop();
    fill(150);
    rect(950, camera.position.y + 250, 200, 20);
    if (started === true) {
        fill("#ff0000");
        rect(950, camera.position.y + 250, playerCar.vel * -10, 20);
    }
}

function switchTrack() {
    if (trackSelector === track1) {
        trackSelector = track2;
    } else if (trackSelector === track2) {
        trackSelector = track1;
    }
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href
    }
    if (keyCode === 38 && gameState === "mainmenu") {
        started = true;
        gameState = "play";
    }
    if (keyCode === 82) {
        window.location.reload(false);
    }
    if (keyCode === 37 && playerxPos > 0) {
        playerxPos -= 1;
    }
    if (keyCode === 39 && playerxPos < 5) {
        playerxPos += 1;
    }
}