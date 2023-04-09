import React, {useEffect, useState} from 'react';
import {
    useGetNewsQuery,
    useGetPaginatedNewsQuery,
    useGetPostsQuery,
    useGetUserByIdQuery
} from "../../../../store/users.api";
import s from './News.module.css'
import {INews, IPost, Source} from "../../../../models/models";
import New from "./New/New";
import {getPageCount, getPagesArray} from "../../../../utils/pages";
import {Link} from "react-router-dom";

const News = () => {

    const [news, setNews] = useState<INews[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pagesArray = getPagesArray(totalPages)
    const { data, error, isLoading } = useGetNewsQuery();
    const {data: data1, isLoading: isLoading1, error: error1} = useGetPaginatedNewsQuery(page)


    useEffect(()=>{
        const totalCount = (data as Array<INews>)?.length
        setTotalPages(getPageCount(totalCount, limit))
        },
    )




    return (
        <div className={s.news}>
            {
                data1 && (data1 as INews[]).map((n: INews) =>(
                    <Link className={s.news__link} to={n.url}>
                        <New
                        key={+n.title}
                        title={n.title}
                        source={n.source}
                        author={n.author}
                        description={n.description}
                        url={n.url}
                        urlToImage={n.urlToImage}
                        publishedAt={n.publishedAt}
                        content={n.content}
                    />
                    </Link>
                ))
            }
            <div className={s.page_wrapper}>{pagesArray.map(p =>
                <span key={p}
                      onClick={() => setPage(p)}
                      className={page === p ? s.page + ' ' + s.page__current : s.page}>{p}</span>
            )}</div>
        </div>
    );
};

export default News;