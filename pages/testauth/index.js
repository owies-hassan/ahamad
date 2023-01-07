import React from 'react';
import {getProviders, useSession} from "next-auth/react";

const TestAuth = () => {
        const {data:session,status}=useSession()
console.log(session)
    return (
        <div>
           <p>hello</p>
        </div>
    );
};

export default TestAuth;
export async function getServerSideProps(context) {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}