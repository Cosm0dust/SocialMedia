import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {errorMessage, IUser} from "../../../../../models/models";
import {useGetUserByIdQuery} from "../../../../../store/users.api";
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
    const [modal, setModal] =useState(false)

    const mainId = useAppSelector(state => state?.auth.id)

    const { data, error, isLoading } = useGetUserByIdQuery(main ? Number(mainId)  : Number(id));
    console.log(`profId : ${mainId}`)

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
                   <Posts  key={data.id}
                           main={main}
                           profId={mainId}
                           paramId={id}
                           avatar={data.avatar}
                           profName={data.fullName}
                   />
                </div>
            }
        </div>
    );
};

export default PersonPage;