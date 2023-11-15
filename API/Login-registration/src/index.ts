import express, {Express, Request, Response, Application } from "express";

const app : Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});

app.listen(3000, () => console.log("Server running on port 3000"));