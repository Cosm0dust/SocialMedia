import React, {useState} from 'react';
import {RegisterProps} from "./SignsUp";

const Form = () => {
    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                placeholder='email'
            />
            <input
                type="password"
                value={pass}
                onChange={e=> setPass(e.target.value)}
                placeholder='password'
            />
            <button

            >

            </button>
        </div>
    );
};

export default Form;
