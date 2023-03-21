import React from 'react';
import s from './Dialog.module.css'
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../../../../hooks/rtk-ts";
import {useGetMessagesQuery, useGetSendersQuery} from "../../../../../store/users.api";
import {IMessage} from "../../../../../models/models";


const Dialog = () => {

    const mainId = useAppSelector(state => state?.auth.id)

    const {id} = useParams()
    const {
        data: messagesSentToRecipient,
        isLoading: isLoadingSentToRecipient,
        error: errorSentToRecipient
    } = useGetMessagesQuery({ receiver: Number(id), sender: mainId });
    const {
        data: messagesSentToMainId,
        isLoading: isLoadingSentToMainId,
        error: errorSentToMainId
    } = useGetMessagesQuery({ receiver: Number(mainId), sender: id });

    const collectedMessages= [...(messagesSentToRecipient || []), ...(messagesSentToMainId || [])]

    console.log(collectedMessages)


    const compareMessages = (a: IMessage, b: IMessage) => {
        return a.timestamp - b.timestamp;
    };

    return (
        <div>
            <ul className={s.userList}>
                {   collectedMessages
                    ?.sort(compareMessages)
                    ?.map((message: IMessage) => (
                    <div style={message.userId === Number(mainId)? {color: 'red'}: {color: 'blue'}}>{message.text}</div>
                )) }
            </ul>
        </div>

    );
};

export default Dialog;