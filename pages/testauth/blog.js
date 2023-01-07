import React, {useEffect} from 'react';
import {useSession,getSession,signIn} from "next-auth/react";
import {useRouter} from "next/router";

const Blog = () => {
    const router=useRouter()
    const {data:session,status}=useSession();

    // if (status==='loading'){
    //     return (
    //         <h1>loading</h1>
    //     )
    // }
    useEffect(()=>{
        const securePages=async ()=>{
            const session=await getSession()
            if (!session){
                signIn()
                // router.push('/api/auth/signin')

            }
            console.log(session)
        }
        securePages()
    },[])
    return (
        <div>
            you already sign in
            {/*{session?'hello from page blog':'you have to login'}*/}
        </div>
    );
};

export default Blog;