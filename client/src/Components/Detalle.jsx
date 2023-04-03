import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import NavBar from './Navbar';
const Detalle = () => {
    const [pit, setPit] = useState({})
    const { id } = useParams();


    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pit/${id}`)
            .then(res => setPit({
                ...res.data
            }))
    }, [id])
    return (
    <>  
    <NavBar />
            <div className='contc bgimg'>
                <div className="card">
                    <div className="conts">          
                        <h3><span>Detalle de: </span> {pit.name}</h3>
                        <p><span>Tipo de pitanga: </span>{pit.type}</p>
                        <p><span>Descripcion: </span>{pit.dpt}</p>                          
                        <p><span>by: </span>{pit.createdBy}</p>  
                        {pit.lat && <p><span>Latitud: </span>{pit.lat}</p>}        
                        {pit.lng && <p><span>Longitud: </span>{pit.lng}</p>}          
                    </div>
                </div>
            </div>
            <div className='conts'>
                <button className="nbt baritem">
                    <Link to={`/welcome`}>Atras</Link>
                </button>
                <DeleteBtn id={id} />
            </div>
            </>
    )
}
export default Detalle;