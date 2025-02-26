import dotenv from "dotenv"
import google from 'googleapis'
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

dotenv.config();

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = "https://developers.google.com/oauthplayground";
const refresh_token = process.env.REFRESH_TOKEN

// const oAuthClient = new google.auth.Oauth2(client_id, client_secret, redirect_uri);

// async function sendMail (
//     try {
//         const accessToken = await oAuthClient.getAccessToken({
//             service: "gmail",
//             auth: {
//                 type:""
//             }
//         });

//         const mail = {
//             from: "",
//             to: "",
//             subject:""
//         }
        

//     } catch (error) {
//         return error
//     }
// )

