import { PrismaClient } from "@prisma/client";
import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "Runs"
    })
});

type BodyInfoReq = { 
    referrerName: string,
    referrerEmail: string,
    recipientEmail:string,
    phone?:string 
};

app.post("/", async (req: Request<{}, {}, BodyInfoReq>, res: Response) => {
    const { referrerName, referrerEmail, recipientEmail, phone} = req.body;
    await prisma.referral.create({
        data: {
            referrerName,
            referrerEmail,
            phone,
            recipientEmail
        }
    });
    console.log("Created");
    res.json({
        msg: "Created"
    });
});

app.listen(3000, () => {
    console.log("Running on http://localhost:3000");
});



