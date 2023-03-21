import React from 'react';
import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useAppDispatch} from "../../../../hooks/rtk-ts";
import Form from "./Form";
import {setUser} from "../../../../store/slices/userSlice";
import {UserCredential} from "@firebase/auth";
import {useLocation, useNavigate} from "react-router-dom";

export interface RegisterProps {
    email: string;
    password: string;
};


const SignsUp = () => {
   

    return (
            <></>
    );
};

export default SignsUp;
