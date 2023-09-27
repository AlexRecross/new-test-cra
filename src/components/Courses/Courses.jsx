import React, { useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';


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
				setResourceCC={goToCreate}
			/>
			<CourseCard
				authors={authors}
				courses={filteredCourses}
			/>
		</div>
	);
}

export default Courses;
