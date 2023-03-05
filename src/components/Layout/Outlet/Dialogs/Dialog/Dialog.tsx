import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

interface DialogProps {
    name: string;
    message: string;
    number: number;
}

const Dialog = (props: DialogProps) => {
    return (
        <div className={s.dialog}>

            <NavLink to={`dialogs/${props.number}`}>{props.name}</NavLink>
            <div>{props.message}</div>
        </div>

    );
};

export default Dialog;