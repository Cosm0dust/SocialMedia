import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {errorMessage, IUser} from "../../../../../models/models";
import {useGetUserByIdQuery} from "../../../../../store/users.api";
import styles from './PersonPage.module.css'
import Posts from "./Posts/Posts";
import UserInfo from "./UserInfo/UserInfo";
import Modal from "../../../../Modal/Modal";
import EditProfile from "./EditProfile/EditProfile";
import {useAppSelector} from "../../../../../hooks/rtk-ts";

interface PersonPageProps{
    main: boolean | null
}

const PersonPage = ({main}: PersonPageProps) => {
    const {id} = useParams<{ id: string }>()
    const location = useLocation()
    const [mainPage, setMainPage] =useState(false)
    const [modal, setModal] =useState(false)

    const mainId = useAppSelector(state => state?.auth.id)

    const { data, error, isLoading } = useGetUserByIdQuery(main ? Number(mainId)  : Number(id));


    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {errorMessage(error)}</p>}
            {data &&
                <div>
                    <UserInfo main={main} user={data as IUser} setModal={setModal} />
                    { main && <Modal  user={data} modal={modal} setModal={setModal}>
                        <EditProfile user={data} setModal={setModal}/>
                    </Modal>}
                   <Posts main={main} profId={id} avatar={data.avatar} fullName={data.fullName} key={data.id}/>
                </div>
            }
        </div>
    );
};

export default PersonPage;