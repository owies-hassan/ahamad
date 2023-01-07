import React, {useState} from 'react';
import axios from "axios";
import {useSession} from "next-auth/react";

const AddPosts = () => {
    const [val,setVal]=useState({title:'',des:''})
    const {data:session,status}=useSession()
    const handleChange=(e)=>{
        setVal(old=>({...old,[e.target.name]:e.target.value}))
    }
    const onSubmit=async (e)=>{
        e.preventDefault()
      try {
          const {data}= await axios({
              method:'POST',
              url:'/api/post',
              data: {...val,email:session.user.email},
              headers: {
                  'Content-Type': 'application/json',

              }
          })
          return data
      }catch (err){
            console.log('err')
      }

    }
    return (
        <div>
           <form onSubmit={onSubmit}>
               <input onChange={handleChange} type='text' name='title' value={val.title} placeholder='your title'/>
               <input onChange={handleChange} type='text' name='des' value={val.des} placeholder='your des'/>
               <button type='submit'>submit</button>
           </form>

        </div>
    );
};

export default AddPosts;