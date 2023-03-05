import React, {useEffect, useState} from 'react';
import {useGetPostsQuery, useGetUserByIdQuery} from "../../../../store/users.api";
import {useParams} from "react-router-dom";
import {IPost} from "../../../../models/models";
import New from "./New/New";
import InputField from "../People/PersonPage/Posts/InputField/InputField";
import NewsInputField from "./NewsInputField/NewsInputField";
import Post from "../People/PersonPage/Posts/Post/Post";

const News = () => {
    const { data, error, isLoading } = useGetPostsQuery();


    return (
        <div>
            <NewsInputField />

        </div>
    );
};

export default News;