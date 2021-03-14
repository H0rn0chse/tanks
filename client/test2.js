const { AUTO, Game, GameObjects, Scene } = globalThis.Phaser;
const { SimplexNoise } = globalThis;

const sceneWidth = 800;
const sceneHeight = 500;

class MainScene extends Scene {
    preload () {
        this.load.image("background", "assets/background.png");
    }

    create () {
        this.addBackground();
        this.addGround();
        this.addPlayerSprite();
    }

    addPlayerSprite () {

    }

    addGround () {
        const simplex = new SimplexNoise();
        for (let x = 0; x < sceneWidth; x++) {
            const noiseWidth = 150;
            const maxHeight = 400;
            const minHeight = 100;
            const height = (simplex.noise2D(0, x / noiseWidth) + 1) * (maxHeight - minHeight) + minHeight;
            const rect = new GameObjects.Rectangle(this, x, sceneHeight, 1, height, 0xff0000);
            this.add.existing(rect);
        }
    }

    addBackground () {
        const background = new GameObjects.Image(this, 0, 0, "background").setOrigin(0);
        background.displayWidth = sceneWidth;
        background.displayHeight = sceneHeight;
        this.add.existing(background);
    }
}

const config = {
    type: AUTO,
    width: sceneWidth,
    height: sceneHeight,
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
