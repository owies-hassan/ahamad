import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const UpdatePost = ({data,toggleForm,reFetch}) => {
    const router=useRouter()
    const [val,setVal]=useState({title:'',des:''})
    const handleChange=(e)=>{
        setVal(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = async () => {
        toggleForm()
        let title = val.title ? val.title : data.title
        let des = val.des ? val.des : data.des
        await axios({
            method: 'PATCH',
            url: `/api/post/${data._id}`,
            data: {title, des}

        }).then((result)=>{result.status===200&&reFetch()})

    }
    return (
        <div>
            <input type='text'name='title' placeholder='title' onChange={handleChange} value={val.title?val.title:data.title}/>
            <input type='text' name='des' placeholder='des' onChange={handleChange} value={val.des?val.des:data.des}/>
              <button onClick={handleSubmit}>submit</button>
        </div>
    );
};

export default UpdatePost;