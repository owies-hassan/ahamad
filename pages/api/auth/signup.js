



import { hash } from 'bcrypt';
import Users from "../../../Model/User";
import connectMongo from "../../../Lib/dbConnect";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    // if(req.method === 'POST'){
    //
    //     if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
    //     const { username, email, password } = req.body;
    //
    //     // check duplicate users
    //     const checkexisting = await Users.findOne({ email });
    //     if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});
    //
    //     // hash password
    //     Users.create({ username, email, password : await hash(password, 12)}, function(err, data){
    //         if(err) return res.status(404).json({ err });
    //         res.status(201).json({ status : true, user: data})
    //     })
    //
    // } else{
    //     res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    // }

    if (req.method==='POST'){
        const {username,email,password}=req.body;
        if (!username||!email||!password){
             res.status(400).json({mes:'missing filed'})
            return
        }
        const checkerUser=await Users.findOne({email});
        if (checkerUser){
            res.status(404).json({mes:'this email already exist'})
            return
        }

      try {
          const hashPassword=await hash(password,12)
          const createUser=await Users.create({username,email,password:hashPassword})
          res.status(200).json({createUser})
      }catch {
          res.status(404).json({msg:'error post'})

      }

    }

}