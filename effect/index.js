import { startUp_sound } from "./audioController.js";
import { contentLoader } from "./loadController.js";
import { bigerBox, closeBox ,smallerBox} from "./othereffect.js";
window.addEventListener("DOMContentLoaded",()=>{
//sound play
//startUp_sound();
contentLoader(); // hiệu ứng load giả
closeBox();
bigerBox();
smallerBox();
})
