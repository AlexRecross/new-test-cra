import React from 'react';
import Logo from './components/logo/courses-logo.jsx';
import Button from '../../common/button.jsx';

function Header() {
	return (
		<div className='header'>
			<Logo />
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
