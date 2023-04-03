import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const DeleteBtn = ({ id }) => {
    const navigate = useNavigate();

    const eliminarPit = async (id) => {

        try {
            await axios.delete(`http://localhost:8000/api/pit/${id}`);
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmarEliminar = (id) => {
        Swal.fire({
            title: 'Estas seguro de eliminar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'SI, borrar ahora!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPit(id)
                navigate('/welcome');
            }
        })
    }

    return (
        <div className='baritem'>
            <button className='btn3' onClick={() => { confirmarEliminar(id) }}>Eliminar</button>
        </div>
    )
}

export default DeleteBtn