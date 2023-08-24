import React from 'react';
import { mockedCoursesList, mockedAuthorsList } from '../../Constants';
import Button from '../../common/Button';

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
							<p>
								<b>Authors: </b>
								{obj.authors}
							</p>
							<p>
								<b>Duration: </b>
								{obj.duration}
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
