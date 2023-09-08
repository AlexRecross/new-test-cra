import React, { useState } from 'react';
import Button from '../../common/Button';
import toHoursAndMinutes from '../../helpers/pipeDurations';
import { mockedAuthorsList } from '../../Constants';
// import { mockedCoursesList } from '../../Constants';

function CreateCourse() {
	const [duration, setDuration] = useState(0);
	function durationToHourse() {
		return toHoursAndMinutes(duration);
	}
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
				{mockedAuthorsList.map((author) => {
					return (
						<li key={author.id}>
							<span>{author.name}</span>
							<Button name='Add author'></Button>
						</li>
					);
				})}
			</ul>
		);
	}
	return (
		<form className='createCourseForm'>
			<Header />
			<Description />
			<div className='specificationCC'>
				<div className='durationAndAuthorCC'>
					<div className='durationAndAuthorCC'>
						<h2>Add author</h2>
						<label htmlFor='authorNameCC'>Author name</label>
						<input
							type='text'
							id='authotNameCC'
							name='name'
							placeholder='Enter author name...'
						/>
						<Button
							name='Create author'
							function={() => {
								console.log('Author created');
							}}
						/>
					</div>
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
	);
}
export default CreateCourse;
