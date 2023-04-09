import React from 'react';
import {formatDate, Source} from "../../../../../models/models";
import s from "./New.module.css";
import {Link} from "react-router-dom";
interface NewProps{
    title: string;
    source: Source;
    author: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

const New = ({title,source,
                 author,
                 description,
                 url,
                 urlToImage,
                 publishedAt,
                 content} : NewProps) => {


    const date = new Date(publishedAt)

    return (
        <div className={s.new}>
                <div className={s.new__header}>
                    <div className={s.smallImgWrapper}>
                        <img src='https://fenprobe.exintra.net/sites/30/upload/userfiles/1506961674_news.jpg' alt="No image"/>
                    </div>
                    <div>

                            <h1>{title}</h1>
                            <div>authored by <span>{author}</span></div>

                    </div>
                </div>
                <div className={s.imgWrapper}>
                    <img src={urlToImage} alt="No image"/>
                </div>
                <div>

                    
                    <Link to={url}>{url}</Link>
                    <div>{content}</div>

                </div>
            <div className={s.new__footer}>
                <div>Sourse: <span>{source.name}</span></div>
                <div>{formatDate(date)}</div>
            </div>

        </div>
    );
};

export default New;