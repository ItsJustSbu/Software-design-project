import {initializeApp, FirebaseApp } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";

function init(): Auth {
    const firebaseConfig = {
       
    };

    const app : FirebaseApp = initializeApp(firebaseConfig);
    const auth : Auth = getAuth(app);
     
    return auth;
}

export default init;