import { CSLManager } from "./src/CSLManager.js";
import { EnigneManager } from "./src/EnigneManager.js";
import { Ground } from "./src/Ground.js";
import { Player } from "./src/Player.js";

CSLManager.init();

const background = new BABYLON.Layer("back", "./assets/background.png");
background.isBackground = true;
background.texture.level = 0;

const ground = new Ground();

// const player1 = new Player();

EnigneManager.render(CSLManager.scene);
