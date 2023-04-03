import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
const PitList = () => {
    const [pit, setPit] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pit')
            .then(res=>{
                setPit(res.data);
            });
    },[pit])
    return (
        <>
        <h3>Registro de pitangas</h3>
        <table className="table table-striped table-hover table-bordered baritem">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { pit.map( (pit, index) => <tr key={index} >
                <td>{ pit.name }</td>
                <td>{ pit.type }</td>
                <td>
                    <Link className='md' to={`/pit/${pit._id}`}>Detalle</Link>
                    <Link className='md' to={`/pit/${pit._id}/Edit`}>Editar</Link>
                </td>
                </tr> ) }
            </tbody>
        </table>
        </>
    )
}
export default PitList;