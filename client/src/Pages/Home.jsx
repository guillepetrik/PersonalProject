import { useContext, useEffect } from "react"
import { FirstContext } from "../Context/FirstContext";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {

    const context = useContext(FirstContext);
    useEffect(() => {
        console.log(context);
    }, [context])

    return (
        <>
            <NavBar />
            <div className="contc bgimg">
                <div className="cardd">
                    <div className="conts">
                            <div className="contc">
                                <h4 className="baritem">Agrega tus plantas con un simple click</h4>
                                <h6 className="baritem ml-3 p-3">Inicia sesion para guardar tus plantas y poder visualizarlas.</h6>
                                <button className="nbt baritem">
                                    <Link className='baritem' to={`/login`}>Comenzar !</Link>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;