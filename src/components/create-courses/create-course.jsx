import React, { useState, useEffect } from 'react';
import styles from './create-course.module.css'
import Button from '../../common/button';
import Duration from "../duration/durations";
import AuthorsMap from "./component/authors-map";
import { v4 as uuidv4 } from 'uuid';

function CreateCourse({authors, addAuthor, addCourse, goToCourses}) {

	//"Add New Author" functionality
	const [newAuthorName, setNewAuthorName] = useState('');
	function getNewAuthor(){
		const input = document.getElementById('InputAuthorsName');
		if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(newAuthorName)) {
			input.value = ''
			return alert('Please enter your FullName');
		}
		const newAuthor = { id: uuidv4(), name: newAuthorName};
		input.value = ''
		setNewAuthorName('')
		return newAuthor
	}

	// Authors list selected and nonSelected template and functionality
	const [authorsList, setAuthorsList] = useState(authors);
	const authorsNotSelected = authorsList.filter(({ selected }) => !selected);
	const authorsSelected = authorsList.filter(({ selected }) => selected);
	useEffect( () => {
		setAuthorsList(authors.map(author => ({ ...author, selected: false })))
	}, [authors])

	// Form States, data and functionality
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	function getAuthorsId() {
		const authorsId = []
		if(authorsSelected.length < 2){
			return alert('course should have 2 authors at least')
		}else{
			for(let i = 0; i < authorsSelected.length; i++){
				let id = authorsSelected[i].id;
				authorsId.push(id)
			}
		}
		return authorsId
	}

	function getCourseFormData() {
		const creationDate = new Date().toLocaleString().slice(0,10).replace(/\./g,'/')
		return {
			id:  uuidv4(),
			title: title,
			description: description,
			creationDate: creationDate,
			duration: duration,
			authors: getAuthorsId()
		}
	}

	function validateCourseFormData() {
		if( title === '') {
			alert('Field "Title" is not filled in!')
			return false
		}
		if( description === '') {
			alert('Field "Description" is not filled in!')
			return false
		}
		if( authorsSelected.length < 2) {
			alert('The course must include at least two authors!')
			return false
		}
		if(duration <= 0) {
			alert('Field "Duration" is not filled in!')
			return false
		}
		return true
	}

	function handleSubmit(e){
		e.preventDefault();
		if(!validateCourseFormData()){
			return alert('Form not valid');
		}
		const course = getCourseFormData();
		addCourse(course)
		goToCourses()
	}

	return (
		<form
			name='createCourseForm'
			className={styles.createCourseForm}
			onSubmit={handleSubmit}
			action='#'
			method="get"
		>
			<Button type='button' onClick={goToCourses}> Back to courses</Button>
			<div className={styles.createCourseHeader}>
				<div className={styles.inputTxtCC}>
					<label htmlFor='titleCC'>Title</label>
					<input
						type='text'
						id='titleCC'
						placeholder='Enter title...'
						onChange={(event) => setTitle(event.target.value)}
					/>
				</div>
				<div className={styles.titleButton}>
					<Button
						type='submit'
					>
						Create course
					</Button>
				</div>
			</div>
			<div className={styles.descriptionCC}>
				<label htmlFor='descriptionCC'>Description</label>
				<textarea
					className={styles.textareaCC}
					id='descriptionCC'
					rows={4}
					placeholder='Enter description'
					onChange={(event) => setDescription(event.target.value)}
				/>
			</div>
			<div className={styles.specificationCC}>
				<div className={styles.durationAndAuthorCC}>
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
						<Button type='button' onClick={() => {
							const newAuthor =getNewAuthor()
							newAuthor !== undefined ? addAuthor(newAuthor) : console.log('newAuthor false',newAuthor)
						}}>
							Add new author
						</Button>
					</div>
					<div className={styles.durationAndAuthorCC}>
						<div className={styles.inputTxtCC}>
							<h2>Duration</h2>
							<label htmlFor='durationCC'>Duration</label>
							<input
								type='number'
								id='durationCC'
								name='duration'
								placeholder='Enter duration in minutes'
								onChange={(event) => setDuration(parseInt(event.target.value, 10))}
							/>
							<Duration value={duration} />
						</div>
					</div>
				</div>
				<div className={styles.authorsListCC}>
					<AuthorsMap
						authorsList={authorsList}
						setAuthorsList={setAuthorsList}
						authors={authorsNotSelected}
						listName='Authors'
						buttonName='Add author'
					/>
					<AuthorsMap
						authorsList={authorsList}
						setAuthorsList={setAuthorsList}
						authors={authorsSelected}
						listName='Course authors'
						buttonName='Delete author'
					/>
				</div>
			</div>
		</form>
	);
}
export default CreateCourse;
