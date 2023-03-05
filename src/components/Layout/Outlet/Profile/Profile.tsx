import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './Profile.module.css'
import {errorMessage, IUser} from "../../../../models/models";
import Posts from "../People/PersonPage/Posts/Posts";
import {useGetProfileQuery} from "../../../../store/users.api";


const PersonPage = () => {
    const {id} = useParams<{ id: string }>()
    const [user, setUser] = useState<IUser | undefined>();

    const { data, error, isLoading } = useGetProfileQuery();


    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);


    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {errorMessage(error)}</p>}
            {user &&
                <div>
                    <div className={styles.profileInfo}>
                        <div className={styles.ava}>
                            <img src={user.avatar} alt={user.fullName}/>
                        </div>
                        <div className={styles.personInfo}>
                            <h1>{user.fullName}</h1>
                            <p>{user.quote}</p>
                            <div className={styles.info}>
                                <h2>Information:</h2>
                                <p>Age: {user.age}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>City: {user.city}</p>
                                <p>Intrests: {user.interests.map(item => <span>{item}, </span>)}</p>
                                <p>Bio information: {user.bio}</p>
                            </div>
                        </div>
                    </div>
                    <Posts profId={id} avatar={user.avatar} fullName={user.fullName} key={user.id} />
                </div>
            }
        </div>
    );
};

export default PersonPage;