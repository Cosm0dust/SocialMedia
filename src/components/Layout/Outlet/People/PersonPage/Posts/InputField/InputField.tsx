import React from 'react';

const InputField = ({text, setText, makePost}) => {
    return (
        <label>
                <input value={text} onChange={(e)=> setText(e.target.value)} type="text"/>
                <button onClick={makePost}>Create Post</button>

        </label>
    );
};

export default InputField;