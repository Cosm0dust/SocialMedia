import React from 'react';
import s from './Post.module.css'

interface PostProps {
    key: number
    id: number;
    comments: Comment[];
    text: string;
    timestamp: Date;
    retweets: number;
    likes: number;
    fullName: string
    avatar: string
}

const Post = ({key, id, likes, text, retweets, timestamp , comments, fullName, avatar}: PostProps) => {
    return (
        <div className={s.userList}>
            <div className={s.post}>
                <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000" alt=""/>
            </div>
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

export default Post;