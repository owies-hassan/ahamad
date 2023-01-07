// import axios from "axios";


// export const getPosts=async ()=>{
//
//     const res=await axios.get('http://localhost:3000/api/post')
//     if (res.status!==200){
//         console.log('error')
//     }
//     const data=await res.data
//
//     return data
// }

import axios from "axios";


export const getPosts=async ()=>{
    const {data}=await axios({
        method:'GET',
        url:'http://localhost:3000/api/post'
    })
    return data
}
export const getPostUserId=async (context)=>{
    const {data}=await axios({
        method:'GET',
        url:'http://localhost:3000/api/post/postid/'
    })
    return data
}


export const getPostId = async (email) => {
    const {data} = await axios({
        method: 'GET',
        url: `http://localhost:3000/api/post/${email}`
    })
    return data
}