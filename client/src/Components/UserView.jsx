import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import UserMap from './UserMap';
const UserView = () => {

    return (
        <>
            <div className='contc'>
                <UserList className="baritem" />
                <button className="nbt baritem">
                    <Link className='baritem' to={`/Map`}>Agregar Pitanga !</Link>
                </button>
            </div>            
            <UserMap className="baritem" />
        </>
    )
}
export default UserView;