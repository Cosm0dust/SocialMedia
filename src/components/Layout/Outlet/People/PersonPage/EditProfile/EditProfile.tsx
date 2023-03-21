import React from 'react';
import {IUser} from "../../../../../../models/models";
import {SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {useUpdateProfileMutation} from "../../../../../../store/users.api";

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
        <form  onSubmit={handleSubmit(onSubmit)}>
            <label>
                Full Name:
                <input type="text" defaultValue={user.fullName} {...register("fullName", { required: true })} />

                {errors.fullName && <span>This field is required</span>}
            </label>
            <label>
                Age:
                <input type="text" defaultValue={user.age} {...register("age", { required: true })} />
                {errors.age && <span>This field is required</span>}
            </label>
            <label>
                Email:
                <input type="text" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
            </label>
            <label>
                Phone:
                <input type="number" defaultValue={user.phone} {...register("phone", { required: true })} />
                {errors.phone && <span>This field is required</span>}
            </label>
            <label>
                City:
                <input type="text" defaultValue={user.city} {...register("city", { required: true })} />
                {errors.city && <span>This field is required</span>}
            </label>

            Interests:
            <div>
                {fields.map((field, index) => (
                    <div key={index + 1}>
                        <label>
                            <input type="text" {...register(`interestsArr.${index}.name`)} defaultValue={field.name} />
                        </label>
                        <button type="button" onClick={() => remove(index)}>Delete</button>
                    </div>
                ))}
                <button type="button" onClick={() => append({ name: "" })}>Add interest</button>
            </div>
            {errors.interests && <span>This field is required</span>}
            <label>
                Bio:
                <textarea defaultValue={user.bio} {...register("bio", { required: true })} />
                {errors.bio && <span>This field is required</span>}
            </label>
            <label>
                Quote:
                <input type="text" defaultValue={user.quote} {...register("quote", { required: true })} />
                {errors.quote && <span>This field is required</span>}
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EditProfile;