import React, {useState} from 'react';
import styles from './Profile.module.css'
import Posts from "./Posts/Posts";
import InputField from "./InputField/InputField";
import {useDispatch} from "react-redux";
import {createPost} from "../../../../store/profileSlice";

const Profile = () => {
    const [postText, setPostText] =useState('')
    const dispatch = useDispatch()

    const makePost = () =>{
        dispatch(createPost(postText))
        setPostText('')
    }

    return (
        <div>
            <div className={styles.content}>
                <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"
                     alt="text"/>
            </div>
            <div className={styles.ava}>
                <img src="https://i.pinimg.com/originals/93/1b/4a/931b4af252790dca3a868768ac73d730.jpg" alt=""/>
                <div className={styles.status}>
                        Status
                </div>
                <div className={styles.persinform}>
                       Information
                </div>
            </div>

            <InputField text={postText} setText={setPostText} makePost={makePost}/>
            <Posts  />

        </div>
    );
};

export default Profile;