import React, {useState} from 'react';
import PersonPage from "../People/PersonPage/PersonPage";



const Profile = () => {

    const [mainPage, setMainPage] = useState(true)

    return (
           <PersonPage main={mainPage} />
    );
};

export default Profile;