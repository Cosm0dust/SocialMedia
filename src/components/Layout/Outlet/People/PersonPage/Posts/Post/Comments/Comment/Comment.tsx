import React from 'react';
import s from './Comment.module.css'

interface CommentProps {
    key: number;
    id: number;
    user: string;
    handle: string;
    text: string;
    timestamp: string
    fullname: string;
}

const Comment = ({key, id, user, handle,text, fullname, timestamp}: CommentProps) => {
    return (
        <div className={s.userList}>
            <div>{fullname}</div>
            <div>{text}</div>
            <div>{user}</div>
        </div>
    );
};

export default Comment;