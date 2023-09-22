import React from 'react';
import Button from '../../../../common/Button';
import toHoursAndMinutes from '../../../../helpers/pipeDurations';

function CourseCard(props) {

	//Authors Name Getter

	function getNameByID(identify) {
		let name = '';
		for (let i = 0; i < props.authorsList.length; i++) {
			let author = props.authorsList[i];
			if (author.id === identify) {
				name = ' ' + author.name;
			}
		}
		return name;
	}
	function authorsNames(arr) {
		let authorsNames = [];
		for (let i = 0; i < arr.length; i++) {
			let item = arr[i];
			let name = getNameByID(item);
			authorsNames.push(name);
		}
		return authorsNames;
	}

	return (
		<ul>
			{props.coursesList.map((obj) => {
				return (
					<li key={obj.id} className='courseCard'>
						<div className='report'>
							<h2>{obj.title}</h2>
							<p>{obj.description}</p>
						</div>
						<div className='specification'>
							<div className='authors'>
								<b>Authors: </b>
								{authorsNames(obj.authors)}
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
								onClick={() => {
									console.log('course showed');
								}}
							>Show course</Button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default CourseCard;
