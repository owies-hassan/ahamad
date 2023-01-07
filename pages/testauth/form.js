import React, {useState} from 'react';
import {signIn} from "next-auth/react";

import {useRouter} from "next/router";

const Form = () => {
    const router =  useRouter()
    const [authState, setAuthState] = useState({
        username: '',
        email:'',
        password: ''
    })
    const handleAuth = async (e) => {
            e.preventDefault()
        signIn('credentials', {
            ...authState,
            redirect: false
        }).then(response => {
            console.log(response)
            if (response.ok) {
                // Authenticate user
                router.push("/")
            }
        }).catch(error => {
            console.log(error)
        })

    }

    const handleFieldChange = (e) => {
        setAuthState(old => ({ ...old, [e.target.name]: e.target.value }))
    }

    const simplifyError = (error) => {
        const errorMap = {
            "CredentialsSignin": "Invalid username or password"
        }
        return errorMap[error] ?? "Unknown error occurred"
    }

    return (
        <div>
<form onSubmit={handleAuth}>
    <input onChange={handleFieldChange} name='username' type='text' value={authState.username} placeholder='username'/>
    <input onChange={handleFieldChange} name='email' type='email'  value={authState.email} placeholder='email'/>
    <input onChange={handleFieldChange} name='password' type='password' value={authState.password} placeholder='password'/>
    <button  type='submit'>submit</button>
</form>
        </div>
    );
};

export default Form;