import React from 'react';

function Button({ children, className, ...attr }) {
	return (
		<button
			{...attr}
			className={`btn app-btn ${className || ''}`}
		>
			{children}
		</button>
	);
}

export default Button;
