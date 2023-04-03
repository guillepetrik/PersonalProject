import React from "react";
import { Outlet } from "react-router-dom";
import '../App.css';

const Layout = ()=> {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default Layout;