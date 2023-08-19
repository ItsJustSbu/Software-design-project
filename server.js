import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKvleNz04epokvmFdgKPZXxHg65GimtE",
  authDomain: "reddam-authentication.firebaseapp.com",
  projectId: "reddam-authentication",
  storageBucket: "reddam-authentication.appspot.com",
  messagingSenderId: "665839634793",
  appId: "1:665839634793:web:c3964a25f17549b4a755f8"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const auth = getAuth();



app.get('/' , (req, res)=>{
    res.send('Hello World');
});

app.post('/register', (req,res)=>{
    const {email,password} = req.body;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        res.send(user.uid);
    }).catch((error)=>{
        res.send(error.message);
    });
    
});

app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        res.send(user.uid);
    }).catch((error)=>{
        res.send(error.message);
    });
    
});

app.listen(80, ()=>{
    console.log('Server started on port 80');
});
