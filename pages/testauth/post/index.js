



import {getPosts} from "../../../utils/Utils";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";
import axios from "axios";
import {useState} from "react";
import UpdatePost from "../../../Compontents/UpdatePost";
import ListPosts from "../../../Compontents/ListPosts";

const Post = ({data}) => {
    const[clientController,setClientController]=useState(data)

    console.log(clientController)
    const router=useRouter()
    const reFetch=async ()=>{
        const {data}=await axios({
            method:'GET',
            url:'http://localhost:3000/api/post'
        })
        setClientController(data)
    }
    const handleDetails=(item)=>{
        router.push(`/testauth/post/${item}`)

    }
    const handleDelete = async (_id) => {
        await axios({
            method: 'DELETE',
            url: `/api/post/${_id}`
        })
        // return router.push('/testauth/post')

        return reFetch()

    }

    return (
        <div>
            <p>hello</p>
            {clientController&&clientController.map(item=>{
                return(
                    <div key={item._id}>
                        <ListPosts reFetch={reFetch}  item={item} handleDetails={handleDetails} handleDelete={handleDelete}  />
                    </div>
                )
            })}

        </div>
    );
};

export default Post



export async function getServerSideProps(context) {

    const session=await getSession(context)
    if (!session){
        return {
            redirect:{
                destination:'api/auth/signin?callback=http://localhost/testauth/getposts',
                permanent:false
            }
        }
    }

    else{
        const data= await getPosts()

        return{
            props:{
                session,
                data,
            }
        }
    }
}


