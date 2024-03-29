import React from 'react';
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.css'
import DialogNav from "./DialogNav/DialogNav";
import CreateMassage from "./CreateMessage/CreateMassage";


const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__nav} >
                <DialogNav/>
            </div>
            <div className={s.dialogs__place}>
                <div className={s.dialogs__place_field}>
                    <CreateMassage/>
                </div>
                <div className={s.dialogs__place_dialog}><Dialog/></div>

            </div>
        </div>
    );
};

export default Dialogs;