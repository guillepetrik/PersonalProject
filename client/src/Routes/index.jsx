import { createBrowserRouter } from "react-router-dom";
import Detalle from "../Components/Detalle";
import Layout from "../Layouts/Layout";
import NotFound from "../Pages/NotFound";
import Edit from "../Pages/Edit";
import Welcome from "../Pages/Welcome";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Map from "../Pages/Map";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'pit/:id',
                element: <Detalle />
            },
            {
                path:'pit/:id/Edit',
                element: <Edit />
            },
            {
                path:'/Map',
                element: <Map />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/welcome',
                element: <Welcome />
            }
        ]
    }
]);