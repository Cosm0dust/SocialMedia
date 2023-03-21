import {createApi, fetchBaseQuery, TagDescription} from "@reduxjs/toolkit/query/react";
import {formatDate, IMessage, INews, IPost, IUser} from "../models/models";



export const usersApi = createApi({
    reducerPath: 'users',
    tagTypes: ['Users', 'Posts', 'Messages', 'News'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: build => ({
        getAllUsers: build.query<IUser[], void>({
            query: () => ({
                url: `users`
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
        getUsers: build.query<IUser[], number>({
            query: (main) => ({
                url: `users?id_ne=${main}`
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
            query: (main) => `users/${main}?_embed=posts`,
            providesTags: (result) => (result ? [{ type: 'Users', id: 'LIST' }] : []),
        }),
        registerUser: build.mutation<IUser, {
            fullName: string | undefined;
            password: string | undefined
            age: number| undefined;
            email: string| undefined;
            phone: string| undefined;
            city: string| undefined;
            avatar: string | undefined;
            id: number | undefined
             }>({
            query: ({
                        fullName,
                        id,
                        email,
                        phone,
                        city,
                        avatar,
                        age,
                        password,
                        }) => ({
                url: 'users',
                method: 'POST',
                body: {
                    id,
                    email,
                    fullName,
                    password,
                    avatar,
                    age,
                    phone,
                    city,
                    bio: undefined,
                    interests: undefined,
                    quote: undefined,
                    interestsArr: undefined,
                    posts: []
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST'}]
        }),
        updateProfile: build.mutation<IUser, {
            interestsArr: { name: string }[] | undefined;
            fullName: string | undefined;
            age: number| undefined;
            email: string| undefined;
            phone: string| undefined;
            city: string| undefined;
            avatar: string | undefined;
            bio: string | undefined;
            interests: string[] | undefined;
            quote: string| undefined;
            id: number | undefined
        }>({
            query: ({
                        fullName,
                        age,
                        email,
                        phone,
                        city,
                        avatar,
                        bio,
                        interests,
                        quote,
                        interestsArr,
                        id
                    }) => ({
                url: `users/${id}?_embed=posts`,
                method: 'PUT',
                body: {
                    id,
                    fullName,
                    age,
                    email,
                    phone,
                    city,
                    avatar,
                    bio,
                    interests,
                    quote,
                    interestsArr,
                    posts: []
                },
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST'}]
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
        createPost: build.mutation<IPost, { text: string, userId: number, name?: string }>({
            query: ({  text, userId, name }) => ({
                url: 'posts',
                method: 'POST',
                body: {
                    id: Math.floor(Math.random() * 1000)  ,
                    text ,
                    timestamp: formatDate(new Date()) ,
                    retweets: 0,
                    likes: 0,
                    retweetedFrom: name,
                    userId
                },
            }),
            invalidatesTags: [{ type: 'Posts', id: 'POST' }]
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post,
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
        changeLikesCount: build.mutation<IPost, IPost>({
            query:(post)=>({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: [{ type: 'Posts', id: 'POST' }]
        }),
        getSenders : build.query<IMessage[], { receiver: number}>({
            query: ({ receiver}) => ({
                url: `/messages?to=${receiver}`
            }),
            providesTags: (result: IMessage[] | undefined): readonly TagDescription<'Messages'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ id }) => ({ type: 'Messages' as const, id })),
                        { type: 'Messages', id: 'MESSAGE' },
                    ];
                } else {
                    return [{ type: 'Messages', id: 'MESSAGE' }];
                }
            },
        }),
        getMessages : build.query<IMessage[], {receiver: number | undefined, sender: string | undefined | null}>({
            query: ({receiver, sender}) => ({
                url: `/messages?userId=${receiver || sender}&to=${sender || receiver}`
            }),
            providesTags: (result: IMessage[] | undefined): readonly TagDescription<'Messages'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ id }) => ({ type: 'Messages' as const, id })),
                        { type: 'Messages', id: 'MESSAGE' },
                    ];
                } else {
                    return [{ type: 'Messages', id: 'MESSAGE' }];
                }
            },
        }),
        createMessage: build.mutation<IMessage, {
            text: string
            to: string | undefined;
            userId: number ;
            senderName: string | null;
        }>({
            query: ({
                        userId,
                        text,
                        senderName,
                        to
                    }) => ({
                url: 'messages',
                method: 'POST',
                body: {
                    id: Math.floor(Math.random() * 1000) ,
                    text,
                    timestamp: Date.now(),
                    senderName,
                    to,
                    userId
                },
            }),
            invalidatesTags: [{ type: 'Messages', id: 'MESSAGE' }]
        }),
        deleteMessage: build.mutation<void, number>({
            query: (id) => ({
                url: `messages/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Messages', id: 'MESSAGE' }]
        }),
        getPaginatedNews : build.query<INews[], number> ({
            query: ( page = 1 ) => ({
                url: `/news?_limit=10&_page=${page}`,
                method: 'GET'
            }),
            providesTags: (result: INews[] | undefined): readonly TagDescription<'News'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ author }) => ({ type: 'News' as const, author })),
                        { type: 'News', id: 'NEW' },
                    ];
                } else {
                    return [{ type: 'News', id: 'NEW' }];
                }
            },
        }),
        getNews : build.query<INews[], void> ({
            query: () => ({
                url: `/news`,
                method: 'GET'
            }),
            providesTags: (result: INews[] | undefined): readonly TagDescription<'News'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ author }) => ({ type: 'News' as const, author })),
                        { type: 'News', id: 'NEW' },
                    ];
                } else {
                    return [{ type: 'News', id: 'NEW' }];
                }
            },
        }),
    })
})

export const {
    useGetUserByIdQuery,
    useGetUsersQuery,
    useCreatePostMutation,
    useGetPostsQuery,
    useUpdatePostMutation,
    useDeletePostMutation,
    useUpdateProfileMutation,
    useChangeLikesCountMutation,
    useRegisterUserMutation,
    useGetAllUsersQuery,
    useGetSendersQuery,
    useCreateMessageMutation,
    useGetMessagesQuery,
    useGetNewsQuery,
    useGetPaginatedNewsQuery,
} = usersApi


