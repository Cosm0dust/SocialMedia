import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {errorMessage, IUser} from "../../../../../models/models";
import {useGetUserByIdQuery} from "../../../../../store/users.api";
import styles from './PersonPage.module.css'
import Posts from "./Posts/Posts";

const PersonPage = () => {
    const {id} = useParams<{ id: string }>()
    const [user, setUser] = useState<IUser | undefined>();

    const { data, error, isLoading } = useGetUserByIdQuery(Number(id));


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
                   <Posts profId={id} avatar={user.avatar} fullName={user.fullName} key={user.id}  />
                </div>
            }
        </div>
    );
};

export default PersonPage;