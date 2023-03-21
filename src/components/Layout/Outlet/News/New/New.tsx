import React from 'react';
import {IComment} from "../../../../../models/models";
import s from "../../People/PersonPage/Posts/Post/Post.module.css";
import Comments from "../../People/PersonPage/Posts/Post/Comments/Comments";


interface NewProps{
    title: string
}

const New = ({title} : NewProps) => {
    return (
        <div className={s.userList}>
            {title}
        </div>
    );
};

export default New;