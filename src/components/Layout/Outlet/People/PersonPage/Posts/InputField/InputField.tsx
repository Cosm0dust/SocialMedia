import React, {useState} from 'react';
import {useCreatePostMutation} from "../../../../../../../store/users.api";
import {useParams} from "react-router-dom";




const InputField = () => {
    const [text, setText] = useState('')
    const [ createPost, {isError}] = useCreatePostMutation();
    const {id} = useParams<{ id: string }>()

    const handleText = async () => {
    if(text){
       await createPost({text: text, userId: Number(id) || 1}).unwrap()
        setText('')
    }
    }


    return (
        <label>
                <input  type="text" value={text} onChange={e=>setText(e.target.value)}/>
                <button onClick={handleText}>Create Post</button>
        </label>
    );
};

export default InputField;