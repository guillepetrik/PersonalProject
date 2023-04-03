import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();    
    const location = useLocation();
    const handleClick = () => {
        navigate("/login");
    }

    return (
        <button onClick={handleClick} className="nbt baritem" disabled={location.pathname === "/login"}>
            Login
        </button>
    )
}

export default LoginButton