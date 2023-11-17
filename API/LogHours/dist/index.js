var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import InitialiseDatabaseClient from "./DatabaseClientInit.js";
import bodyParser from "body-parser";
import express from "express";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/loghours", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbClient = yield InitialiseDatabaseClient();
    const { database } = yield dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    const { container } = yield database.containers.createIfNotExists({ id: "StudentsHours" });
    let body;
    const date = new Date();
    //generate a 18 alphanumeric unique charecter long random string for slip number
    const slipNumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    body = {
        "studentId": req.body.studentId,
        "hours": req.body.hours,
        "date": date.toISOString(),
        "slipNumber": slipNumber,
        "event": req.body.event,
        "document": req.body.document
    };
    const response = yield container.items.create(req.body);
    if (response.statusCode != 201 && response.statusCode != 200) {
        res.status(400).json({ message: "Hours logging failed" });
    }
    else {
        res.status(200).json({ message: "Hours logged successfully", response: response.resource.id });
    }
}));
app.get("/gethours/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dbClient = yield InitialiseDatabaseClient();
    const { database } = yield dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    const { container } = yield database.containers.createIfNotExists({ id: "StudentsHours" });
    const response = yield container.items.query(`SELECT * FROM c WHERE c.studentId = "${req.params.id}"`).fetchAll();
    if (response.resources.length == 0) {
        res.status(400).json({ message: "No hours logged" });
    }
    else {
        res.status(200).json({ message: "Hours logged successfully", response: response.resources });
    }
}));
app.listen(80, () => {
    "listening on port 80";
});
