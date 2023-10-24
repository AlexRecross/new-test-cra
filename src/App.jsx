import React, { useState, useMemo } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {mockedCoursesList, mockedAuthorsList} from "./constants";
import Header from './components/header/header.jsx';
import Courses from './components/courses/courses';
import CreateCourse from "./components/create-courses/create-course";

function App() {
	//common data
	const [courses, setCourses] = useState(mockedCoursesList)
	const [authors, setAuthors] = useState(mockedAuthorsList)

	//template and render
	const [page, setPage] = useState('courses')
	const Component = useMemo(() => {
		switch (page) {
			default: return Courses;
			case 'create-courses': return CreateCourse;
		}
	}, [page])
	return (
		<Container fluid>
			<Header />
			<Component
				courses={courses}
				addCourse={course => setCourses(courses.concat(course))}
				authors={authors}
				addAuthor={author => setAuthors(authors.concat(author))}
				goToCourses={() => setPage('courses')}
				showCreateCourse={() => setPage('create-courses')}
			/>
		</Container>
	)
}

export default App;