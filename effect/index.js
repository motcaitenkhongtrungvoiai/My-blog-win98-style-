import { startUp_sound } from "./audioController.js";
import { contentLoader } from "./loadController.js";

window.addEventListener("DOMContentLoaded",()=>{
//sound play
startUp_sound();
contentLoader();
})
window.addEventListener("load",()=>{
//load effect
contentLoader();
})
