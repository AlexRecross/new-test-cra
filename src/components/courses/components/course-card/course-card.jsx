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
						<dl className={styles.report}>
							<dt><b>{course.title}</b></dt>
							<dd>{course.description}</dd>
						</dl>
						<div className={styles.specification}>
							<dl >
								<dt><b>Authors: </b></dt>
								<dd className={styles.authors}>
									{course.authors.map(authorId => authors.find(({ id }) => id === authorId)?.name).join(', ')}
								</dd>
								<Duration value={course.duration}/>
								<dt><b>Created: </b></dt>
								<dd>{course.creationDate}</dd>
								<Button>Show course</Button>
							</dl>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default CourseCard;
