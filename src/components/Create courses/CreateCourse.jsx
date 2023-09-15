import React, { useState } from 'react';
import Button from '../../common/Button';
import toHoursAndMinutes from '../../helpers/pipeDurations';
import { mockedAuthorsList } from '../../Constants';
import { v4 as uuidv4 } from 'uuid';
// import { mockedCoursesList } from '../../Constants';

function CreateCourse() {
	const [duration, setDuration] = useState(0);
	const [authorsList, addAuthors] = useState(mockedAuthorsList);
	function durationToHourse() {
		return toHoursAndMinutes(duration);
	}
	// const authorsList = mockedAuthorsList;
	const authors = mockedAuthorsList.map((o) => ({ ...o, selected: false }));
	function Header() {
		return (
			<div className='createCourseHeader'>
				<div className='titleCC inputTxtCC'>
					<label htmlFor='titleCC'>Title</label>
					<input type='text' id='titleCC' placeholder='Enter title...' />
				</div>
				<div className='titleButton'>
					<Button
						name='Create course'
						function={() => {
							console.log('course created');
						}}
					/>
				</div>
			</div>
		);
	}
	function AddNewAuthor() {
		function handleSubmit() {
			const input = document.getElementById('InputAuthorsName');
			if (/^[A-Z][A-Za-z]+\s+[A-Z][A-Za-z]/.test(input.value)) {
				const authorName = input.value;
				const newAuthor = { id: uuidv4(), name: authorName };
				addAuthors(mockedAuthorsList.push(newAuthor));
			} else {
				console.log('Please enter your Fullname');
			}
		}

		return (
			<div>
				<h2>Add author</h2>
				<input
					id='InputAuthorsName'
					type='text'
					name='name'
					placeholder='Enter author name...'
				/>
				<br />
				<button onClick={handleSubmit}>Add</button>
			</div>
		);
	}

	function Description() {
		return (
			<div className='descriptionCC '>
				<label htmlFor='descriptionCC'>Description</label>
				<textarea
					className='textareaCC '
					id='descriptionCC'
					name='description'
					rows={4}
					placeholder='Enter description'
				/>
			</div>
		);
	}
	function AviableAuthors() {
		return (
			<ul className='authorsListCC'>
				<b>Authors</b>
				{authors.map((author) => {
					return (
						<li key={author.id}>
							<span>{author.name}</span>
							<Button name='Add author' />
						</li>
					);
				})}
			</ul>
		);
	}
	return (
		<div>
			<form className='createCourseForm'>
				<Header />
				<Description />
				<div className='specificationCC'>
					<div className='durationAndAuthorCC'>
						<AddNewAuthor />
						<div className='durationAndAuthorCC'>
							<div className='inputTxtCC'>
								<h2>Duration</h2>
								<label htmlFor='durationCC'>Duration</label>
								<input
									type='number'
									id='durationCC'
									placeholder='Enter duration in minutes'
									onChange={(event) => setDuration(event.target.value)}
								/>
								<b>Duration: {durationToHourse()}</b>
							</div>
						</div>
					</div>
					<div className='authorsListCC'>
						<AviableAuthors />
					</div>
				</div>
			</form>
		</div>
	);
}
export default CreateCourse;
