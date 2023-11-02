import React, { useState } from 'react';
import _ from 'lodash';
import { CardColumns, Container, Row } from 'reactstrap';
import SearchBar from './components/search-bar/search-bar';
import CCard from './components/course-card/card';

export default function Courses({ courses, showCreateCourse }) {
  // search component functionality
  const [searchValue, setSearchValue] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const searchCourse = (event) => {
    event.preventDefault();
    const coursesFiltered = courses.filter(
      (course) => course.id.toLowerCase().includes(searchValue.toLowerCase())
        || course.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredCourses(coursesFiltered);
  };
  return (
    <Container fluid className="border my-1">
      <Row className="mt-1">
        <SearchBar
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          searchCourse={searchCourse}
          showCreateCourse={showCreateCourse}
        />
      </Row>
      <Row>
        <CardColumns className="mt-1">
          {!_.isEmpty(filteredCourses)
            ? filteredCourses.map((course) => (
              <CCard
                key={course.id}
                course={course}
              />
            )) : null}
        </CardColumns>
      </Row>
    </Container>
  );
}
