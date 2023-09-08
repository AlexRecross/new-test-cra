import React from 'react';

function Button(props) {
	return <button onClick={props.functionOnClick}>{props.name}</button>;
}

export default Button;
