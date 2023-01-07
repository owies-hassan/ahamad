



import mongoose from "mongoose";
//
const schema=mongoose.Schema;

const PostUser=new schema({
    title:{type:String,require:true},
    des:{type:String,require:true},
    email:{type:String,require:true}

},{timestamps:true})

const Post=mongoose.models.post || mongoose.model('post',PostUser)
export default Post;

// import { Schema, model, models } from 'mongoose';
//
// const PostUser = new Schema({
//     title:{type:String,require:true},
//     des:{type:String,require:true}
// },{timestamps:true})
//
// const Post = models.post || model('post', PostUser);
//
// export default Post;