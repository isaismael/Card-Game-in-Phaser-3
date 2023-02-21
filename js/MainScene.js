
export default class MainScene extends Phaser.Scene {
    constructor(){
        super('MainScene');
    }

    preload() {
        this.loadl.image('card', 'assets/card.png');
    }

}