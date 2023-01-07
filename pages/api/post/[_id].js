import React from 'react';
import connectMongo from "../../../Lib/dbConnect";
import Post from "../../../Model/Post";


export const handle = async (req, res) => {






  if (req.method==='GET'){
       await connectMongo()
       const {_id}=req.query;
       const post=await Post.findOne({_id});

       res.status(200).json(post)
  }
  else if (req.method==='DELETE'){
      await connectMongo()
      const {_id}=req.query;
      const post=await Post.findOneAndRemove(_id);
      res.status(200).json(post)
  }
  else if (req.method==='PATCH'){
      await connectMongo()
      const {_id}=req.query;

      const post=await Post.findByIdAndUpdate(_id,{...req.body});
      res.status(200).json(post)
  }



}

export default handle