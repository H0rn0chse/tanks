const { Engine } = globalThis.BABYLON;

class _EnigneManager {
    constructor () {
        this.canvas = document.getElementById("renderCanvas");
        this.engine = new Engine(this.canvas, true);
    }

    render (scene) {
        this.engine.runRenderLoop(() => {
            scene.render();
        });
    }
}

export const EnigneManager = new _EnigneManager();
globalThis.EnigneManager = EnigneManager;
