import React, {useState} from 'react';
import styles from './UserInfo.module.css';
import {IUser} from "../../../../../../models/models";
import Button1 from "../../../../../../UIelems/Button1/Button1";

interface UserInfoProps {
    user: IUser
    setModal: (modal: boolean) => void;
    main: boolean | null
}

const UserInfo = ({user, setModal, main}: UserInfoProps) => {


    return (
        <div className={styles.profileInfo}>
            <div className={styles.ava}>
                <img src={user.avatar} alt={user.fullName}/>
            </div>
            <div className={styles.personInfo}>
                <div className={styles.personInfo__header}>
                    <h1>{user.fullName}</h1>
                    {main &&
                        <Button1 text={'Edit'} onClick={(event: React.MouseEvent<HTMLButtonElement>) => setModal(true)}/>}
                </div>
                <div className={styles.personInfo__quote}>{user.quote}</div>
                <div className={styles.personInfo__info}>
                    <h2>Information:</h2>
                    <p>Age: {user.age}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>City: {user.city}</p>
                    <p>Intrests: <span>{user.interests?.join(', ')}</span></p>
                    <p className={styles.bio}>Bio information: {user.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;