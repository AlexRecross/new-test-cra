import React from 'react';
import styles from './header.module.css'
import Logo from '../../common/logo'
import Button from '../../common/button.jsx';

function Header() {
	return (
		<div className={styles.header}>
			<Logo
				height={80}
				width={200}
			/>
			<div>
				<span>Dave</span>
				<Button
					type='button'
					onClick={()=>console.log('button "Logout" is clicked')}
				>
					Logout
				</Button>
			</div>
		</div>
	);
}

export default Header;