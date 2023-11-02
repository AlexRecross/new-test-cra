import React, { useState, useMemo } from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { mockedCoursesList, mockedAuthorsList } from './constants';
import Header from './components/header/header';
import Courses from './components/courses/courses';
import CreateCourse from './components/create-courses/create-course';

export default function App() {
  // common data
  const [authors, setAuthors] = useState(mockedAuthorsList);
  const [courses, setCourses] = useState(
    mockedCoursesList.map((course) => ({ ...course, authors: authorsNameById(course.authors) })),
  );

  function authorsNameById(authorsIDs) {
    return authorsIDs.map((authorId) => authors.find(({ id }) => id === authorId)?.name);
  }

  // template and render
  const [page, setPage] = useState('courses');
  const Component = useMemo(() => {
    switch (page) {
      case 'create-courses': return CreateCourse;
      default: return Courses;
    }
  }, [page]);
  return (
    <Container fluid>
      <Header />
      <Component
        courses={courses}
        addCourse={(course) => setCourses(courses.concat(course))}
        authors={authors}
        addAuthor={(author) => setAuthors(authors.concat(author))}
        goToCourses={() => setPage('courses')}
        showCreateCourse={() => setPage('create-courses')}
      />
    </Container>
  );
}
