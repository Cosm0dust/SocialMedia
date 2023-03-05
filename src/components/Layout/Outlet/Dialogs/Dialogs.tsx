import React from 'react';
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            Dialogs
           <Dialog number ={1} name = 'V' message='Hello'/>
           <Dialog number ={2} name = 'f' message='fello'/>
           <Dialog number ={3} name = 'c' message='cello'/>
        </div>
    );
};

export default Dialogs;