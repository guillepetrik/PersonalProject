import axios from 'axios';
import React from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.get('http://localhost:8000/api/logout')
            .then(res=>{
                sessionStorage.clear();
                Cookies.remove('usertoken');
                alert('sesion cerrada');
                navigate('/login');
        });
    }

    return (
        <button  className="nbt baritem" onClick={handleLogout}>
            Cerrar sesion
        </button>
    )
}

export default LogoutButton