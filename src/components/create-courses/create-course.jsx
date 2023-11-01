import React, {useEffect, useState} from 'react';
import { Container, Button, Input, Label, Form, Row, Col } from "reactstrap";
import formatToHoursAndMinutes from "../../helpers/format-to-hours-and-minutes";
import AuthorsLists from "./component/authors-lists";
import AddNewAuthor from "./component/create-new-author";
import { v4 as uuidv4 } from 'uuid';

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

export default function CreateCourse({authors, addAuthor, addCourse, goToCourses}) {
	// AuthorsLists states and functionality
	const [authorsList, setAuthorsList] = useState(authors);

	useEffect( () => {
		setAuthorsList(authors.map(author => ({ ...author, selected: false })))
	}, [authors])

	//"Add New Author" functionality
	function addNewAuthorToList(newAuthor) {
		newAuthor ? addAuthor(newAuthor) : console.log('newAuthor false',newAuthor)
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

	const handleChange = (event) => {
		setFormState((prev) => ({
			...prev,
			[event.target.name]: event.target.value
		}));
	};

	function getAuthorsId() {
		return authorsList.reduce( (newArr, author) => {
			if (author.selected) {
				newArr.push(author.name);
			}
			return newArr;
		}, []);
	}

	function createNewCourse() {
		return ({ ...formState,
			id: uuidv4(),
			creationDate: new Date().toLocaleString().slice(0,10).replace(/\./g,'/'),
			authors: getAuthorsId()
		})
	}

	function handleSubmit(e){
		e.preventDefault();
		const course =createNewCourse()
		if(!validateCourseFormData(course)){
			return alert('Form not valid');
		}
			addCourse(course)
			goToCourses()
	}

	return (
		<div>
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
			<Container fluid className='border border-primary mt-1'>
				<Form
					name='createCourseForm'
					// className={styles.createCourseForm}
					onSubmit={handleSubmit}
					action='#'
					method="get"
				>
					<Row xs='2'>
						<Col>
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
								<b>Duration: {formatToHoursAndMinutes(formState.duration)}</b>
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
						</Col>
						<Col className='mt-1'>
							{/*<Row xs='2' className='border border-info mt-2 mx-0'>*/}
							<AuthorsLists
								authorsList={authorsList}
								setAuthorsList={setAuthorsList}
							/>
							<AddNewAuthor
								addAuthorToList={addNewAuthorToList}
							/>
							{/*</Row>*/}
						</Col>
					</Row>
					<Button
						className='my-1 col-12'
						color='success'
						outline
						size='sm'
						type='submit'
					>
						Create
					</Button>
				</Form>
			</Container>
		</div>
	)
}
