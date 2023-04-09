import React, {useState} from 'react';
import {useCreateMessageMutation} from "../../../../../store/users.api";
import {useAppSelector} from "../../../../../hooks/rtk-ts";
import {useParams} from "react-router-dom";
import s from './CreateMassage.module.css'

const CreateMassage = () => {
    const main = useAppSelector(state => state?.auth)
    const {id} = useParams()

    const [text, setText] = useState('')

    const [createMessage] =useCreateMessageMutation()

    const handleMessage = () => {
        if(text){
            createMessage({
                text: text,
                to: id,
                userId: Number(main.id),
                senderName: main?.email,
            })

        }

        setText('')
    }

    return (
        <div className={s.createMessage}>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
            <button onClick={() => handleMessage()}>Create message</button>
        </div>
    );
};

export default CreateMassage;