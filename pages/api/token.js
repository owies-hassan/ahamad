
import { getToken } from "next-auth/jwt";
import {getSession} from "next-auth/react";
const secret = 'asdasdasdasdasdas';


    export default async function handler(req, res){

        const token = await getToken({ req, secret })
        console.log("JSON Web Token", token)
}

