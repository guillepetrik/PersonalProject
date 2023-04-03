import { useContext, useEffect } from "react";
import AdminView from "../Components/AdminView";
import Landing from "../Components/Landing";
import NavBar from "../Components/Navbar";
import { FirstContext } from "../Context/FirstContext";



const WelcomePage = () => {

    const { user, admin, validateAdmin } = useContext(FirstContext);

    useEffect(() => {
        validateAdmin();
        if (admin === false) {
            console.log("no admin");
        }
        console.log(user);
    }, [user]);

    return (
        <>
            <NavBar />
            {admin ?
                <AdminView />
                : <Landing />
            }
        </>
    )
}

export default WelcomePage;