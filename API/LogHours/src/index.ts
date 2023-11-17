import InitialiseDatabaseClient from "./DatabaseClientInit.js";
import bodyParser from "body-parser";
import express, {Request, Response, Application } from "express";

const app : Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/loghours", async (req: Request, res: Response) => {
    const dbClient = await InitialiseDatabaseClient();

    const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });

    const {container} : any = await database.containers.createIfNotExists({ id: "StudentsHours" });

    let body : {
        "studentId": string,
        "hours": number,
        "date": string,
        "slipNumber": string,
        "event": string,
        "document": File
    }

    const date = new Date();

    //generate a 18 alphanumeric unique charecter long random string for slip number
    const slipNumber : string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    body = {
        "studentId" : req.body.studentId,
        "hours": req.body.hours,
        "date": date.toISOString(),
        "slipNumber": slipNumber,
        "event": req.body.event,
        "document": req.body.document
    }
    
    const response = await container.items.create(req.body);        

    if (response.statusCode != 201 && response.statusCode != 200){
        res.status(400).json({message: "Hours logging failed"});
    }
    else {
        res.status(200).json({message: "Hours logged successfully", response: response.resource.id});
    }
    
});

app.get("/gethours/:id", async (req: Request, res: Response) => {

    const dbClient = await InitialiseDatabaseClient();

    const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });

    const {container} : any = await database.containers.createIfNotExists({ id: "StudentsHours" });

    const response = await container.items.query(`SELECT * FROM c WHERE c.studentId = "${req.params.id}"`).fetchAll();

    if (response.resources.length == 0){
        res.status(400).json({message: "No hours logged"});
    }
    else {
        res.status(200).json({message: "Hours logged successfully", response: response.resources});
    }
});


app.listen(80, ()=> {"listening on port 80"})