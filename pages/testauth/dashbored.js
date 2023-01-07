import React from 'react';
import {useSession} from "next-auth/react";

const Dashbored = () => {
    const {data:session,status}=useSession();

    return (
        <div>
            {session?.user.name}Dashbored
        </div>
    );
};

export default Dashbored;