import React from 'react';
import {useGetAllUsersQuery, useRegisterUserMutation} from "../../../../../store/users.api";
import {IUser} from "../../../../../models/models";
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../hooks/rtk-ts";
import {AuthState, setUser} from "../../../../../store/slices/userSlice";
import s from './Login.module.css'


type FormData = {
    email: string;
    password: string;
};

const Login = () => {
    const {data, isLoading, error}= useGetAllUsersQuery()
    const [registerUser] = useRegisterUserMutation<IUser>()

    const { register,  handleSubmit,formState: { errors }, setError } = useForm<FormData>(
        {
            mode: "onSubmit",
            reValidateMode: "onChange"
        }
    );
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const onSubmit: SubmitHandler<FormData> = (formData) => {
        const user =(data as Array<IUser>)?.find(user => user.email === formData.email)

        if (!user) {
            // display error message if user with the provided email does not exist
            setError('email', { message: 'User with this email does not exist' });
            return;
        }

        if (user.password !== formData.password) {
            // display error message if password does not match
            setError('password', { message: 'Incorrect password' });
            return;
        }

        dispatch(setUser(
            ({
                id: user?.id,
                email: formData.email,
            }) as AuthState
        ))
        navigate('/profile')
    };

    return (
        <form  className={s.formWrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='email' className={s.container__field} type="email"
                          placeholder="enter email" {...register("email",
                        {required: true,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }},
                    )} />
                    <label htmlFor="email" className={s.container__label}>Email: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.email?.message}</span></div>
            </div>

            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='password' className={s.container__field} type="password" placeholder="enter password" {
                        ...register("password", {required: true,
                            minLength: {
                            value: 5,
                                message: "min length is 5"
                            }})} />
                    <label htmlFor="password" className={s.container__label}>Password: </label>
                </div>
                <div className={s.error}>{errors?.password?.message}</div>
            </div>

            <button className={errors.password || errors.email ? s.formButtonError : s.formButton}  type="submit">Sign In</button>
        </form>
    );
};

export default Login;

