import React from 'react';
import {useRouter} from "next/router";
const RouteFour = () => {
    const router=useRouter()

    const {routetwo,routethree,routefout}=router.query
    return (
        <div>
            <p>routetwo{routetwo}</p>
            <p>routethree{routethree}</p>
            <p>routefout{routefout}</p>
        </div>
    );
};

    export default RouteFour;