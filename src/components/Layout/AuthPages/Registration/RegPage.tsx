import React from 'react';
import SignUp from "./SignUp/SignUp";
import s from './RegPage.module.scss'
import {Link} from "react-router-dom";

const RegPage = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.wrapper__text}>Register</h1>
            <SignUp />
            <p>
                Already have an account, then <Link style={{textDecoration: "none"}} to='/login'><span>sign in</span></Link>?
            </p>
        </div>
    );
};

export default RegPage;