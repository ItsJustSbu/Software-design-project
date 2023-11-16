var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import bodyParser from "body-parser";
import init from "./firebaseinit.js";
import InitialiseDatabaseClient from "./DatabaseClientInit.js";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const auth = init();
app.post("/studentsignin", (req, res) => {
    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
        const user = userCredential.user;
        res.status(200).json({ message: "User signed in successfully", user: user });
    })
        .catch((error) => {
        res.status(400).json({ message: "User sign in failed", error: error });
    });
});
app.post("/studentregister", (req, res) => {
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => __awaiter(void 0, void 0, void 0, function* () {
        const user = userCredential.user;
        const dbClient = yield InitialiseDatabaseClient();
        const { database } = yield dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
        const { container } = yield database.containers.createIfNotExists({ id: "Students" });
        const response = yield container.items.create(req.body);
        res.status(200).json({ message: "User registered successfully", response: response.resource.id });
    }))
        .catch((error) => {
        res.status(400).json({ message: "User registration failed", error: error });
    });
});
app.put("/studentupdate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbClient = yield InitialiseDatabaseClient();
    const { database } = yield dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    const { container } = yield database.containers.createIfNotExists({ id: "Students" });
    const response = yield container.items.upsert(req.body);
    res.status(200).json({ message: "User updated successfully", response: response.resource.id });
}));
app.post("/teacherlogin", (req, res) => {
    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
        const user = userCredential.user;
        res.status(200).json({ message: "User signed in successfully", user: user });
    })
        .catch((error) => {
        res.status(400).json({ message: "User sign in failed", error: error });
    });
});
app.post("/teacherregister", (req, res) => {
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => __awaiter(void 0, void 0, void 0, function* () {
        const user = userCredential.user;
        const dbClient = yield InitialiseDatabaseClient();
        const { database } = yield dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
        const { container } = yield database.containers.createIfNotExists({ id: "teachers" });
        const response = yield container.items.create(req.body);
        res.status(200).json({ message: "User registered successfully", response: response.resource.id });
    }))
        .catch((error) => {
        res.status(400).json({ message: "User registration failed", error: error });
    });
});
app.listen(80, () => console.log("Server running on port 8080"));
