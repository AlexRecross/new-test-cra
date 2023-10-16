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

	const handleChange = (evnt) => {
		setFormState((prev) => ({
			...prev,
			[evnt.target.name]: evnt.target.value
		}));
	};

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

	function validateCourseFormData(course) {
		if( course.title === '') {
			alert('Field "Title" is not filled in!')
			return false
		}
		if( course.description === '') {
			alert('Field "Description" is not filled in!')
			return false
		}
		if( course.authors.length < 2) {
			alert('The course must include at least two authors!')
			return false
		}
		if( course.duration <= 0) {
			alert('Field "Duration" is not filled in!')
			return false
		}
		return true
	}

	function createNewCourse() {
		const course = formState;
		course.id= uuidv4();
		course.creationDate= new Date().toLocaleString().slice(0,10).replace(/\./g,'/');
		course.authors= getAuthorsId()
		return course
	}

	function handleSubmit(e){
		e.preventDefault();
		const course =createNewCourse()
		if(!validateCourseFormData(course)){
			return alert('Form not valid');
		}else{
			addCourse(course)
			goToCourses()
		}
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
					inputName='title'
					inputId='inputForTitleCC'
					type='text'
					placeholder='Enter title...'
					onChange={handleChange}
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
					name='description'
					id='descriptionCC'
					rows={4}
					placeholder='Enter description...'
					onChange={handleChange}
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
							inputName='duration'
							type='number'
							inputId='durationCC'
							name='Duration'
							placeholder='Enter duration in minutes'
							onChange={handleChange}
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
