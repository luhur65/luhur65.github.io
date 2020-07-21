import { default as NavbarInit } from "./Components/nav.js";
import './Components/main-profile.js';
import './Components/sosmed-profile.js';
import './Components/content-web.js';

const Main = _ => {

    try {

        // ... navbar 
        NavbarInit();

    } catch (error) {

        // ... write your error handling
    }

}

export default Main;