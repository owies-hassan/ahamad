import React, {useState} from 'react';
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
import Link from "next/link";

const Login = () => {
    const [show, setShow] = useState(false)
    const [authState, setAuthState] = useState({

        email:'',
        password: ''
    })

    const router = useRouter()
    const handleAuth=async (e)=>{
               e.preventDefault()
        const status = await signIn('credentials', {
            redirect: false,
            email: authState.email,
            password: authState.password,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)

    }
    const handleFieldChange=(e)=>{
        setAuthState(old => ({ ...old, [e.target.name]: e.target.value }))

    }

    return (
        <div>
            <form onSubmit={handleAuth}>
                <input onChange={handleFieldChange} name='email' type='email'  value={authState.email} placeholder='email'/>
                <input onChange={handleFieldChange} name='password' type='password' value={authState.password} placeholder='password'/>
                <button  type='submit'>submit</button>
            </form>
            <Link href='/testauth/register'>register</Link>

        </div>
    );
};

export default Login;