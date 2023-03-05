import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Sidebar/>

            <div className='container'>
                <Outlet/>
            </div>

            <Footer/>

        </>
    );
};

export default Layout;