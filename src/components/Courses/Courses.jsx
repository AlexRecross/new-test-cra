import React, { useState } from 'react';
import CourseCard from './Components/CourseCard/CourseCard';
import SearchBar from './Components/SearchBar/SearchBar';
import { mockedAuthorsList, mockedCoursesList } from '../../Constants';

function Courses(props) {
	const [searchValue, setSearchValue] = useState('');

	const filteredCourses = mockedCoursesList.filter(
		(course) =>
			course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			course.id.toLowerCase().includes(searchValue.toLowerCase())
	);
	return (
		<div className='courses'>
			<SearchBar
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				setResourceCC={props.setResourceCC}
			/>
			<CourseCard
				authorsList={mockedAuthorsList}
				coursesList={filteredCourses}
			/>
		</div>
	);
}

export default Courses;
