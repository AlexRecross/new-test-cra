import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/Create courses/CreateCourse';

function App() {
	const [resourse, setResourse] = useState(
		<Courses setResuorseCC={setResuorseCC} />
	);
	function setResuorseCC() {
		setResourse(<CreateCourse />);
	}

	return (
		<div>
			<Header />
			{resourse}
		</div>
	);
}

export default App;
