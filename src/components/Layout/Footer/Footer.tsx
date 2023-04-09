import React from 'react';
import s from "./Footer.module.css";
import {NavLink, Route} from "react-router-dom";
import Community from "../Outlet/FooterPages/Community";
import Confidential from "../Outlet/FooterPages/Confidential";
import Diversity from "../Outlet/FooterPages/Diversity";
import Innovation from "../Outlet/FooterPages/Innovation";
import Policies from "../Outlet/FooterPages/Policies";
import Transparency from "../Outlet/FooterPages/Transparency";

const Footer = () => {
    return (
        <div className='footer'>
            <div className={s.footerLinks}>
                <NavLink to='community' className={({isActive}) => isActive ? s.active : s.item} >Community</NavLink>
                <NavLink to='confidential' className={({isActive}) => isActive ? s.active : s.item} >Confidential</NavLink>
                <NavLink to='diversity' className={({isActive}) => isActive ? s.active : s.item} >Diversity</NavLink>
                <NavLink to='innovation' className={({isActive}) => isActive ? s.active : s.item} >Innovation</NavLink>
                <NavLink to='policies' className={({isActive}) => isActive ? s.active : s.item} >Policies</NavLink>
                <NavLink to='transparency' className={({isActive}) => isActive ? s.active : s.item} >Transparency</NavLink>

            </div>
        </div>
    );
};

export default Footer;