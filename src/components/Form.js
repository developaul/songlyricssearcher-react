import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useForm from '../hooks/useForm';

const Form = ({ setBusquedaLetra, setIsThereSong }) => {

    const [busqueda, handleInputChange, setState] = useForm({
        artista: '',
        cancion: ''
    });

    const { artista, cancion } = busqueda;

    const [error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (!artista.trim() || !cancion.trim()) {
            setError(true);
            return;
        }

        setError(false);

        setIsThereSong(true);
        // Pasar busqueda al componente principal
        setBusquedaLetra(busqueda);

        // Limpiar Formulario
        setState({
            artista: '',
            cancion: ''
        });
    };

    return (
        <div className="bg-info">
            {error && <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>}

            <div className="container">
                <div className="row">

                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>

                                        <input
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            value={artista}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>

                                        <input
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Artista"
                                            value={cancion}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary float-right"
                                type="submit"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

Form.propTypes = {
    setBusquedaLetra: PropTypes.func.isRequired,
    setIsThereSong: PropTypes.func.isRequired
};

export default Form;