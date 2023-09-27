import React, { useState, useMemo } from 'react';
import './App.css';
import {mockedCoursesList, mockedAuthorsList} from "./Constants";
import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/Create courses/CreateCourse';
// import {v4 as uuidv4} from "uuid";


// function App() {
// 	// global states
// 	const [courses, setCourses] = useState(mockedCoursesList)
// 	const [authors, setAuthors] = useState(mockedAuthorsList)
// 	// const [resource, setResource] = useState(<CourseListWithProps />);
//
// 	// create course states
// 	// add new author
// 	const [newAuthorName, setNewAuthorName] = useState('');
//
// 	function addNewAuthor() {
//
// 		const input = document.getElementById('InputAuthorsName');
// 		if (!/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(newAuthorName)) {
// 			return alert('Please enter your FullName');
// 		}
// 		const newAuthor = { id: uuidv4(), name: newAuthorName};
// 		console.log(newAuthor)
// 		const newAuthors = authors.concat(newAuthor);
// 		console.log(newAuthors);
// 		setAuthors(newAuthors);
// 		console.log(authors);
// 		input.value = ''
// 	}
//
// 	// function setNewAuthors(authors) {
// 	// 	setAuthors(authors)
// 	// }
//
// 	// function setCCActive() {
// 	// 	setResource(<CreateCourseWithProps />)
// 	// }
// 	// function setCourseListActive() {
// 	// 	setResource(<CourseListWithProps />)
// 	// }
// 	//
// 	// function CourseListWithProps() {
// 	// 	return (
// 	// 		<Courses
// 	// 			courses = {courses}
// 	// 			setCourses = {setCourses}
// 	// 			authors = {authors}
// 	// 			setResourceCC = {setCCActive}
// 	// 		/>
// 	// 	)
// 	// }
// 	// function CreateCourseWithProps() {
// 	// 	return(
// 	// 		<CreateCourse
// 	// 			courses={courses}
// 	// 			setCourses={setCourses}
// 	// 			authors={authors}
// 	// 			setAuthors={setNewAuthors}
// 	// 			setResourceCL={setCourseListActive}
// 	// 			addNewAuthor={addNewAuthor}
// 	// 			newAuthorNameValue={newAuthorName}
// 	// 			newAuthorNameOnChange={(event) => setNewAuthorName(event.target.value)}
// 	//
// 	// 		/>
// 	// 	)
// 	// }
//
// 	return (
// 		<div>
// 			<Header />
// 			<CreateCourse
// 				courses={courses}
// 				setCourses={setCourses}
// 				authors={authors}
// 				// setAuthors={setNewAuthors}
// 				// setResourceCL={setCourseListActive}
// 				addNewAuthor={addNewAuthor}
// 				newAuthorNameValue={newAuthorName}
// 				newAuthorNameOnChange={(event) => setNewAuthorName(event.target.value)}
//
// 			/>
// 			<Courses
// 				courses = {courses}
// 				setCourses = {setCourses}
// 				authors = {authors}
// 				// setResourceCC = {setCCActive}
// 			/>
// 			{/*{resource}*/}
// 		</div>
// 	);
// }
//
// export default App;

function NewApp() {
	const [page, setPage] = useState('courses')

	const [courses, setCourses] = useState(mockedCoursesList)
	const [authors, setAuthors] = useState(mockedAuthorsList)


	const Component = useMemo(() => {
		switch (page) {
			default: return Courses;
			case 'create-courses': return CreateCourse;
		}
	}, [page])

	// console.log('render App')
	console.log('authors in App', authors)
	// console.log('courses in App', courses)

return (
	<div>
		<Header />
		<Component
			courses={courses}
			addCourse={course => setCourses(courses.concat(course))}
			authors={authors}
			addAuthor={author => setAuthors(authors.concat(author))}
			goToCourses={() => setPage('courses')}
			goToCreate={() => setPage('create-courses')}
		/>
	</div>
)
}

export default NewApp;