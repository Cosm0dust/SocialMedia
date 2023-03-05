import React from 'react';
import s from './Comments.module.css'
import Comment from "./Comment/Comment";
import {IComment} from "../../../../../../../../models/models";

interface CommentsProps {
    comments: IComment[];
}

const Comments = ({comments}: CommentsProps) => {
    return (
        <div className={s.userList}>
            {comments.map( (c: IComment) =>
                <Comment key={c.id} id={c.id} user={c.user} handle={c.handle} text={c.text} timestamp={c.timestamp} fullname={c.fullname} />
                    )}
        </div>
    );
};

export default Comments;