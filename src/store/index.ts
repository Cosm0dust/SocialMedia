import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./users.api";
import authReducer from './slices/userSlice'
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [usersApi.reducerPath]: usersApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
