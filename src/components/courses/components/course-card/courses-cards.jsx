import React from 'react';
import { Button, List} from "reactstrap";
import toHoursAndMinutes from "../../../../common/to-hours-and-minutes";

function CoursesCards({courses, authors}) {

	function authorsNameById(authorsId) {
		return authorsId.map(authorId => authors.find(({ id }) => id === authorId)?.name).join(', ')
	}

	return (
		<List className='mt-1'>
			{courses.map((course) => {
				return (
					<li key={course.id} className='row border border-success mt-1 mx-0'>
						<dl className='col-7 m-1' >
							<dt><b>{course.title}</b></dt>
							<dd>{course.description}</dd>
						</dl>
						<div className='col-4 m-1'>
							<dl className='row'>
								<dt className='col-4'><b>Authors: </b></dt>
								<dd className='col-8 d-inline-block text-truncate'>
									{authorsNameById(course.authors)}
								</dd>
								<dt className='col-4'><b>Durations: </b></dt>
								<dd className='col-8'>
									{toHoursAndMinutes(course.duration)}
								</dd>
								<dt className='col-4'><b>Created: </b></dt>
								<dd className='col-8'>{course.creationDate}</dd>
								<Button color='success' outline>Show course</Button>
							</dl>
						</div>
					</li>
				);
			})}
		</List>
	);
}

export default CoursesCards;
