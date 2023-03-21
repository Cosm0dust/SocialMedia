import React, {useEffect, useState} from 'react';
import s from './Post.module.css'
import Comments from "./Comments/Comments";
import {formatDate, IComment, IPost} from "../../../../../../../models/models";
import {
    useChangeLikesCountMutation, useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostMutation
} from "../../../../../../../store/users.api";
import { useLocation} from 'react-router-dom';
import {log} from "util";

interface PostProps {
    key: number
    id: number;
    comments?: IComment[] | undefined;
    text: string;
    timestamp: string;
    retweets: number;
    likes: number;
    fullName: string
    avatar: string
    post : IPost
    userId: number
    profId: string | undefined
    main: boolean | null
}

const Post = ({key, id, likes, text, retweets, timestamp , comments, fullName, avatar, post, userId, profId, main}: PostProps) => {


    const [liked, setLiked] = useState(false)
    const [tweeted, setTweeted] = useState(false)
    const [editText, setEditText] = useState('')
    const [editing, setEditing] = useState(false)





    const [deletePost] = useDeletePostMutation<IPost>()
    const [updatePost]= useUpdatePostMutation<IPost>()
    const [changeLikeCount] = useChangeLikesCountMutation()
    const [retweetPost] = useCreatePostMutation()

    const handleDeleteClick = () => {
        deletePost(id);
    };

    const handleUpdateClick = () => {
        updatePost({...post,id: id, text: editText, userId: userId});
        setEditing(false)
    };

    const editLikeCount = (num: number) => {
        updatePost({...post, likes: post.likes + num})
        if (liked){
            setLiked(false)
        } else {
            setLiked(true)
        }
    };

    const retweet = () => {
        retweetPost({text:text, userId: 1, name: fullName})
        updatePost({...post, retweets: post.retweets + 1})
        setTweeted(true)
    }

    if(main){
        profId = '1'
    }

    return (
        <div className={(userId === Number(profId))? s.userList : s.show}>
            <div className={s.post}>
                <img src={avatar} alt=""/>
            </div>
            <div>{editing?  <input type="text" value={editText} onChange={event => setEditText(event.target.value)}/> : text}</div>
            <div>
                <span onClick={() => editLikeCount(liked? -1: +1)}>{likes}like</span>
                <span onClick={() => tweeted? '' : retweet()}>{retweets}retweets</span>
                {main &&
                    <div>
                        {
                    editing ? <button onClick={handleUpdateClick}>Save</button> :
                        <button onClick={() => setEditing(true)}>Edit</button>
                }
                    <button onClick={() => handleDeleteClick()}>Delete</button>
                </div>}
            </div>

        </div>
    );
};

export default Post;