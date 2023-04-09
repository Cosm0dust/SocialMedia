import React from 'react';
import s from "./DialogNav.module.css";
import {IMessage, IUser} from "../../../../../models/models";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../../../hooks/rtk-ts";
import { useGetUsersQuery} from "../../../../../store/users.api";

const DialogNav = () => {

    const mainId = useAppSelector(state => state?.auth.id)

    const { data, error, isLoading } = useGetUsersQuery(Number(mainId));



    return (
        <ul className={s.nav}>
            {data && (data as unknown as Array<IUser>)?.map((user: IUser) => (
                <NavLink className={({isActive}) => isActive ? s.active : s.item} key={user.id} to={user.id.toString()}>{user.email}</NavLink>
            )) }
        </ul>
    );
};

export default DialogNav;