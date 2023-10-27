import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Input, Label, Button, Col } from "reactstrap";

export default function AddNewAuthor({ addAuthorToList }) {
	//"Add New Author" functionality
	const [newAuthorName, setNewAuthorName] = useState('');

	function createNewAuthor(){
		if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(newAuthorName)) {
			return alert('Please enter your FullName');
		}
		const newAuthor = { id: uuidv4(), name: newAuthorName};
		setNewAuthorName('')
		return newAuthor
	}

	const newName = (event) => {
		setNewAuthorName(event.target.value)
	}
	function addNewAuthor() {
		const newAuthor =createNewAuthor()
		addAuthorToList(newAuthor)
	}
	return(
		<Col className='mt-1' >
			<Label
				for='authorName'
				size='sm'
			>
				<b>Add author:</b>
			</Label>
			<Input
				bsSize='sm'
				id='authorName'
				name='authorName'
				placeholder='Enter new author name'
				type="text"
				value={newAuthorName}
				onChange={newName}
			/>
			<Button
				className='mt-1 rounded-pill'
				color='warning'
				outline
				size='sm'
				type='button'
				onClick={addNewAuthor}
			>
				Add
			</Button>
		</Col>
	)
}