import express, {Request, Response, Application } from "express";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import bodyParser from "body-parser";
import init from "./firebaseinit.js";

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = init();

app.post("/studentsignin", (req: Request, res: Response) => {

    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential)=>{
        const user = userCredential.user;
        res.status(200).json({message: "User signed in successfully", user: user});
    })
    .catch((error)=>{
        res.status(400).json({message: "User sign in failed", error: error});
    });

});

app.post("/studentregister", (req: Request, res: Response) =>{
    
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential)=>{
        const user = userCredential.user;
        res.status(200).json({message: "User registered successfully", user: user});
    })
    .catch((error)=>{
        res.status(400).json({message: "User registration failed", error: error});
    });
})


app.listen(80, () => console.log("Server running on port 8080"));