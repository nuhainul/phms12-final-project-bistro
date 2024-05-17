// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="py-18">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;