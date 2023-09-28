import React from 'react';

function Button({ children, className, ...attr }) {
	return (
		<button {...attr} className={className}>
			{children}
		</button>
	);
}

export default Button;
