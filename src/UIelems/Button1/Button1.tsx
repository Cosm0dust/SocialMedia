import React, { FC, MouseEvent } from 'react';
import s from './Button1.module.css';

interface Button1Props {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void | undefined;
    text: string;
}

const Button1: FC<Button1Props> = ({ onClick, text }) => {
    return (
        <div>
            <button onClick={onClick} className={s.button1}>
                {text}
            </button>
        </div>
    );
};

export default Button1;