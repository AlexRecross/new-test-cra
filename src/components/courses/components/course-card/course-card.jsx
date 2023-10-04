import React from 'react';
import styles from './course-card.module.css'
import Button from '../../../../common/button';
import Duration from "../../../duration/durations";

function CourseCard({courses, authors}) {
	return (
		<ul>
			{courses.map((course) => {
				return (
					<li key={course.id} className={styles.courseCard}>
						<div className={styles.report}>
							<h2>{course.title}</h2>
							<p>{course.description}</p>
						</div>
						<div className={styles.specification}>
							<div className={styles.authors}>
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
