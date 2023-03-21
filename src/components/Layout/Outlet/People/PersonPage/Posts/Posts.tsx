import React, {useState} from 'react';
import s from './Posts.module.css'
import {useSelector} from "react-redux";
import Post from "./Post/Post";
import {IPost} from "../../../../../../models/models";
import { useGetPostsQuery} from "../../../../../../store/users.api";
import InputField from "./InputField/InputField";

interface PostsProps {
    fullName: string
    avatar: string
    profId:string | undefined
    main: boolean | null
}

const Posts = ({avatar, fullName, profId, main}: PostsProps) => {
    const { data, error, isLoading } = useGetPostsQuery();



    return (
        <>
            {main && <InputField/>}
            {
                data && (data as IPost[]).map((post: IPost) =>(
                    <Post
                key={post.id}
                text ={post.text}
                id ={post.id}
                likes={post.likes}
                retweets = {post.retweets}
                timestamp={post.timestamp}
                comments={post.comments}
                avatar = {avatar}
                fullName={fullName}
                post ={post}
                userId={post.userId}
                profId={profId}
                main = {main}
                />
                )).reverse()
            }

        </>
    );
};

export default Posts;