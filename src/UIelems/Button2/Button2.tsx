import React, { FC, MouseEvent } from 'react';
import s from './Button2.module.css';

interface Button2Props {
    onClick: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
    text: string;
}

const Button2: FC<Button2Props> = ({ onClick, text }) => {
    return (

            <button onClick={onClick} className={s.button2}>
                {text}
            </button>

    );
};

export default Button2;