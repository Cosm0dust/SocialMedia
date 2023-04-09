import {createApi, fetchBaseQuery, TagDescription} from "@reduxjs/toolkit/query/react";
import {INews, IUser} from "../models/models";
import {usersApi} from "./users.api";

export const newsApi = createApi({
    reducerPath: 'news',
    tagTypes: ['Newses'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://newsapi.org/v2'
    }),
    endpoints: build => ({
        getAllNews: build.query<INews[], void>({
            query: (main) => ({
                url: `everything?q=bitcoin&apiKey=c8f0705644f342d4a75899fede3de0a4`
            }),
            providesTags: (result: INews[] | undefined): readonly TagDescription<"Newses">[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({author}) => ({ type: 'Newses' as const, author })),
                        { type: 'Newses', id: 'LIST' },
                    ];
                } else {
                    return [{ type: 'Newses', id: 'LIST' }];
                }
            },

        }),
        getPaginatedNews : build.query<INews[], number> ({
            query: ( page = 1 ) => ({
                url: `/news?_limit=10&_page=${page}`,
                method: 'GET'
            }),
            providesTags: (result: INews[] | undefined): readonly TagDescription<'Newses'>[] => {
                if (result && result.length > 0) {
                    return [
                        ...result.map(({ author }) => ({ type: 'Newses' as const, author })),
                        { type: 'Newses', id: 'LIST' },
                    ];
                } else {
                    return [{ type: 'Newses', id: 'LIST' }];
                }
            },
        }),
    })

})

export const {
    useGetAllNewsQuery,
    useGetPaginatedNewsQuery
} = newsApi
