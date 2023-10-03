import React, { useState } from 'react';
import CourseCard from './components/course-card/course-card';
import SearchBar from './components/search-bar/search-bar';

function Courses({ courses, authors, goToCreate }) {

	//search component functionality
	const [searchValue, setSearchValue] = useState('');
	const filteredCourses = courses.filter(
		(course) =>
			course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			course.id.toLowerCase().includes(searchValue.toLowerCase())
	);
	return (
		<div className='courses'>
			<SearchBar
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				goToCreate={goToCreate}
			/>
			<CourseCard
				authors={authors}
				courses={filteredCourses}
			/>
		</div>
	);
}

export default Courses;
