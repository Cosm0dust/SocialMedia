import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (

        <div className = 'header'>
            <div className={styles.head}>
                <div className={styles.text}> TeamJob</div>
            </div>
        </div>
    );
};

export default Header;