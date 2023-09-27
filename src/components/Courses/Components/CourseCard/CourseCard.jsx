import React from 'react';
import Button from '../../../../common/Button';
import Duration from '../../../../helpers/pipeDurations';

function CourseCard({courses, authors}) {

	return (
		<ul>
			{courses.map((course) => {
				return (
					<li key={course.id} className='courseCard'>
						<div className='report'>
							<h2>{course.title}</h2>
							<p>{course.description}</p>
						</div>
						<div className='specification'>
							<div className='authors'>
								<b>Authors: </b>
								{course.authors.map(authorId => authors.find(({ id }) => id === authorId)?.name).join(', ')}
							</div>
							<Duration value={course.duration}/>
							<p>
								<b>Created: </b>
								{course.creationDate}
							</p>
							<Button
								onClick={() => {
									console.log('course showed');
								}}
							>
								Show course
							</Button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default CourseCard;
