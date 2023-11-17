import express, {Request, Response, Application } from "express";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import bodyParser from "body-parser";
import init from "./firebaseinit.js";
import InitialiseDatabaseClient from "./DatabaseClientInit.js";


const app : Application = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const auth = init();

app.post("/studentsignin", (req: Request, res: Response) => {

    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async (userCredential)=>{
        const user = userCredential.user;
        const dbClient = await InitialiseDatabaseClient();

        const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });

        const {container} : any = await database.containers.createIfNotExists({ id: "Students" });

        //query using email and password and get the name
        const response = await container.items.query(`SELECT * FROM c WHERE c.email = "${req.body.email}" AND c.password = "${req.body.password}"`).fetchAll();
        const name = response.resources[0].name;
        const id = response.resources[0].id;
        

        res.status(200).json({message: "User signed in successfully", response: response.resources[0]});
    })
    .catch((error)=>{
        res.status(400).json({message: "User sign in failed", error: error});
    });

});

app.post("/studentregister", (req: Request, res: Response) =>{
    
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then( async (userCredential)=>{

        const user = userCredential.user;

        const dbClient = await InitialiseDatabaseClient();

        const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });

        const {container} : any = await database.containers.createIfNotExists({ id: "Students" });

        const response = await container.items.create(req.body);        

        res.status(200).json({message: "User registered successfully", response: response.resource});

    })
    .catch((error)=>{
        res.status(400).json({message: "User registration failed", error: error});
    });
});

app.put("/studentupdate", async (req: Request, res: Response) =>{
        
        const dbClient = await InitialiseDatabaseClient();
    
        const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
        
        const {container} : any = await database.containers.createIfNotExists({ id: "Students" });
    
        const response = await container.items.upsert(req.body);
    
        res.status(200).json({message: "User updated successfully", response: response.resource.id});
    
    });

app.post("/teacherlogin",(req: Request, res: Response)=>{
    signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential)=>{
        const user = userCredential.user;
        res.status(200).json({message: "User signed in successfully", user: user});
    })
    .catch((error)=>{
        res.status(400).json({message: "User sign in failed", error: error});
    });
});

app.post("/teacherregister", (req:Request, res:Response)=>{
    
    createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then( async (userCredential)=>{

        const user = userCredential.user;

        const dbClient = await InitialiseDatabaseClient();

        const {database} : any = await dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });

        const {container} : any = await database.containers.createIfNotExists({ id: "teachers" });

        const response = await container.items.create(req.body);        

        res.status(200).json({message: "User registered successfully", response: response.resource.id});
        
    })
    .catch((error)=>{
        res.status(400).json({message: "User registration failed", error: error});
    }
    );
});

app.get("/getStudent/:id", async (req:Request, res:Response)=>{

    const id = req.params.id;
    const dbClient = await InitialiseDatabaseClient();
    const {database} : any = dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    const {container} : any = database.containers.createIfNotExists({ id: "Students" });
    const response = await container.items.query(`SELECT * FROM c WHERE c.id = "${id}"`).fetchAll();
    if (response.resources.length > 0){
        res.status(200).json({message: "User found", response: response.resources[0]});
    }else{
        res.status(400).json({message: "User not found"});
    }

});

app.get("/getTeacher/:id", async (req:Request, res:Response)=>{

    const id = req.params.id;
    const dbClient = await InitialiseDatabaseClient();
    const {database} : any = dbClient.databases.createIfNotExists({ id: "ReddamDatabase" });
    const {container} : any = database.containers.createIfNotExists({ id: "teachers" });
    const response = await container.items.query(`SELECT * FROM c WHERE c.id = "${id}"`).fetchAll();
    if (response.resources.length > 0){
        res.status(200).json({message: "User found", response: response.resources[0]});
    }else{
        res.status(400).json({message: "User not found"});
    }
});


app.listen(80, () => console.log("Server running on port 80"));