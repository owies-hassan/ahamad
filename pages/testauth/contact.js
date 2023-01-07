import React from 'react';
import {getSession, useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import {useRouter} from "next/router";


const Contact = ({dataUser}) => {
    const {data:session} = useSession()
    return (
        <div>
            <p>{dataUser}</p>
            <p> {session ? session.user.name : 'nasdasd sadsa das da das dasdas das asd sad sad as dsad as das aso'}</p>
        </div>
    );
};

export default Contact;


export const getServerSideProps=async (context)=>{
    const session= await getSession(context)

    if (!session) {


        return {
           redirect:{
               destination:'/api/auth/signin?callbackUrl:http//:localhost/testauth/contact',
               permanent:true,
           }
       }

    }
        return{
            props:{dataUser:session?session.user.name:'no data',session}
        }


}