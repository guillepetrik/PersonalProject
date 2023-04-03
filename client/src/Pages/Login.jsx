import { useContext, useEffect } from "react"
import { FirstContext } from "../Context/FirstContext";
import LoginRegister from "../Components/Login/LoginRegister"
import NavBar from "../Components/Navbar";


const LoginPage = () => {

    const context = useContext(FirstContext);
    useEffect(() => {
        console.log(context);
    }, [context])

    return (
        <>
            <NavBar />
            <div className="contc bgimg ">
                <div className="card">    
                    <div className=" conts">
                        <LoginRegister />
                    </div>            
                </div>
            </div>
        </>
    )
}
export default LoginPage;