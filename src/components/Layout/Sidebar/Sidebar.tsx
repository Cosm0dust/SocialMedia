import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className={s.sidebar}>
                <NavLink to='profile' className={({isActive}) => isActive ? s.active : s.item} >Profile</NavLink>
                <NavLink to='people' className={({isActive}) => isActive ? s.active : s.item} >People</NavLink>
                <NavLink to='dialogs' className={({isActive}) => isActive ? s.active : s.item} >Messages</NavLink>
                <NavLink to='news' className={({isActive}) => isActive ? s.active : s.item} >News</NavLink>
            </div>
        </div>
    );
};

export default Sidebar;