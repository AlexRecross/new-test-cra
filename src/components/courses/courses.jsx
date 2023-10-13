import React, { useState } from 'react';
import styles from './courses.module.css'
import SearchBar from './components/search-bar/search-bar';
import CoursesCards from "./components/course-card/courses-cards";

export default function Courses({ courses, authors, showCreateCourse }) {

	//search component functionality
	const [searchValue, setSearchValue] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses)

	function searchCourse() {
		const coursesFiltered = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				course.id.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredCourses(coursesFiltered)
	}

	return (
		<div className={styles.courses}>
			<SearchBar
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				searchCourse={searchCourse}
				showCreateCourse={showCreateCourse}
			/>
			<CoursesCards
				authors={authors}
				courses={filteredCourses}
			/>
		</div>
	);
}


