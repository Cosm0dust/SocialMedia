import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../../hooks/rtk-ts";
import {useRegisterUserMutation} from "../../../../../store/users.api";
import {IUser} from "../../../../../models/models";
import {AuthState, setUser} from "../../../../../store/slices/userSlice";
import s from './SignUp.module.css'

type FormData = {
    name: string;
    surname: string;
    password: string;
    age?: number;
    email: string;
    phone?: string;
    city?: string;
    checkPassword: string;
    avatar?: string;
};

const SignUp = () => {

    const [registerUser] = useRegisterUserMutation<IUser>()

    const { register, handleSubmit,formState: { errors }, setError } = useForm<FormData>();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const idRand = Math.floor(Math.random() * 1000)

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        if (formData.checkPassword !== formData.password) {
            // display error message if password does not match
            setError('checkPassword', { message: 'Passwords don`t match' });
            return;
        }

        registerUser(
            {
                id: idRand,
                fullName: formData.name + ' '+ formData.surname,
                password: formData.password,
                age: formData.age || NaN,
                email: formData.email,
                phone: formData.phone || '',
                avatar: formData.avatar || '',
                city: formData.city || ''
            }
        )
        dispatch(setUser(
            ({
                email: formData.email,
                id : idRand.toString(),
                token: '100000'
            }) as AuthState
        ))
        navigate('/profile')
      };



    return (
        <form className={s.formWrapper}  onSubmit={handleSubmit(onSubmit)}>

            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='name' className={s.container__field} type="text"
                           placeholder="enter name" {...register("name",
                        {required: true,
                        maxLength:{
                            value: 15,
                            message: "too long name"
                        }},

                    )} />
                    <label htmlFor="name" className={s.container__label}>Name: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.name?.message}</span></div>
            </div>



            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='surname' className={s.container__field} type="text"
                           placeholder="enter surname" {...register("surname",
                        {required: true,
                            maxLength:{
                                value: 25,
                                message: "too long name"
                            }
                        },
                    )} />
                    <label htmlFor="surname" className={s.container__label}>Surname: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.surname?.message}</span></div>
            </div>

            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='email' className={s.container__field} type="email"
                           placeholder="enter password" {...register("email",
                        {required: true},
                    )} />
                    <label htmlFor="email" className={s.container__label}>Email: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.email?.message}</span></div>
            </div>




            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='password' className={s.container__field} type="password"
                           placeholder="enter password" {...register("password",
                        {required: true,
                            minLength: {
                                value: 5,
                                message: "Password must be at least 8 characters long"
                            },
                            maxLength:{
                                value: 16,
                                message: "too long password"
                            },
                            validate: value => {
                                if (value === "password" || value === "123456") {
                                    return "Password is too weak, please choose a stronger password";
                                }
                            },

                        },
                    )} />
                    <label htmlFor="password" className={s.container__label}>Password: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.password?.message}</span></div>
            </div>


            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='checkPassword' className={s.container__field} type="password"
                           placeholder="enter password again" {...register("checkPassword",
                        {required: true,
                        },
                    )} />
                    <label htmlFor="checkPassword" className={s.container__label}>Passcheck: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.checkPassword?.message}</span></div>
            </div>






            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='age' className={s.container__field} type="number"
                           placeholder="enter age" {...register("age",
                        {required: false,
                            pattern: {
                                value: /^\d+$/,
                                message: "Age must be a whole number"
                            },
                            validate: value => {
                                if(value) return value < 100 || "Are you really over 100 years old?";
                            }
                        },
                    )} />
                    <label htmlFor="age" className={s.container__label}>Age: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.age?.message}</span></div>
            </div>





            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='phone' className={s.container__field} type="phone"
                           placeholder="enter phone" {...register("phone",
                        {required: false,
                            pattern: {
                                value: /^\d{10}$/,
                                message: "Please enter a valid phone number"
                            },
                        },
                    )} />
                    <label htmlFor="phone" className={s.container__label}>Phone: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.phone?.message}</span></div>
            </div>


            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='city' className={s.container__field} type="text"
                           placeholder="enter city" {...register("city",
                        {required: false,
                            pattern: {
                                value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
                                message: "Please enter a valid city name"
                            },
                        },
                    )} />
                    <label htmlFor="city" className={s.container__label}>City: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.city?.message}</span></div>
            </div>


            <div className={s.formInput}>
                <div className={s.container}>
                    <input id='avatar' className={s.container__field} type="text"
                           placeholder="enter photoUrl" {...register("avatar",
                        {required: true,
                            pattern: {
                                value: /^(ftp|http|https):\/\/[^ "]+$/,
                                message: "Please enter a valid URL",
                            },
                        },
                    )} />
                    <label htmlFor="avatar" className={s.container__label}>Avatar: </label>
                </div>
                <div className={s.error}><span role="alert">{errors?.avatar?.message}</span></div>
            </div>



            <button className={
                errors.password || errors.email || errors.checkPassword || errors.name|| errors.surname
                ?
                s.formButtonError : s.formButton
            } type="submit">Register</button>
        </form>
    );
};

export default SignUp;

