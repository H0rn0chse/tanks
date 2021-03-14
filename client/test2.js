const { AUTO, Game, GameObjects, Scene } = globalThis.Phaser;

class MainScene extends Scene {
    preload () {
        this.load.image("background", "assets/background.png");
    }

    create () {
        const background = new GameObjects.Image(this, 0, 0, "background").setOrigin(0);
        background.displayWidth = 800;
        background.displayHeight = 500;
        this.add.existing(background);
    }
}

const config = {
    type: AUTO,
    width: 800,
    height: 500,
    parent: document.querySelector("#content"),
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },
};

const game = new Game(config);
game.scene.add("mainScene", MainScene, true);
