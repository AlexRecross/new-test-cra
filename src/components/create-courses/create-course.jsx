import React, { useState, useEffect } from 'react';
import styles from './create-course.module.css'
import Button from '../../common/button';
import Duration from "../duration/durations";
import Input from "../../common/input";
import AuthorsMap from "./component/authors-map";
import AddNewAuthor from "./component/create-new-author";
import { v4 as uuidv4 } from 'uuid';

function CreateCourse({authors, addAuthor, addCourse, goToCourses}) {

	//"Add New Author" functionality
	function addNewAuthorToList(newAuthor) {
		newAuthor !== undefined ? addAuthor(newAuthor) : console.log('newAuthor false',newAuthor)
	}
	// Authors list selected and nonSelected template and functionality
	const [authorsList, setAuthorsList] = useState(authors);
	const authorsNotSelected = authorsList.filter(({ selected }) => !selected);
	const authorsSelected = authorsList.filter(({ selected }) => selected);
	useEffect( () => {
		setAuthorsList(authors.map(author => ({ ...author, selected: false })))
	}, [authors])

	// Form States, data and functionality
	const [formState, setFormState] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: []
	})

	function setTitle(event) {
		setFormState(prevState => {
			return {
				...prevState,
				title: event.target.value
			}
		})
	}

	function setDescription(event) {
		setFormState(prevState => {
			return {
				...prevState,
				description: event.target.value
			}
		})
	}

	function setDuration(event) {
		setFormState(prevState => {
			return {
				...prevState,
				duration: parseInt(event.target.value, 10)
			}
		})
	}
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// const [duration, setDuration] = useState(0);

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
			// title: title,
			// description: description,
			creationDate: creationDate,
			// duration: duration,
			authors: getAuthorsId()
		}
	}

	function validateCourseFormData() {
		// if( title === '') {
		// 	alert('Field "Title" is not filled in!')
		// 	return false
		// }
		// if( description === '') {
		// 	alert('Field "Description" is not filled in!')
		// 	return false
		// }
		if( authorsSelected.length < 2) {
			alert('The course must include at least two authors!')
			return false
		}
		// if(duration <= 0) {
		// 	alert('Field "Duration" is not filled in!')
		// 	return false
		// }
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
				<Input
					inputClassName={styles.inputTxtCC}
					labelName='Title:'
					inputId='inputForTitleCC'
					type='text'
					placeholder='Enter title...'
					onChange={event => setTitle(event)}
				/>
				<div className={styles.titleButton}>
					<Button
						type='submit'
					>
						Create course
					</Button>
				</div>
			</div>
			<div className={styles.descriptionCC}>
				<label htmlFor='descriptionCC'><b>Description:</b></label>
				<textarea
					className={styles.textareaCC}
					id='descriptionCC'
					rows={4}
					placeholder='Enter description...'
					onChange={event => setDescription(event)}
				/>
			</div>
			<div className={styles.specificationCC}>
				<div className={styles.durationAndAuthorCC}>
					<AddNewAuthor
						className={styles.inputTxtCC}
						addAuthorToList={addNewAuthorToList}
					/>
					<div>
						<Input
							inputClassName={styles.inputTxtCC}
							labelName='Duration:'
							type='number'
							inputId='durationCC'
							name='Duration'
							placeholder='Enter duration in minutes'
							onChange={event => setDuration(event)}
						/>
						<Duration value={formState.duration} />
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
