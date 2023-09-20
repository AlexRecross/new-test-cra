import React from 'react';

function Button({ children, name, functionOnClick, className, ...attr }) {
	return (
		<button
			// onClick={functionOnClick}
			{...attr}
			className={`btn app-btn ${className || ''}`}
		>
			{children || name}
		</button>
	);
}

export default Button;
