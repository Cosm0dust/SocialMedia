import {useGetUsersQuery} from "../../../../store/users.api";
import {errorMessage, IUser} from "../../../../models/models";
import s from './People.module.css'
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/rtk-ts";

function People() {
    const mainId = useAppSelector(state => state?.auth.id)

    const { data, error, isLoading } = useGetUsersQuery(Number(mainId));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{errorMessage(error)}</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }

    return (
        <ul className={s.userList}>
            {data && (data as unknown as Array<IUser>)?.map((user: IUser) => (
                <Link className={s.link} key={user.id} to={`/people/${user.id}`}>
                    <li className={s.userItem} >
                <img className={s.userImage} src={user.avatar} alt={user.fullName} />
                <div className={s.userInfo}>
                    <h3 className={s.userName}>{user.fullName}</h3>
                    <div>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>City: {user.city}</p>
                    </div>
                </div>
            </li>
                </Link>
        )) }
        </ul>
    );
}

export default People;