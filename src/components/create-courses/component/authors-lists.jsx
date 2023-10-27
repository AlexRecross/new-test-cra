import React, {useMemo} from "react";
import { Button, List, Col, Row } from "reactstrap";

export default function AuthorsLists({ authorsList, setAuthorsList }) {

	const authorsNotSelected = useMemo( () => {
		return authorsList.filter(({ selected }) => !selected);
	}, [authorsList])

	const authorsSelected = useMemo( () => {
		return authorsList.filter(({ selected }) => selected);
	}, [authorsList])

	function selectToggle(authorId) {
		const newArray = authorsList.filter((author) => author.id !== authorId);
		const author = authorsList.find(author => author.id === authorId);
		author.selected === true ?	author.selected = false : author.selected = true;
		newArray.push(author)
		setAuthorsList(newArray)
	}

	return <Row xs='1' className='mt-1'>
		{!authorsNotSelected.length ? <List type="unstyled">
				<li><b>Available authors empty</b></li>
			</List> : <List type="unstyled">
				<b>Available authors:</b>
				{authorsNotSelected.map((author) => <li  className='row mt-1' key={author.id}>
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
				</li>)}
			</List >
		}
		{!authorsSelected.length ? <List type="unstyled">
			<li><b>Authors not selected</b></li>
		</List> : <List type="unstyled">
			<b>Selected authors:</b>
			{authorsSelected.map((author) => <li className='row mt-1' key={author.id}>
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
			</li>)}
		</List>}
	</Row>
}


