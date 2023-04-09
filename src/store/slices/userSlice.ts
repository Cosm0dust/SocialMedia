import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/index";

interface T{
    email: string;
    id: string
}


export interface AuthState {
    email: string | null;
    token: string | null;
    id?: string | null
    mainPage:T | null
    usersEmails: Array<T> | null;
}


const initialState: AuthState = {
    email: null,
    token: null,
    id: null,
    mainPage: null,
    usersEmails: [],
}
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<AuthState>){
            localStorage.setItem("user", JSON.stringify(
                {
                    name: action.payload.email,
                    token: action.payload.token,
                }
            ))
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.usersEmails?.push({ email: state.email, id: state.id  } as T);
            state.mainPage = state.usersEmails?.find((item) => item.email === action.payload.email) ?? null;
        },
        logout(state){
            localStorage.clear()
            state.email = null
            state.token = null
            state.id = null
            state.mainPage =null
        },
    }
})

export const selectAuth = (state: RootState) => state.auth

export const {setUser, logout} = authSlice.actions

export default authSlice.reducer