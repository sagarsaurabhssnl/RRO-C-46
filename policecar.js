class Policecar {
    constructor(y) {
        
        this.car1 = createSprite(75, y + 1000);
        this.car2 = createSprite(285, y + 1000);
        this.car3 = createSprite(500, y + 1000);
        this.car4 = createSprite(665, y + 1000);
        this.car5 = createSprite(880, y + 1000);
        this.car6 = createSprite(1095, y + 1000);
        this.car1.addImage(policeCarImg);
        this.car2.addImage(policeCarImg);
        this.car3.addImage(policeCarImg);
        this.car4.addImage(policeCarImg);
        this.car5.addImage(policeCarImg);
        this.car6.addImage(policeCarImg);
        this.car1.velocityY = -20;
        this.car2.velocityY = -20;
        this.car3.velocityY = -20;
        this.car4.velocityY = -20;
        this.car5.velocityY = -20;
        this.car6.velocityY = -20;
        this.car1.scale = 0.3;
        this.car2.scale = 0.3;
        this.car3.scale = 0.3;
        this.car4.scale = 0.3;
        this.car5.scale = 0.3;
        this.car6.scale = 0.3;
        
    }
}