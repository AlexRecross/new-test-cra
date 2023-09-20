import React from 'react';

function Button({ children, className, ...attr }) {
	return (
		<button
			// onClick={functionOnClick}
			{...attr}
			className={`btn app-btn ${className || ''}`}
		>
			{children}
		</button>
	);
}

export default Button;
