import React, {useState} from 'react';
import UpdatePost from "./UpdatePost";

const ListPosts = ({item,handleDelete,handleDetails,reFetch}) => {
    const[btnUpdate,setBtnUpdate]=useState(false)

    const toggleForm=async ()=>{
        setBtnUpdate(!btnUpdate)
    }

    return (
        <div>
            <p  onClick={()=>handleDetails(item._id)}>{item.title}</p>
            <p>{item.des}</p>
            <p>{item.email}</p>
            <button onClick={()=>handleDelete(item._id)}>delete</button>
            <button onClick={toggleForm}>update</button>
            {btnUpdate&&<UpdatePost reFetch={reFetch} data={item} toggleForm={toggleForm}/>}
        </div>
    );
};

export default ListPosts;