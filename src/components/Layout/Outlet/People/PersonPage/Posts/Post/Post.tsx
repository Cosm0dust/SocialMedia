import React, {useEffect, useState} from 'react';
import s from './Post.module.css'
import {formatDate, IComment, IPost} from "../../../../../../../models/models";
import {
    useChangeLikesCountMutation, useCreatePostMutation,
    useDeletePostMutation,
    useUpdatePostMutation
} from "../../../../../../../store/users.api";
import Input1 from "../../../../../../../UIelems/Input1/Input1";

interface PostProps {
    id: number;
    comments?: IComment[] | undefined;
    text: string;
    timestamp: string;
    retweets: number;
    likes: number;
    profName?: string
    retweetedFrom?: string;
    avatar: string
    post : IPost
    userId: number
    profId: string| null | undefined
    main: boolean | null;
    paramId: string| undefined;
}

const Post = ({ id, likes, text, retweets, paramId, timestamp ,retweetedFrom,  profName, avatar, post, userId, profId, main}: PostProps) => {


    const [liked, setLiked] = useState(false)
    const [editText, setEditText] = useState('')
    const [editing, setEditing] = useState(false)
    const [profNum, setProfNum]= useState(Number(profId))





    const [deletePost] = useDeletePostMutation<IPost>()
    const [updatePost]= useUpdatePostMutation<IPost>()
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
        retweetPost({text:text, userId: Number(profId)})
        updatePost({...post, retweets: post.retweets + 1})

    }

    useEffect(()=>{
        paramId? setProfNum(Number(paramId)) : setProfNum(Number(profId))
    }, [paramId])


    return (
        <div className={((userId ===  profNum))? s.userList : s.show}>

            <div className={s.imgWrapper}>
                <img src={avatar} alt=""/>
            </div>


            <div className={s.postText}>
                <div className={s.postText__fullName}>
                    <h2>{profName}</h2>
                    {main &&

                        <div  className={s.activeButtons}>
                            <button className={s.e_button} onClick={editing ? handleUpdateClick : () => setEditing(true)}>
                                {editing ? 'Save' : 'Edit'}
                            </button>
                            <button className={s.d_button} onClick={() => handleDeleteClick()}>
                                Delete
                            </button>
                        </div>

                    }
                </div>

                <div className={s.postText__text}>
                    {editing ?
                        <input className={s.textInput} placeholder={'Edit post...'} value={editText}
                                onChange={event => setEditText(event.target.value)}/> : text}
                </div>

                <div className={s.postText__likes}>
                    <span onClick={() => editLikeCount(liked ? -1 : +1)} style={liked? {'color': 'red'}: {'color': 'black'}}>{likes} likes</span>
                    <span onClick={() => retweet()}>{retweets} retweets</span>
                </div>
            </div>










        </div>
    );
};

export default Post;