import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";

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
    userId: number
}

export interface IUser {
    id: number;
    fullName: string;
    age: number;
    email: string;
    phone: string;
    city: string;
    avatar: string;
    bio: string;
    interests: string[];
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