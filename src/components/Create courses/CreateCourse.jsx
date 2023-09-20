import React, { useState } from 'react';
import Button from '../../common/Button';
import toHoursAndMinutes from '../../helpers/pipeDurations';
import { mockedAuthorsList } from '../../Constants';
import { v4 as uuidv4 } from 'uuid';
// import { mockedCoursesList } from '../../Constants';

// configure
const initialList = mockedAuthorsList.map(item => ({ ...item, selected: false }))

function CreateCourse() {
	const [duration, setDuration] = useState(0);
	const [authorsList, setAuthors] = useState(initialList);

	const authorsNotSelected = authorsList.filter(({ selected }) => !selected);
	const authorsSelected = authorsList.filter(({ selected }) => selected);



	function addNewAuthor() {
		const input = document.getElementById('InputAuthorsName');
		if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(input.value)) {
			return console.log('Please enter your FullName');
		}
		const authorName = input.value;
		const newAuthor = { id: uuidv4(), name: authorName, selected: false };
		const newAuthors = authorsList.concat(newAuthor);
		setAuthors(newAuthors);
		input.value = ''
	}

	function AuthorsMap(props) {
		if (props.authorsArr.length === 0) {
			return (
				<div>
					<h2>{props.listName}</h2>
					<br />
					<span>Author list is empty</span>
				</div>
			);
		} else {
			return (
				<div>
					<ul>
						<h2>{props.listName}</h2>
						{props.authorsArr.map((author) => {
							function authorSelectToggler() {
								const newArray = authorsList.filter((obj) => obj.id !== author.id);
								author.selected === true ?	author.selected = false : author.selected = true;
								newArray.push(author)
								setAuthors(newArray)
							}
							return (
								<li key={author.id}>
									<span>{author.name}</span>
									<Button type='button' onClick={authorSelectToggler}>{props.buttonName}</Button>
								</li>
							);
						})}
					</ul>
				</div>
			);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

	}

	function getFormData() {
		const form = document.forms.createNewCourse;
		const formData = new FormData(form);
		const title = formData.get('title');
		const description = formData.get('description');
		const creationDate = new Date().toLocaleString().slice(0,10).replace(/\./g,'/')
		const duration =formData.get('duration');
		const authors = getAuthorsId()
	}

	function getAuthorsId() {
		const authorsId = []
		if(authorsSelected.length < 2){
			console.log('course should have 2 authors at least')
		}else{
			for(var i = 0; i < authorsSelected.length; i++){
				let id = authorsSelected[i].id;
				authorsId.push(id)
			}
		}
		return authorsId
	}
	// console.log('render');
	// console.log(authorsList);
	return (
		<div>
			<form
				action='#'
				className='createCourseForm'
				name='createNewCourse'
				onSubmit={handleSubmit}
			>
				<div className='createCourseHeader'>
					<div className='titleCC inputTxtCC'>
						<label htmlFor='titleCC'>Title</label>
						<input name='title' type='text' id='titleCC' placeholder='Enter title...' />
					</div>
					<div className='titleButton'>
						<Button
							type='button'
							onClick={handleSubmit}
						>Create course</Button>
					</div>
				</div>
				<div className='descriptionCC '>
					<label htmlFor='descriptionCC'>Description</label>
					<textarea
						className='textareaCC '
						id='descriptionCC'
						name='description'
						rows={4}
						placeholder='Enter description'
					/>
				</div>
				<div className='specificationCC'>
					<div className='durationAndAuthorCC'>
						<div>
							<h2>Add author</h2>
							<input
								id='InputAuthorsName'
								type='text'
								name='name'
								placeholder='Enter author name...'
							/>
							<br />
							<Button type='button' onClick ={addNewAuthor}>
								Add new author
							</Button>
						</div>
						<div className='durationAndAuthorCC'>
							<div className='inputTxtCC'>
								<h2>Duration</h2>
								<label htmlFor='durationCC'>Duration</label>
								<input
									type='number'
									id='durationCC'
									name='duration'
									placeholder='Enter duration in minutes'
									onChange={(event) => setDuration(event.target.value)}
								/>
								<b>Duration: {toHoursAndMinutes(duration)}</b>
							</div>
						</div>
					</div>
					<div className='authorsListCC'>
						<AuthorsMap
							authorsArr= { authorsNotSelected }
							listName= 'Authors'
							buttonName= 'Add author'
						/>
						<AuthorsMap
							authorsArr= { authorsSelected }
							listName= 'Course authors'
							buttonName= 'Delete author'
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
export default CreateCourse;
