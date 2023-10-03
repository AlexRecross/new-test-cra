import React, { useState, useMemo } from 'react';
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