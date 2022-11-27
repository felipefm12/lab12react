import React from 'react';

const PosCategoria = ({objCategoria}) => {
	return (
		<li>
			<img src="src/img/plato_blanco.svg" alt="" />
			<span>{objCategoria.nombre}</span>
		</li>
	);
};

export default PosCategoria;
