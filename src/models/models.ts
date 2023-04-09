import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import {ReactElement} from "react";

export interface FooterSection {
    name: string;
    component: () => ReactElement;
}

export interface Source  {
    id: string;
    name: string;
};

export interface INews{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export interface IMessage{
    id: number
    from: string
    userId: number
    text: string
    to: string
    timestamp: number
}

export interface IComment {
    id: number;
    user: string;
    handle: string;
    text: string;
    timestamp: string;
    fullname: string;
}

export interface IPost {
    id: number;
    comments?: IComment[];
    text: string;
    timestamp:  string;
    retweets: number;
    likes: number;
    userId: number;
    fullName?: string;
    retweetedFrom?: string;
    name?: string
}

export interface IUser {
    id: number | string;
    fullName: string;
    password?: string;
    age: number;
    email: string;
    phone: string;
    city: string;
    avatar: string;
    bio: string;
    interestsArr?: { name: string }[] | undefined;
    interests: string[] | undefined;
    quote: string;
    posts?: IPost[];
}

export interface RootObject {
    users: IUser[];
}


export const errorMessage = (error: FetchBaseQueryError | SerializedError): string => {
    if ('status' in error && 'data' in error) {
        return `Error: ${error.status} - ${JSON.stringify(error.data)}`;
    } else if ('message' in error) {
        return `Error: ${error.message}`;
    } else {
        return 'An unknown error occurred.';
    }
};

export const formatDate = (date: Date): string => {
    let dd: string | number = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm: string | number = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy: string | number = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
};