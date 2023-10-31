import React from "react";
import { Button, List, Row, Col } from "reactstrap";

export default function AuthorsLists({ authorsList, setAuthorsList }) {

	function selectToggle(authorId) {
		setAuthorsList(authorsList.map(author => author.id === authorId ? { ...author, selected: !author.selected } : author))
	}

	return <Row xs='1' className='mt-1'>
			<List type="unstyled">
				<b>Available authors:</b>
				{authorsList.map(author => !author.selected ?  <li  className='row mt-1' key={author.id}>
					<Col className='col-10 mt-1'>
						<span>{author.name}</span>
					</Col>
					<Col className='col-2'>
						<Button
							className='rounded-pill'
							color='success'
							outline
							size='sm'
							type='button'
							onClick={() => selectToggle(author.id)}
						>
							Select
						</Button>
					</Col>
				</li> : null)}
			</List >
			<List type="unstyled">
				<b>Selected authors:</b>
				{authorsList.map( author => author.selected ? <li className='row mt-1' key={author.id}>
					<Col className='col-10 mt-1'>
						<span>{author.name}</span>
					</Col>
					<Col className='col-2'>
						<Button
							className='rounded-pill'
							color='danger'
							outline
							size='sm'
							type='button'
							onClick={() => selectToggle(author.id)}
						>
							delete
						</Button>
					</Col>
				</li> : null)}
			</List>
	</Row>
}


