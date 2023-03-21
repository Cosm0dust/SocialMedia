import React from 'react';
import {useAppDispatch} from "../../../../hooks/rtk-ts";
import {useNavigate} from "react-router-dom";

const Fake = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    /*const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}: UserCredential) => {
                console.log(user)
                dispatch(setUser({
                    email: user?.email,
                    id: user?.uid,
                    token: user?.refreshToken
                }))
                navigate('/')
            })
            .catch(console.error)
    }*/

    /* const dispatch = useAppDispatch()
    const navigate = useNavigate()*/

    /*const auth = getAuth()
    const handleRegister = (email: string, password: string ) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}: UserCredential) => {
                console.log(user)
                dispatch(setUser({
                email: user?.email,
                id: user?.uid,
                token: user?.refreshToken
            }))
                     })
            .catch(console.error)
    }*/
    return (
        <div>

        </div>
    );
};

export default Fake;