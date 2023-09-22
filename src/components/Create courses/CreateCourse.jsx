import React, { useState } from 'react';
import Button from '../../common/Button';
import toHoursAndMinutes from '../../helpers/pipeDurations';
import { v4 as uuidv4 } from 'uuid';



function CreateCourse(props) {
	// configure
	const initialList = props.authors.map(item => ({ ...item, selected: false }))

	const [authorsList, setAuthorsList] = useState(initialList);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const [duration, setDuration] = useState(0);

	const authorsNotSelected = authorsList.filter(({ selected }) => !selected);
	const authorsSelected = authorsList.filter(({ selected }) => selected);

	//New author
	const [newAuthorName, setNewAuthorName] = useState('');

	function createNewAuthor(){
		const input = document.getElementById('InputAuthorsName');
		if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(newAuthorName)) {
			return alert('Please enter your FullName');
		}
		const newAuthor = { id: uuidv4(), name: newAuthorName};
		input.value = ''
		return newAuthor
	}

	// function addNewAuthor() {
	// 	props.addAuthor(createNewAuthor())
	// }

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
								setAuthorsList(newArray)
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

	function getAuthorsId() {
		const authorsId = []
		if(authorsSelected.length < 2){
			alert('course should have 2 authors at least')
		}else{
			for(let i = 0; i < authorsSelected.length; i++){
				let id = authorsSelected[i].id;
				authorsId.push(id)
			}
		}
		return authorsId
	}

	function createNewCourse() {
		let newCourse = {};
		const courseTitle = title;
		const courseDescription = description;
		const creationDate = new Date().toLocaleString().slice(0,10).replace(/\./g,'/')
		if( title === '' && description === '' && duration === '' || duration <= 0) {
			return alert('Some field is not filled in!')
		}
		newCourse = {
			id:  uuidv4(),
			title: courseTitle,
			description: courseDescription,
			creationDate: creationDate,
			duration: parseInt(duration, 10),
			authors: getAuthorsId()
		}
		return newCourse
	}

	// function setNewCourses() {
	// 	const newCourses = props.courses.concat(createNewCourse());
	// 	props.addCource(createNewCourse())
	// 	// props.setResourceCL()
	// 	console.log(newCourses)
	// 	console.log(props.courses)
	// }
	//

	return (
		<div className='createCourseForm'>
			<Button onClick={props.goToCourses}> Back to courses</Button>
			<div className='createCourseHeader'>
				<div className='titleCC inputTxtCC'>
					<label htmlFor='titleCC'>Title</label>
					<input
						type='text'
						id='titleCC'
						placeholder='Enter title...'
						onChange={(event) => setTitle(event.target.value)}
					/>
				</div>
				<div className='titleButton'>
					<Button
						type='button'
						onClick={()=>props.addCourse(createNewCourse())}
					>Create course</Button>
				</div>
			</div>
			<div className='descriptionCC '>
				<label htmlFor='descriptionCC'>Description</label>
				<textarea
					className='textareaCC '
					id='descriptionCC'
					rows={4}
					placeholder='Enter description'
					onChange={(event) => setDescription(event.target.value)}
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
							onChange={event => setNewAuthorName(event.target.value)}
						/>
						<br />
						<Button type='button'
								onClick ={()=>props.addAuthor(createNewAuthor())}>
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
		</div>
	);
}
export default CreateCourse;
