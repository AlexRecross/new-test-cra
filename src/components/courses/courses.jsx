import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import SearchBar from './components/search-bar/search-bar';
import CoursesCards from "./components/course-card/courses-cards";

export default function Courses({ courses, authors, showCreateCourse }) {

	//search component functionality
	const [searchValue, setSearchValue] = useState('');
	const [filteredCourses, setFilteredCourses] = useState(courses)

	const searchCourse = (event) => {
		event.preventDefault();
		const coursesFiltered = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
				course.id.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredCourses(coursesFiltered)
	}

	return (
		<Container fluid className='border my-1'>
			<Row className='mt-1'>
				<SearchBar
					value={searchValue}
					onChange={(event) => setSearchValue(event.target.value)}
					searchCourse={searchCourse}
					showCreateCourse={showCreateCourse}
				/>
			</Row>
			<Row>
				<CoursesCards
					authors={authors}
					courses={filteredCourses}
				/>
			</Row>
		</Container>
	);
}


