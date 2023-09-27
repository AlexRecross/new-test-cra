import React, { useState, useMemo } from 'react';
import './App.css';
import {mockedCoursesList, mockedAuthorsList} from "./Constants";
import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/Create courses/CreateCourse';


function App() {
	const [page, setPage] = useState('courses')

	const [courses, setCourses] = useState(mockedCoursesList)
	const [authors, setAuthors] = useState(mockedAuthorsList)


	const Component = useMemo(() => {
		switch (page) {
			default: return Courses;
			case 'create-courses': return CreateCourse;
		}
	}, [page])

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

export default App;