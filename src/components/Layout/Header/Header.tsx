import React from 'react';
import styles from './Header.module.css'
import {useAppDispatch} from "../../../hooks/rtk-ts";
import {logout} from "../../../store/slices/userSlice";

const Header = () => {
    const dispatch = useAppDispatch()

    return (

        <div className = 'header'>
            <div className={styles.head}>
                <div className={styles.text}> TeamJob</div>
                <button onClick={()=> dispatch(logout())}>logOut</button>
            </div>
        </div>
    );
};

export default Header;