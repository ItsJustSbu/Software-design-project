import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
function init() {
    const firebaseConfig = {};
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    return auth;
}
export default init;
