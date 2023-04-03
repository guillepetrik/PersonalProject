import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirstContext } from "../Context/FirstContext";
const UserList = () => {
    const [user, setUser] = useState(null);
    const context = useContext(FirstContext);
    const [pit, setPit] = useState([]);
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);

    useEffect(() => {
        const getData = async () => {
            if (user !== null) {
                try {
                    const res = await axios.get("http://localhost:8000/api/userpit", {
                        params: {
                            email: user.email,
                        },
                    });
                    setPit(res.data);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        getData();
    }, [user]);

    useEffect(() => {
        console.log(pit);
    }, [pit]);
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
                    {pit.map((pit, index) => <tr key={index} >
                        <td>{pit.name}</td>
                        <td>{pit.type}</td>
                        <td>
                            <Link className='md' to={`/pit/${pit._id}`}>Detalle</Link>
                            <Link className='md' to={`/pit/${pit._id}/Edit`}>Editar</Link>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}
export default UserList;