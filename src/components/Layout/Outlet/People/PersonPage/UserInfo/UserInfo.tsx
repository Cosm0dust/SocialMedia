import React, {useState} from 'react';
import s from './UserInfo.module.css';
import {IUser} from "../../../../../../models/models";
import styles from "../../../Profile/Profile.module.css";

interface PostsProps {
    user: IUser
    setModal: (modal: boolean) => void;
    main: boolean | null
}

const Posts = ({user, setModal, main}: PostsProps) => {


    return (
        <div className={styles.profileInfo}>
            <div className={styles.ava}>
                <img src={user.avatar} alt={user.fullName}/>
            </div>
            <div className={styles.personInfo}>
                <h1>{user.fullName}</h1>
                {main && <button onClick={(event: React.MouseEvent<HTMLButtonElement>) => setModal(true)}>Edit</button>}
                <p>{user.quote}</p>
                <div className={styles.info}>
                    <h2>Information:</h2>
                    <p>Age: {user.age}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>City: {user.city}</p>
                    <p>Intrests: <span>{user.interests?.join(', ')}</span></p>
                    <p>Bio information: {user.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default Posts;