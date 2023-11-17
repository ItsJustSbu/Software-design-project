import {initializeApp, FirebaseApp } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";

function init(): Auth {
    const firebaseConfig = {
        apiKey: "AIzaSyBiKvleNz04epokvmFdgKPZXxHg65GimtE",
        authDomain: "reddam-authentication.firebaseapp.com",
        projectId: "reddam-authentication",
        storageBucket: "reddam-authentication.appspot.com",
        messagingSenderId: "665839634793",
        appId: "1:665839634793:web:c3964a25f17549b4a755f8"
    };

    const app : FirebaseApp = initializeApp(firebaseConfig);
    const auth : Auth = getAuth(app);
     
    return auth;
}

export default init;