import { Vector3 } from "./BaseTypes.js";
import { sceneHeight, sceneWidth } from "./CSLManager.js";

const { PhysicsImpostor, GroundBuilder, MeshBuilder, Mesh } = globalThis.BABYLON;

export class Ground {
    constructor () {
        const width = 40;
        const height = 25;

        /*
        this.ground = GroundBuilder.CreateGround("ground", {
            width: sceneWidth,
            height: 10,
        });
        this.ground.position = Vector3(sceneWidth / 2, -5);
        this.ground.physicsImpostor = new PhysicsImpostor(this.ground, PhysicsImpostor.BoxImpostor, { mass: 0 });
        */

        /*
        default color
        r 0.3  => 76.5
        g 0.59 => 150.45
        b 0.11 => 28.05
        */

        /*
        this.ground = Mesh.CreateGroundFromHeightMap("ground", "./assets/gradient.png", {

            width: sceneWidth,
            height: sceneHeight / 4,
            minHeight: 0,
            maxHeight: sceneHeight / 4,
        });
        */

        this.options = [sceneWidth, 100, 250, 0, sceneHeight / 2];

        this.ground = Mesh.CreateGroundFromHeightMap("ground", "./assets/gradientThin.png", ...this.options);
        this.ground.position = Vector3(sceneWidth / 2, 0);
        globalThis.ground = this.ground;
        this.current = "./assets/gradientThin.png";

        setInterval(() => {
            this.ground.dispose();
            let name = "./assets/gradientThin.png";
            if (this.current === name) {
                name = "./assets/gradientThin2.png";
            }

            this.ground = Mesh.CreateGroundFromHeightMap("ground", name, ...this.options);
            this.ground.position = Vector3(sceneWidth / 2, 0);
            this.current = name;
        }, 500);

        /*
        This breaks the physics engine
        let count = 1;
        for (let x = 0; x < sceneWidth; x++) {
            for (let y = 0; y < sceneHeight / 10; y++) {
                const item = MeshBuilder.CreateBox(`groundParticle${count}`, {
                    width: 1,
                    height: 1,
                });
                item.position = Vector3(x, y);
                item.physicsImpostor = new PhysicsImpostor(item, PhysicsImpostor.BoxImpostor, { mass: 1 });
                count += 1;
            }
        }
        */

        /* this.item = MeshBuilder.CreateBox("groundParticle", {
            width: sceneWidth,
            height,
        });
        this.item.position = Vector3(sceneWidth / 2, height / 2);
        this.item.physicsImpostor = new PhysicsImpostor(this.item, PhysicsImpostor.BoxImpostor, { mass: 1 });

        globalThis.item = this.item; */
    }
}
