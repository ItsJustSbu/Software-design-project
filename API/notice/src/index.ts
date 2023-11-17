import express, { Request, Response, Application } from "express"; 
import bodyParser from "body-parser";
import InitialiseDatabaseClient from "./DatabaseClientInit.js";

let app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/sendnotification", async (req : Request, res : Response) => {

    const subject = req.body.subject;
    const body = req.body.body;
    const teacher = req.body.teacher;
    const date = new Date();

    const dbClient = await InitialiseDatabaseClient();
    var {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    var {container} : any = await database.containers.createIfNotExists({ id: "Notifications" });

    const response = await container.items.create({"time" : date.toISOString() , "subject": subject, "body": body, "teacher" : teacher});

    res.status(200).json({message: "Notification sent successfully"});
});