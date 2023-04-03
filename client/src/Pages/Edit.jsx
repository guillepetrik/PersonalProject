import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import { FirstContext } from "../Context/FirstContext";


const Edit = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [dpt, setDpt] = useState("");
    const { id } = useParams();
    const [user, setUser] = useState(null);  
    const context = useContext(FirstContext);
    useEffect(() => {
        console.log(context);
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, [context])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pit/${id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDpt(res.data.dpt);
            })
    }, [id])

    const handleChangeEdit = (e) => {
        let data = {
            name,
            type,
            dpt
        }
        editItem(data);

        navigate('/welcome');
    }

    const editItem = (data) => {
        axios.put(`http://localhost:8000/api/pit/${id}`, data)
            .then(result => result.data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <>
            {user ?
            <>
            <NavBar />
            <div className="bgimgg">
            <div className='contc'>
                <div className="card">
                    <div className=" conts">
                        <form onSubmit={handleChangeEdit} className="space">
                            <div>
                                <p className=''>
                                    <label>Name</label><br />
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                                </p>
                                <p>
                                    <label>Type</label><br />
                                    <select name="type" id="tipo" value={type} onChange={(e) => setType(e.target.value)}>
                                        <option value="Normal">Normal</option>
                                        <option value="Morada">Morada</option>
                                    </select>
                                </p>
                                <p>
                                    <label>Decripcion</label><br />
                                    <textarea onChange={(e) => setDpt(e.target.value)} value={dpt} rows={4} cols={20} />
                                </p>
                                <button type="submit" className='nbt'>Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
            : <div className="baritem contc"><h2 className=" baritem">Debes iniciar sesion para ver esta pagina</h2></div>}
            
        </>
    )
}
export default Edit;
