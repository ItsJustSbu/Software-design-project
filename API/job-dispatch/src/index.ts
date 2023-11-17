import express, {Request, Response, Application } from "express";
import bodyParser from "body-parser";
import axios from "axios";
import InitialiseDatabaseClient from "./DatabaseClientInit.js";
import { push } from "firebase/database";

const app : Application = express();

const url = "https://reddamcomms.agreeableplant-3f520c83.southafricanorth.azurecontainerapps.io/sendnotification";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/dispatchjob", async (req:Request, res:Response)=>{

    const studentId = req.body.studentId;
    const teacherId = req.body.teacherId;
    const task = req.body.task;

    const dbClient = await InitialiseDatabaseClient();
    var {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    var {container} : any = await database.containers.createIfNotExists({ id: "Students" });

    const studentResponse = await container.items.query(`SELECT * FROM c WHERE c.id = "${studentId}"`).fetchAll();
    const studentEmail = studentResponse.resources[0].email;

    studentResponse[0].upsert({"tasks":push(task)});

   var {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
   var {container} : any = await database.containers.createIfNotExists({ id: "Teachers" });

   const teacherResponse = await container.items.query(`SELECT * FROM c WHERE c.id = "${teacherId}"`).fetchAll();
   const teacherEmail = teacherResponse.resources[0].email;

    const notification = {
        "reciever": studentEmail,
        "subject": "Task Assigned",
        "body": `Your task has been assigned by ${teacherEmail}`
    }

    axios.post(url, notification)
    .then((response)=>{
        res.status(200).json({message: "Job dispatched successfully"});
    })
    .catch((error)=>{
        res.status(400).json({message: "Job dispatch failed"});
    });

});




app.listen(80, ()=>{
    console.log("Listening on port 80");
});