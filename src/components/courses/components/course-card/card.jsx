import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col} from "reactstrap";
import formatToHoursAndMinutes from "../../../../helpers/format-to-hours-and-minutes";

export default function CCard ({course}) {

	return (
		<Card className='mt-1'>
			<CardBody >
				<Row xs='2'>
					<Col className='col-8'>
						<CardTitle tag="h5">
							{course.title}
						</CardTitle>
						<CardText>
							{course.description}
						</CardText>
					</Col>
					<Col className='col-4 mt-2'>
						<dl className='row'>
							<dt className='col-4'>Authors: </dt>
							<dd className='col-8 d-inline-block text-truncate'>
								{course.authors.join(', ')}
							</dd>
							<dt className='col-4'>Durations: </dt>
							<dd className='col-8'>
								{formatToHoursAndMinutes(course.duration)}
							</dd>
							<dt className='col-4'>Created: </dt>
							<dd className='col-8'>{course.creationDate}</dd>
						</dl>
						<Button color='success' className='col-12' outline>Show course</Button>
					</Col>
				</Row>
			</CardBody>
		</Card>
	)
}