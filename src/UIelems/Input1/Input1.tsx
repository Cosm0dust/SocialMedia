import React, { FC, ChangeEventHandler } from 'react';
import s from './Input1.module.css';

interface Input1Props {
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input1: FC<Input1Props> = ({placeholder, value, onChange}) => {
    return (
        <>
            <input className={s.textInput} type="text" placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    );
};

export default Input1;