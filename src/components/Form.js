import React from 'react';

const Form = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
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

export default Form;