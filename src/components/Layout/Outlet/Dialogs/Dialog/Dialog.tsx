import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>

            <NavLink to={`dialogs/${props.number}`}>{props.name}</NavLink>
            <div>{props.message}</div>
        </div>

    );
};

export default Dialog;