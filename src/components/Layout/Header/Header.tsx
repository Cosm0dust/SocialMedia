import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch} from "../../../hooks/rtk-ts";
import {logout} from "../../../store/slices/userSlice";
import {useAuth} from "../../../hooks/use-auth";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {isAuth}= useAuth()
    const navigate =useNavigate()
    const dispatch = useAppDispatch()

    return (

        <div className = 'header'>
            <div className={styles.head}>
                <div className={styles.text}> SocialMe</div>
                {isAuth ? <button className={styles.logButton} onClick={() => dispatch(logout())}>Sign out</button>: <button onClick={()=> navigate('/login')} className={styles.logButton}>Sign in</button>}
            </div>
        </div>
    );
};

export default Header;