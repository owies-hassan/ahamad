import connectMongo from "../../../Lib/dbConnect";

import Post from '../../../Model/Post'

const handle = async (req, res) => {
    connectMongo().catch(err => console.log('error connect'))



        if (req.method === 'POST') {
            connectMongo().catch(err => console.log('error connect'))
            const {title,des,email}=req.body;

            if (!title || !des){
                res.status(404).json({mes:'missing field'})
                return;
            }
            try {
                const post=await Post.create({title,des,email})
                res.status(200).json({post})

            }catch {
                res.status(401).json({msg:'error can not post data'})
                console.log('err can not post')
            }

        }
        else if (req.method === 'GET'){

            try {
                const post=await Post.find({})
                res.status(200).json(post)

            }catch (err){
                console.log(err)
            }
        }




}
export default handle;
