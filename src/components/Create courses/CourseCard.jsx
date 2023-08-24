import React from 'react';
// import mockedCoursesList from '../../constants';

const test = [
	{
		id: 111,
		title: 'test Title',
		name: 'test Name',
		description: 'lorem ipsum',
	},
	{
		id: 222,
		title: 'test Title 2',
		name: 'test Name 2',
		description: 'lorem ipsum lorem ipsum',
	},
];

function CourseCard() {
	return (
		<div>
			{test.map((obj) => {
				return (
					<div key={obj.id} className='courseCard'>
						<h2>{obj.title}</h2>,<h3>{obj.name}</h3>
					</div>
				);
			})}
		</div>
	);
}

export default CourseCard;
