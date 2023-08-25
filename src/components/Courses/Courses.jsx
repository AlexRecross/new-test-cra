import React from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';

function Courses() {
	return (
		<div className='courses'>
			<SearchBar />
			<CourseCard />
		</div>
	);
}

export default Courses;
