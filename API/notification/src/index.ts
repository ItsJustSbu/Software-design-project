import express, {Request, Response, Application } from "express";
import bodyParser from "body-parser";
import main from "./communication.js";
const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/sendnotification", async(req:Request, res:Response)=>{
    const communicationClient = await main(req.body.reciever, req.body.subject, req.body.body);
    res.status(200).json({message: "Notification sent successfully"});
});

app.listen(80, ()=>{
    console.log("Listening on port 80");
})