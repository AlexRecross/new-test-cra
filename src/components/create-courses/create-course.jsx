import React, {useEffect, useState} from 'react';
import { Container, Button, Input, Label, Form, Row} from "reactstrap";
import toHoursAndMinutes from "../../common/to-hours-and-minutes";
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
		<Container fluid className='border  mt-1'>
			<Form
				name='createCourseForm'
				// className={styles.createCourseForm}
				onSubmit={handleSubmit}
				action='#'
				method="get"
			>
				<Button
					className='mt-1 col-12'
					color='danger'
					outline
					size='sm'
					type='button'
					onClick={goToCourses}
				>
					Back to courses
				</Button>
				<Label
					for='courseTitle'
					size='sm'
				>
					<b>Title:</b>
				</Label>
				<Input
					bsSize='sm'
					id='courseTitle'
					name='title'
					type='text'
					placeholder='Enter title'
					onChange={handleChange}
				/>
				<Label
					for='courseDescription'
					size='sm'
				>
					<b>Description:</b>
				</Label>
				<Input
					// bsSize='sm'
					id='courseDescription'
					name='description'
					type='textarea'
					placeholder='Enter description'
					onChange={handleChange}
				/>
				<Label
					size='sm'
					for='courseDuration'
				>
					<b>Duration: {toHoursAndMinutes(formState.duration)}</b>
				</Label>
				<Input
					bsSize="sm"
					id="courseDuration"
					name="duration"
					placeholder="Enter duration in minutes"
					type="number"
					// value={formState.duration}
					onChange={handleChange}
				/>
				<Row xs='2' className='mt-1 mx-0'>
					<AddNewAuthor
						addAuthorToList={addNewAuthorToList}
					/>
					<AuthorsLists
						authorsList={authorsList}
						setAuthorsList={setAuthorsList}
					/>
				</Row>
				<Button
					className='my-1 col-12'
					color='success'
					outline
					size='sm'
					type='submit'
				>
					Create course
				</Button>
			</Form>
		</Container>
	);
}
export default CreateCourse;
