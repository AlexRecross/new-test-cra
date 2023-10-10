import React from 'react';
import styles from './button.module.css'

function Button({ children, className, ...attr }) {
	return (
		<button {...attr} className={styles.btn}>
			{children}
		</button>
	);
}

export default Button;
