import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const todos: Array<{ id: number; title: string }> = [{ id: 1, title: "Eat" }];

app.get("/", (req, res) => {
    res.send(todos);
});

type BodyInfoReq = { 
    referrerName: string,
    referrerEmail: string,
    recipientEmail:string,
    phone?:string 
};

app.post("/", (req: Request<{}, {}, BodyInfoReq>, res: Response) => {
    const { referrerName, referrerEmail, recipientEmail, phone} = req.body;
    console.log(referrerName, referrerEmail, recipientEmail, phone);
    res.json({ referrerName});
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});

async function create(referrerName: string, referrerEmail: string, recipientEmail:string, phone?:string) {
    await prisma.referral.create({
        data: {
            referrerName,
            referrerEmail,
            phone,
            recipientEmail
        }
    });
    console.log("created");
}


