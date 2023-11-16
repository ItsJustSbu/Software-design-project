import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
function init() {
    const firebaseConfig = {
        apiKey: "AIzaSyBiKvleNz04epokvmFdgKPZXxHg65GimtE",
        authDomain: "reddam-authentication.firebaseapp.com",
        projectId: "reddam-authentication",
        storageBucket: "reddam-authentication.appspot.com",
        messagingSenderId: "665839634793",
        appId: "1:665839634793:web:c3964a25f17549b4a755f8"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    return auth;
}
export default init;
