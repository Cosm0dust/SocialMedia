import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../hooks/rtk-ts";
import {useRegisterUserMutation} from "../../../../store/users.api";
import {IUser} from "../../../../models/models";
import {AuthState, setUser} from "../../../../store/slices/userSlice";

type FormData = {
    fullName: string;
    password: string;
    age: number;
    email: string;
    phone: string;
    city: string;
    avatar?: string;
};

const SignUp = () => {

    const [registerUser] = useRegisterUserMutation<IUser>()

    const { register, handleSubmit,formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const idRand = Math.floor(Math.random() * 1000)

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        registerUser(
            {
                id: idRand,
                fullName: formData.fullName,
                password: formData.password,
                age: formData.age,
                email: formData.email,
                phone: formData.phone,
                avatar: formData.avatar,
                city: formData.city
            }
        )
        dispatch(setUser(
            ({
                email: formData.email,
                id : idRand.toString(),
                token: '100000'
            }) as AuthState
        ))
        navigate('/')
      };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" {...register("fullName", { required: true })} />


            {errors.fullName && <span>This field is required</span>}

            <label>Password</label>
            <input type="password" placeholder="Enter your password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <label>Age</label>
            <input type="number" placeholder="Enter your age" {...register("age", { required: true })} />
            {errors.age && <span>This field is required</span>}

            <label>Email</label>
            <input type="email" placeholder="Enter your email" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <label>Phone</label>

            <input type="phone" placeholder="Enter your phone" {...register("phone", { required: true })} />

            {errors.phone && <span>This field is required</span>}

            <label>City</label>
            <input type="text" placeholder="Enter your city" {...register("city", { required: true })} />
            {errors.city && <span>This field is required</span>}

            <label>Avatar</label>
            <input type="text" placeholder="photoUrl" {...register("avatar", { required: true })} />
            <button type="submit">Register</button>
        </form>
    );
};

export default SignUp;

