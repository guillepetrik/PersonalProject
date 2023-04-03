import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {

    const error  = useRouteError();

    return (
        <div >
            <h1>Página no Encontrada</h1>
            <hr />
            <div>{error.statusText || error.message}</div>
        </div>
    )
}

export default NotFound;