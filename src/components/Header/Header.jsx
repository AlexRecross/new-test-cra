import React from 'react';
import Logo from './components/Logo/Logo.jsx';
import Button from '../../common/Button.jsx';

function Header() {
	return (
		<div className='header'>
			<Logo />
			<div>
				<span>Dave</span>
				<Button
					name='Logout'
					function={() => {
						console.log('button is clicked');
					}}
				/>
			</div>
		</div>
	);
}

export default Header;
