import React, {useState} from 'react';
import {useCreatePostMutation} from "../../../../../../../store/users.api";
import s from './InputField.module.scss'
import {useParams} from "react-router-dom";
import Input1 from "../../../../../../../UIelems/Input1/Input1";
import Button2 from "../../../../../../../UIelems/Button2/Button2";


interface InputFieldProps {
   fullName: string;
   profId: string | null | undefined
}

const InputField = ({fullName, profId}: InputFieldProps) => {
    const [text, setText] = useState('')
    const [ createPost, {isError}] = useCreatePostMutation();
    const {id} = useParams<{ id: string }>()

    const handleText = async () => {
    if(text){
       await createPost({text: text, userId: Number(profId)}).unwrap()
        setText('')
    }
    }


    return (
        <div className={s.post}>

            <div className={s.input}>
                <Input1 placeholder={'Write your post'} value={text} onChange={e => setText(e.target.value)}/>
            </div>

            <div className={s.button}>
                <Button2 onClick={handleText} text={'Create Post'}/>
            </div>
        </div>
    );
};

export default InputField;