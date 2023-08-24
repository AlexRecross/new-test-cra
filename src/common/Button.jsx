import React from 'react';

function Button(props) {
	console.log(props.name);
	return <button onClick={props.function}>{props.name}</button>;
}

export default Button;
