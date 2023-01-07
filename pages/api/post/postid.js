import connectMongo from "../../../Lib/dbConnect";
import Post from "../../../Model/Post";
import {getSession} from "next-auth/react";
import {getToken} from "next-auth/jwt";
import {unstable_getServerSession} from "next-auth";

const secret = 'asdasdasdasdasdas';


export const handle = async (req, res) => {


       const token = await getToken({ req, secret })
       console.log("JSON Web Token", token)


    //     if (req.method==='GET'){
    //         await connectMongo()
    //         console.log("JSON Web Token", token)
    //         const email={email:'session.user.email'}
    //         const post=await Post.find(email)
    //         res.status(200).status(email)
    //         console.log(email)
    //         console.log(post)
    // }
}


export default handle;