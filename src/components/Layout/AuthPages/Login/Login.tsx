import React from 'react';
import {useGetAllUsersQuery, useRegisterUserMutation} from "../../../../store/users.api";
import {IUser} from "../../../../models/models";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../hooks/rtk-ts";
import {AuthState, setUser} from "../../../../store/slices/userSlice";


type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const {data, isLoading, error}= useGetAllUsersQuery()
    const [registerUser] = useRegisterUserMutation<IUser>()

    const { register, handleSubmit,formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const onSubmit: SubmitHandler<FormData> = (formData) => {
        const obj =(data as Array<IUser>)?.find(user => user.email === formData.email)
        dispatch(setUser(
            ({
                id: obj?.id,
                email: formData.email,
                token: '33333'
            }) as AuthState
        ))
        navigate('/')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <label>Password</label>
            <input type="password" placeholder="Enter your password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
            <button type="submit">Log In</button>
        </form>
    );
};

export default Login;