import { EnigneManager } from "./EnigneManager.js";
import { Vector3 } from "./BaseTypes.js";

const { Scene, HemisphericLight, ArcRotateCamera, CannonJSPlugin } = globalThis.BABYLON;

export const sceneWidth = 800;
export const sceneHeight = 500;
const canvasCenter = Vector3(sceneWidth / 2, sceneHeight / 2, 0);

/*
 Camera shows the 2D representation of the 800 x 500 map
*/
class _CSLManager {
    constructor () {
        this.scene = null;
        this.light = null;
        this.camera = null;
    }

    init () {
        this.scene = new Scene(EnigneManager.engine);
        this.scene.gravity = Vector3(0, -0.15, 0);
        this.scene.enablePhysics(null, new CannonJSPlugin());

        // Add a lights to the scene
        this.light = new HemisphericLight("light", Vector3(1, 1, 0));

        // Add a camera to the scene and attach it to the canvas
        // alpha, beta, radius, target position
        this.camera = new ArcRotateCamera("camera", 0, 0, 0, Vector3(0, 0, 0));

        this.camera.target = canvasCenter;
        const z = (sceneHeight / 2) / Math.tan(this.camera.fov / 2);

        this.camera.position = Vector3(canvasCenter.x, canvasCenter.y, -z);
    }
}

export const CSLManager = new _CSLManager();
globalThis.CSLManager = CSLManager;
