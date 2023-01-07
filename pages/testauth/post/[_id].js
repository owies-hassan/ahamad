import React from 'react';
import axios from "axios";

const DetailsUser = ({data}) => {
    console.log(data)
    return (
        <div>
             <p>{data.title}</p>
            <p>{data.des}</p>
            <p>{data._id}</p>
        </div>
    );
};

export default DetailsUser;

export const getServerSideProps=async (context)=>{
       const {params}=context

    const {data}=await axios({
        method:'GET',
        url:`http://localhost:3000/api/post/${params._id}`
    })
    return {
           props:{data}
    }


}