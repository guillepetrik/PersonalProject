import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


export const FirstContext = createContext();


const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);

    const validateAdmin = () => {
        axios.get("http://localhost:8000/api/admin", { withCredentials: true })
            .then(() => {
                console.log("OK");
                setAdmin(true);
            })
            .catch(error => {
                console.log(error);
                setAdmin(false);
            })
    }

    useEffect(() => {
        console.log("USER", user);
    }, [user])

    useEffect(() => {
        validateAdmin();
    }, [])

    return (
        <FirstContext.Provider value={
            {
                user,
                admin,
                setUser,
                validateAdmin
            }
        } >
            {children}
        </FirstContext.Provider>
    )

}

export default ContextProvider;