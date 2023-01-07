import React from 'react';
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import style from '../styles/Layout.module.css'
const Layout = () => {

    const {data: session, status} = useSession()


    return (
        <div className={style.flex}>

            <Link className={style.link} href='/testauth'>Home</Link>
            <Link className={style.link} href='testauth/blog'>Blog</Link>
            <Link className={style.link} href='/testauth/dashbored'>dashbored</Link>
            <Link className={style.link} href='/testauth/contact'>contact</Link>
            <Link className={style.link} href='/testauth/post'>post</Link>
            <Link className={style.link} href='/testauth/addposts'>addpost</Link>
            <Link className={style.link} href='/testauth/postuser'>postuser</Link>

            <Link className={style.link} href='/testauth/register'>register</Link>
            <Link className={style.link} href='/testauth/login'>login</Link>

            {session ?
                <Link className={style.link} href='/api/auth/signout'><p onClick={e => {
                    e.preventDefault()
                    signOut()
                }
                }>signout Github</p></Link>
                : <Link className={style.link} href='/api/auth/signin'><p onClick={e => {
                    e.preventDefault()

                    signIn('github')
                }
                }>signin Github</p></Link>}



               <p>{session?.user?.name}/{session?.user?.email}</p>

        </div>
    );
};

export default Layout;