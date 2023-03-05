import React, {useState} from 'react';
import {useCreatePostMutation} from "../../../../../store/users.api";

const InputField = () => {
    const [text, setText] = useState('')
    const [ createPost, {isError}] = useCreatePostMutation();


    const handleText = async () => {
        if(text){
            await createPost({text: text, userId: 1})
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