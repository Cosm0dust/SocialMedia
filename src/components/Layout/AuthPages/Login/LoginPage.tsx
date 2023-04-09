import React from 'react';
import {Link} from "react-router-dom";
import Login from "./Login/Login";
import s from './LoginPage.module.css'

const LoginPage = () => {



    return (
        <div className={s.wrapper}>
            <h1 className={s.wrapper__text}>Sign in</h1>
            <Login />
            <p>
               If you don`t have an account <Link style={{textDecoration: "none"}} to='/register'><span>register</span></Link>.
            </p>
        </div>
    );
};

export default LoginPage;