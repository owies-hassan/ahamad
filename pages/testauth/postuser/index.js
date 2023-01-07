import React, {useEffect, useState} from 'react';

import axios from "axios";
import {getPostUserId} from "../../../utils/Utils";
import {getSession} from "next-auth/react";

const p = ({data}) => {

console.log(data)


    return (
        <div>
        <p>hello post id</p>
        </div>
    );
};

export default p;




export const getServerSideProps=async (context)=>{

    // const session=await getSession(context)

        const {data}= await axios.get('http://localhost:3000/api/post/postid')

        return {
            props: {
                data
            },
        }

}


