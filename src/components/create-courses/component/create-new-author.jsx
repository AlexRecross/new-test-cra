import React from "react";
import {useState} from "react";
import Input from "../../../common/input";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../../common/button";

export default function AddNewAuthor({ className, addAuthorToList}) {
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

	function newName(event) {
		setNewAuthorName(event.target.value)
	}
	function addNewAuthor() {
		const newAuthor =createNewAuthor()
		addAuthorToList(newAuthor)
	}
	return(
		<div>
			<Input
				inputClassName={className}
				labelName='Add author: '
				inputId='InputAuthorsName'
				type='text'
				name='Add author'
				placeholder='Enter author name...'
				value={newAuthorName}
				onChange={event => newName(event)}
			/>
			<Button
				type='button'
				onClick={addNewAuthor}
			>
				Add new author
			</Button>
		</div>
	)
}