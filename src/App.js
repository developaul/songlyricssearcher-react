import React, { useState } from 'react';

import useAxios from './hooks/useAxios';

import Form from './components/Form';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {

	const [busquedaLetra, setBusquedaLetra] = useState({});
	const { artista, cancion } = busquedaLetra;

	const results = useAxios(
		busquedaLetra,
		`https://api.lyrics.ovh/v1/${encodeURI(artista)}/${encodeURI(cancion)}`,
		`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURI(artista)}`);

	const [isThereSong, setIsThereSong] = useState(false);

	return (
		<>
			<Form
				setBusquedaLetra={setBusquedaLetra}
				setIsThereSong={setIsThereSong}
			/>

			<div className="container mt-5">
				<div className="row">
					<div className="col-md-6">
						{isThereSong && <Info results={results} />}
					</div>

					<div className="col-md-6">
						{isThereSong && <Cancion results={results} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;