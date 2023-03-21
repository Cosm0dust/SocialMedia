import React, {useState} from 'react';
import PersonPage from "../People/PersonPage/PersonPage";
import {useAppSelector} from "../../../../hooks/rtk-ts";

interface ProfileProps {
    isAuth: boolean
}

const Profile = ({isAuth}: ProfileProps) => {

    const [mainPage, setMainPage] = useState(true)
    console.log(isAuth)

    return (
        <div>
           <PersonPage main={mainPage} />
        </div>
    );
};

export default Profile;