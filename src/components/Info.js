import React from 'react';
import PropTypes from 'prop-types';

import Spinner from './Spinner';

const Info = ({ results }) => {

    const { loading, result } = results;

    if (loading) return <Spinner />;

    const [, { data: { artists } }] = result;

    const [artist] = artists;

    const { strArtistThumb, strGenre, strBiographyES, strBiographyEN, strFacebook, strTwitter, strLastFMChart } = artist;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del Artista
            </div>

            <div className="card-body">
                <img src={strArtistThumb} alt='Logo Artista' />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{strBiographyES || strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
};

Info.propTypes = {
    results: PropTypes.object.isRequired
};

export default Info;