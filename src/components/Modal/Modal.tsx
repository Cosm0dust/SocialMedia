import React, {ReactNode} from 'react';
import styles from './Modal.module.css';
import {IUser} from "../../models/models";


interface ModalProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    children: ReactNode;
    user: IUser
}


const Modal = ({modal,setModal, children, user}: ModalProps)  => {
    return (
        <div className={modal ? styles.modal + ' ' + styles.active : styles.modal} onClick={()=> setModal(false)}>
            <div className={modal ? styles.modal__content + ' ' + styles.active : styles.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;