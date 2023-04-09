import React, {useState} from 'react';
import s from './Posts.module.css'
import {useSelector} from "react-redux";
import Post from "./Post/Post";
import {IPost} from "../../../../../../models/models";
import { useGetPostsQuery} from "../../../../../../store/users.api";
import InputField from "./InputField/InputField";

interface PostsProps {
    profName: string
    avatar: string
    profId:string | null | undefined
    main: boolean | null;
    paramId: string| undefined;
}

const Posts = ({avatar, profName, profId, main, paramId}: PostsProps) => {
    const { data, error, isLoading } = useGetPostsQuery();


    return (
        <div className={s.posts}>
            <h1>Posts</h1>
            {main && <InputField profId={profId} fullName={profName}/>}
            <div className={s.postsList}>
                {
                data && (data as IPost[]).map((post: IPost) => (
                    <Post
                        key={post.id}
                        text={post.text}
                        id={post.id}
                        likes={post.likes}
                        retweets={post.retweets}
                        timestamp={post.timestamp}
                        comments={post.comments}
                        avatar={avatar}
                        retweetedFrom={post.name}
                        profName={profName}
                        post={post}
                        userId={post.userId}
                        profId={profId}
                        paramId={paramId}
                        main={main}
                    />
                )).reverse()
            }
            </div>

        </div>
    );
};

export default Posts;