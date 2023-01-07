
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import clientPromise from "../../../Lib/mongodb";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";

import { compare } from "bcrypt";
import connectMongo from "../../../Lib/dbConnect";
import Users from "../../../Model/User";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId:process.env.clientId,
            clientSecret:process.env.clientSecret,
        }),
        Credentials({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongo().catch(error => { error: "Connection Failed...!"})

                // check user existance
                const result = await Users.findOne( { email : credentials.email})

                if(!result){
                    throw new Error("No user Found with Email Please Sign Up...!")
                }

                // compare()
                const checkPassword = await compare(credentials.password, result.password);

                // incorrect password
                if(!checkPassword || result.email !== credentials.email){
                    throw new Error("Username or Password doesn't match");
                }

                return result;

            }
        })

    ],



    adapter: MongoDBAdapter(clientPromise),
    jwt: {
        secret:'asdasdasdasdasdas',
        encryption: true,
    },
    secret:'asdasdasdasdasdas',

   session:{
     strategy:'jwt'
   },

    callbacks: {
        async redirect({ url, baseUrl }) {
            return Promise.resolve(url);
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        },
        async session({ session, user, token }) {
            return session;
        },
    },
})