import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import axios, {Axios} from "axios";

const Register = () => {
    const [authState, setAuthState] = useState({
        username: '',
        email:'',
        password: '',
    })
    const [error,setError]=useState('')
    const router = useRouter()

    const handleFieldChange=(e)=>{
        setAuthState(old => ({ ...old, [e.target.name]: e.target.value }))

    }
    const handleAuth=async(e) =>{
e.preventDefault()




        try {
            const {data} = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/auth/signup',
                data: authState,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            return data;
        } catch (err) {
            setError(err.response.data.mes)
        }

        // await axios('http://localhost:3000/api/auth/signup', options)
        //     .then(res => res.json())
        //     .catch(err=> console.log())

    }
    return (
        <div>
            <form onSubmit={handleAuth}>
                <input onChange={handleFieldChange} name='username' type='text' value={authState.username} placeholder='username'/>
                <input onChange={handleFieldChange} name='email' type='email'  value={authState.email} placeholder='email'/>
                <input onChange={handleFieldChange} name='password' type='password' value={authState.password} placeholder='password'/>

                <button  type='submit'>submit</button>
            </form>
            <p>{error&&error}</p>
            <Link href='/testauth/login'>login</Link>
        </div>
    );
};

export default Register;