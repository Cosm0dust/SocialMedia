import React from 'react';
import {IComment} from "../../../../../models/models";
import s from "../../People/PersonPage/Posts/Post/Post.module.css";
import Comments from "../../People/PersonPage/Posts/Post/Comments/Comments";

interface PostProps {
    key: number
    id: number;
    comments: IComment[] | undefined;
    text: string;
    timestamp: string;
    retweets: number;
    likes: number;

}

const New = ({key, id, likes, text, retweets, timestamp }: PostProps) => {
    return (
        <div className={s.userList}>
            <div className={s.post}>
                <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000" alt=""/>
            </div>
            <div>{text}</div>
            <div>
                <span>{likes}like</span>
                <span>{retweets}retweets</span>
                <button >Delete</button>
            </div>
            <div className={s.comments}>

            </div>
        </div>
    );
};

export default New;