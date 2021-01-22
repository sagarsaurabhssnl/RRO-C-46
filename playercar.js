class Player {
    constructor() {
        track1 = createSprite(590, 300);
        track2 = createSprite(590, -300);
        track1.addImage(trackImg);
        track2.addImage(trackImg);
        trackSelector = track1;
        playerxPos = Math.round(random(0, 5));
        this.car = createSprite(playerX[playerxPos], 300);
        this.vel = this.car.velocityY;
        this.car.scale = 0.5;
        this.car.addImage(carImg);
        distCheck = this.car.y * (-1) + 500;
    }
    controls() {
        camera.position.y = this.car.y - 150;
        this.car.x = playerX[playerxPos];
        if (frameCount % 10 === 0) {
            var obs1 = new Obstacle1(this.car.y - 600);
            obs[obsCount] = new Group();
            obs[obsCount].add(obs1.car);
            obsCount += 1;
        }
        // if (frameCount > 60) {
        //     obs1.interaction();
        // }
        // for (var g = 0; g < obs.length; g++) {
        //     if (obs[g].isTouching(this.car)) {
        //         obs[g].destroyEach();
        //     }
        // }
        // for (var g = 0; g < obs.length; g++) {
        //     obs[g].collide(this.car);
        // }
        for (var g = 0; g < obs.length; g++) {
            this.car.collide(obs[g]);
        }
        distance = (this.car.y * -1);
        if (distCheck < distance) {
            trackSelector.y = this.car.y - 600;
            distCheck = this.car.y * (-1) + 500;
            switchTrack();
        }
        if (keyIsDown(UP_ARROW) && this.vel > -20) {
            started = true;
            this.vel -= 0.2;
        } else if (keyIsDown(DOWN_ARROW) && this.vel <= 0) {
            this.vel += 0.3;
        } else {
            if (this.car.velocityY < 0) {
                this.vel += 0.2;
            }
        }
        if (this.car.velocityY > 0) {
            this.car.velocityY -= 0.1;
        }
        this.car.velocityY = this.vel;
    }
}