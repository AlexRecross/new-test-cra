import React from 'react';
import Logo from '../../common/logo'
import { Button, Container, Row, Col } from 'reactstrap';

function Header() {
	return (
		<Container fluid className='border border-warning mt-1'>
			<Row >
				<Col className='col-10 d-inline-flex'>
					<Logo className=''
						height={80}
						width={120}
					/>
				</Col>
				<Col className='col-2  d-flex m-auto '>
					<span className='m-auto p-1'>Dave</span>
					<Button
						color='success'
						outline
						size='sm'
						onClick={()=>console.log('button "Logout" is clicked')}
					>
						Logout
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default Header;
