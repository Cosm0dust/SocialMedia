import {useAppSelector} from "./rtk-ts";


export function useAuth() {
    const {email, token, id} = useAppSelector(state => state.auth)

    return{
        isAuth: !!email,
        email,
        token,
        id
    }
}