import React from 'react';
import s from './EditProfile.module.css'
import {IUser} from "../../../../../../models/models";
import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {useUpdateProfileMutation} from "../../../../../../store/users.api";
import Button1 from "../../../../../../UIelems/Button1/Button1";

interface UserProfileProps {
    user: IUser;
    setModal: (modal: boolean) => void;
}

const EditProfile = ({user, setModal}: UserProfileProps) => {

    const [updateProfile] = useUpdateProfileMutation<IUser>()

    const { register, handleSubmit, control, formState: { errors } } = useForm<IUser>(
        {
            defaultValues: {
                interestsArr: user?.interestsArr
            }
        }
    );
    const { fields, append, remove } = useFieldArray({
        control,
        name: "interestsArr"
    });


    const  onSubmit: SubmitHandler<IUser> = async (all: IUser) => {
        await updateProfile({
            id: Number(user.id) ,
            fullName:all.fullName || user?.fullName,
            age: all.age || user?.age,
            email: all.email || user?.email,
            phone: (all.phone ?? Number(all.phone) )|| user?.phone,
            city: all.city || user?.city,
            avatar: user?.avatar,
            bio: all.bio || user?.bio,
            interests: all.interestsArr?.map(interest => interest.name) || user?.interests,
            quote: all.quote || user?.quote,
            interestsArr: all.interestsArr || user?.interestsArr
        })
        setModal(false)

    };

    return (
        <form className={s.formState}  onSubmit={handleSubmit(onSubmit)}>
            <h2>Edit Profile</h2>
            <label>
                <span>Full Name:</span>
                <input type="text" defaultValue={user.fullName} {...register("fullName", { required: true })} />

                {errors.fullName && <span>This field is required</span>}
            </label>
            <label>
                <span>Age:</span>
                <input type="text" defaultValue={user.age} {...register("age", { required: true })} />
                {errors.age && <span>This field is required</span>}
            </label>
            <label>
                <span>Email:</span>
                <input type="text" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </label>
            <label>
                <span>Phone:</span>
                <input type="number" defaultValue={user.phone} {...register("phone", { required: true })} />
                {errors.phone && <span>This field is required</span>}
            </label>
            <label>
                <span>City:</span>
                <input type="text" defaultValue={user.city} {...register("city", { required: true })} />
                {errors.city && <span>This field is required</span>}
            </label>

            <label className={s.interests}>
                <span>Interests:</span>
                <div className={s.interests__fields}>
                    {fields.map((field, index) => (
                        <div key={index + 1}>
                            <label>
                                <input type="text" {...register(`interestsArr.${index}.name`)}
                                       defaultValue={field.name}/>
                            </label>
                            <button className={s.d_button} type="button" onClick={() => remove(index)}>Delete</button>
                        </div>
                    ))}
                    <button className={s.button1} type="button" onClick={() => append({name: ""})}>Add interest</button>
                </div>
                {errors.interests && <span>This field is required</span>}
            </label>

            <label className={s.bio}>
                <span>Bio:</span>
                <textarea className={s.area} defaultValue={user.bio} {...register("bio", { required: true })} />
                {errors.bio && <span>This field is required</span>}
            </label>
            <label>
                <span>Quote:</span>
                <input type="text" defaultValue={user.quote} {...register("quote", { required: true })} />
                {errors.quote && <span>This field is required</span>}
            </label>
            <button className={s.button1} type="submit">Submit</button>
        </form>
    );
};

export default EditProfile;