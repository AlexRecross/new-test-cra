import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/Create courses/CreateCourse';

function App() {
	const [resource, setResource] = useState(
		<Courses setResourceCC={setResourceCC} />
	);
	function setResourceCC() {
		setResource(<CreateCourse />);
	}

	return (
		<div>
			<Header />
			{resource}
		</div>
	);
}

export default App;
