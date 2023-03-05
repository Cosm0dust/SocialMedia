import React, {useEffect, useState} from 'react';
import s from './Post.module.css'
import Comments from "./Comments/Comments";
import {formatDate, IComment, IPost} from "../../../../../../../models/models";
import {useDeletePostMutation, useUpdateUserMutation} from "../../../../../../../store/users.api";
import { useLocation} from 'react-router-dom';

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
}

const Post = ({key, id, likes, text, retweets, timestamp , comments, fullName, avatar, post, userId, profId}: PostProps) => {



    const [editText, setEditText] = useState('')
    const [editing, setEditing] = useState(false)
    const location = useLocation()



    const [deletePost] = useDeletePostMutation<IPost>()
    const [updatePost]= useUpdateUserMutation<IPost>()


    const handleDeleteClick = () => {
        deletePost(id);
    };

    const handleUpdateClick = () => {
        updatePost({id: id, text: editText, userId: userId});
        setEditing(false)
    };

    if(location.pathname === '/profile' || location.pathname === '/'){
        profId = '1'
    }

    return (
        <div className={(userId === Number(profId))? s.userList : s.show}>
            <div className={s.post}>
                <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000" alt=""/>
            </div>
            <div>{editing?  <input type="text" value={editText} onChange={event => setEditText(event.target.value)}/> : text}</div>
            <div>
                <span>{likes}like</span>
                <span>{retweets}retweets</span>
                {
                    editing ?  <button onClick={handleUpdateClick} >Save</button> : <button onClick={() =>setEditing(true)}>Edit</button>
                }
                <button onClick={()=> handleDeleteClick()}>Delete</button>
            </div>

        </div>
    );
};

export default Post;