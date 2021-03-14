const { AUTO, Game, GameObjects, Scene } = globalThis.Phaser;
const { SimplexNoise } = globalThis;

const sceneWidth = 800;
const sceneHeight = 500;

class MainScene extends Scene {
    preload () {
        this.load.image("background", "assets/background.png");
        this.load.image("tank", "assets/tank.png");
    }

    create () {
        this.addBackground();
        this.addGround();
        this.addPlayer();
    }

    addPlayer () {
        const player = new GameObjects.Sprite(this, 200, 0, "tank");
        this.add.existing(player);

        this.physics.add.existing(player);
        this.physics.add.collider(player, this.ground);

        player.body.collideWorldBounds = true;
    }

    addGround () {
        const simplex = new SimplexNoise();
        this.ground = new GameObjects.Group(this, [], {});
        for (let x = 0; x < sceneWidth; x++) {
            const noiseWidth = 150;
            const maxHeight = 400;
            const minHeight = 100;
            const height = (simplex.noise2D(0, x / noiseWidth) + 1) * ((maxHeight - minHeight) / 2) + minHeight;

            const rect = new GameObjects.Rectangle(this, x, sceneHeight, 1, height, 0xff0000);
            this.ground.add(rect);
            this.add.existing(rect);
            this.physics.add.existing(rect);

            rect.body.collideWorldBounds = true;
            rect.body.immovable = true;
            rect.body.allowGravity = false;
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
