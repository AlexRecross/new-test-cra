import React from 'react';
import { mockedCoursesList, mockedAuthorsList } from '../../Constants';
import Button from '../../common/Button';

//Duration time converter

function toHoursAndMinutes(totalMinutes) {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)} hours`;
}

function padToTwoDigits(num) {
	return num.toString().padStart(2, '0');
}

//Authors Name Getter
function getNameByID(identy) {
	let name = '';
	for (let i = 0; i < mockedAuthorsList.length; i++) {
		let author = mockedAuthorsList[i];
		if (author.id === identy) {
			name = ' ' + author.name;
		}
	}
	return name;
}
function authorNames(arr) {
	let authorsNames = [];
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		let name = getNameByID(item);
		authorsNames.push(name);
	}
	return authorsNames;
}

function CourseCard() {
	return (
		<div>
			{mockedCoursesList.map((obj) => {
				return (
					<div key={obj.id} className='courseCard'>
						<div className='report'>
							<h2>{obj.title}</h2>
							<p>{obj.description}</p>
						</div>
						<div className='description'>
							<div className='authors'>
								<b>Authors: </b>
								{authorNames(obj.authors)}
							</div>
							<p>
								<b>Duration: </b>
								{toHoursAndMinutes(obj.duration)}
							</p>
							<p>
								<b>Created: </b>
								{obj.creationDate}
							</p>
							<Button
								name='Show course'
								function={() => {
									console.log('course showed');
								}}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CourseCard;
