import {createApi, fetchBaseQuery, TagDescription} from "@reduxjs/toolkit/query/react";
import {formatDate, IPost, IUser} from "../models/models";



export const usersApi = createApi({
    reducerPath: 'users',
    tagTypes: ['Users', 'Posts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: build => ({
        getUsers: build.query<IUser[], void>({
            query: () => ({
                url: 'users?id_ne=1'
            }),
            providesTags: (result: IUser[] | undefined): readonly TagDescription<"Users">[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ id }) => ({ type: 'Users' as const, id })),
                        { type: 'Users', id: 'LIST' },
                    ];
                } else {
                    return [{ type: 'Users', id: 'LIST' }];
                }
            },
        }),
        getUserById: build.query<IUser, number>({
            query: (id) => `users/${id}?_embed=posts`,
        }),
        getProfile: build.query<IUser, void>({
            query: () => ({
                url: 'users/1?_embed=posts'
            }),
        }),
        getPosts : build.query<IPost[], void>({
            query: () => ({
                url: '/posts'
            }),
            providesTags: (result: IPost[] | undefined): readonly TagDescription<'Posts'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
                        { type: 'Posts', id: 'POST' },
                    ];
                } else {
                    return [{ type: 'Posts', id: 'POST' }];
                }
            },
        }),
        createPost: build.mutation<IPost, { text: string, userId: number }>({
            query: ({  text, userId }) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    id: Math.floor(Math.random() * 1000)  ,
                    text ,
                    timestamp: formatDate(new Date()) ,
                    retweets: 0,
                    likes: 0,
                    userId
                },
            }),
            invalidatesTags: [{ type: 'Posts', id: 'POST' }]
        }),
        updateUser: build.mutation<IPost, {id: number, text: string, userId: number }>({
            query: ({id, text, userId}) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: {
                    text,
                    retweets: 0,
                    likes: 0,
                    timestamp: formatDate(new Date()),
                    userId
                },
            }),
            invalidatesTags: [{ type: 'Posts', id: 'POST' }]
        }),
        deletePost: build.mutation<void, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Posts', id: 'POST' }]
        }),
    })
})

export const {useGetUserByIdQuery, useGetUsersQuery, useGetProfileQuery, useCreatePostMutation, useGetPostsQuery, useUpdateUserMutation, useDeletePostMutation} = usersApi


/*
import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

interface User {
    id: number;
    name: string;
    email: string;
}

export const myApi = createApi({
    reducerPath: 'myApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/api/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
        }),
        getUserById: builder.query<User, number>({
            query: (id) => `users/${id}`,
        }),
        createUser: builder.mutation<User, { name: string, email: string }>({
            query: ({ name, email }) => ({
                url: 'users',
                method: 'POST',
                body: { name, email },
            }),
        }),

    }),
});*/
