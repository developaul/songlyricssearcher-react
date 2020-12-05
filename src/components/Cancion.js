import React from 'react';

import Spinner from './Spinner';

const Cancion = ({ results }) => {

    const { loading, result } = results;

    if (loading) return <Spinner />;

    const [{ data: { lyrics } }] = result;

    return (
        <>
            <h2>Letra de Canción</h2>
            <p>{lyrics}</p>
        </>
    );
};

export default Cancion;