import React, { useEffect, useState } from 'react';
import LoginButton from './Login/LoginButton';
import LogoutButton from './Login/LogoutButton';

const NavBar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, [])
    return (
        <>
            <nav className="navbar navbarbg">
                <img className="logo baritem" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ob_12C8oyyxAQf33NzCukEdbDnfsiDWwQQ&usqp=CAU' height="45px" alt='logo'></img>
                <h1 className="baritem"><span>Pitangas</span>Web</h1>
            <div className="d-flex align-items-center">
                {user ?
                    (
                        <LogoutButton className="mx-2 baritem" />
                    ) :
                    (
                        <LoginButton className="mx-2 baritem" />
                    )}
            </div>
            </nav>
        </>
    )
};

export default NavBar;