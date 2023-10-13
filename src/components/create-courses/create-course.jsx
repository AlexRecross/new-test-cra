import React, {useEffect, useState} from 'react';
import styles from './create-course.module.css'
import Button from '../../common/button';
import Duration from "../duration/durations";
import Input from "../../common/input";
import AuthorsLists from "./component/authors-lists";
import AddNewAuthor from "./component/create-new-author";
import { v4 as uuidv4 } from 'uuid';

function CreateCourse({authors, addAuthor, addCourse, goToCourses}) {

	// AuthorsLists states and functionality
	const [authorsList, setAuthorsList] = useState(authors);

	useEffect( () => {
		setAuthorsList(authors.map(author => ({ ...author, selected: false })))
	}, [authors])


	//"Add New Author" functionality
	function addNewAuthorToList(newAuthor) {
		newAuthor !== undefined ? addAuthor(newAuthor) : console.log('newAuthor false',newAuthor)
	}

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
		if(event.target.value !== '') {
			return
		}
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

	function setDuration(value) {
		setFormState(prevState => {
			return {
				...prevState,
				duration: value
			}
		})
	}

	function setId() {
		setFormState(prevState => {
			return {
				...prevState,
				id: uuidv4()
			}
		})
	}

	function setCreationDate() {
		setFormState(prevState => {
			return {
				...prevState,
				creationDate: new Date().toLocaleString().slice(0,10).replace(/\./g,'/')
			}
		})
	}

	function setAuthors() {
		const ids = getAuthorsId()
		// console.log('selected authors id`s', ids)
		setFormState(prevState => {
			return {
				...prevState,
				authors: ids
			}
		})
	}

	function getAuthorsId() {
		const authorsId = []
		for(let i = 0; i < authorsList.length; i++) {
			if(authorsList[i].selected){
				let id = authorsList[i].id
				authorsId.push(id)
			}
		}
		return authorsId
	}

	// function validateCourseFormData() {
	// 	if( title === '') {
	// 		alert('Field "Title" is not filled in!')
	// 		return false
	// 	}
	// 	if( description === '') {
	// 		alert('Field "Description" is not filled in!')
	// 		return false
	// 	}
	// 	if( authorsSelected.length < 2) {
	// 		alert('The course must include at least two authors!')
	// 		return false
	// 	}
	// 	if(duration <= 0) {
	// 		alert('Field "Duration" is not filled in!')
	// 		return false
	// 	}
	// 	return true
	// }

	function createNewCourse() {
		setId();
		setCreationDate();
		setAuthors()
		console.log('formState', formState);
		const newCourse = formState;
		console.log('newCourse', newCourse);
		return newCourse
	}

	function handleSubmit(e){
		e.preventDefault();
		const course = createNewCourse()
		console.log('course', course)
		// if(!validateCourseFormData()){
		// 	return alert('Form not valid');
		// }
		// const course = getCourseFormData();
		// addCourse(course)
		// goToCourses()
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
							onChange={event => setDuration(parseInt(event.target.value, 10))}
						/>
						<Duration value={formState.duration} />
					</div>
				</div>
				<AuthorsLists
					authorsList={authorsList}
					setAuthorsList={setAuthorsList}
				/>
			</div>
		</form>
	);
}
export default CreateCourse;
