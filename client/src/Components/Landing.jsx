import { useContext, useEffect, useState } from "react"
import { FirstContext } from "../Context/FirstContext";
import UserView from "./UserView";


const Landing = () => {
    
    const [user, setUser] = useState(null);  
    const context = useContext(FirstContext);
    useEffect(() => {
        console.log(context);
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, [context])

    return (
        <>
            {user ?
            <UserView />
            : <div className="baritem contc"><h2 className=" baritem">Debes iniciar sesion para ver esta pagina</h2></div>}
            
        </>
    )
}
export default Landing;