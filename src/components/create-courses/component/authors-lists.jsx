import React, {useMemo} from "react";
import { Button, List, Col } from "reactstrap";

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

	return(
		<Col className='mt-1'>
			{authorsNotSelected.length >= 1 ?
				<List>
					<b>Available authors:</b>
					{authorsNotSelected.map((author) => (
						<li  className='row mt-1' key={author.id}>
							<Col className='col-8' >
								<span>{author.name}</span>
							</Col>
							<Col className='col-4'>
								<Button
									color='primary'
									outline
									size='sm'
									type='button'
									onClick={() => selectToggle(author.id)}
								>
									Select author
								</Button>
							</Col>
						</li>
					))}
				</List>
				:
				<List>
					<li><b>Available authors empty</b></li>
				</List>
			}
			{authorsSelected.length >= 1 ?
				<List>
					<b>Selected authors:</b>
					{authorsSelected.map((author) => (
						<li  className='row mt-1' key={author.id}>
							<Col className='col-8' >
								<span>{author.name}</span>
							</Col>
							<Col className='col-4'>
								<Button
									color='danger'
									outline
									size='sm'
									type='button'
									onClick={() => selectToggle(author.id)}
								>
									Delete author
								</Button>
							</Col>
						</li>
					))}
				</List>
				:
				<List>
					<li><b>Authors not selected</b></li>
				</List>
			}
		</Col>
	)
}


