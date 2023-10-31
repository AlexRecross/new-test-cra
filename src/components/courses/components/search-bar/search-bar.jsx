import React from 'react';
import { Button, Form, InputGroup, Container, Input, Label, Row, Col } from 'reactstrap';

export default function SearchBar({ value, onChange, searchCourse, showCreateCourse }) {
	return (
		<Container>
			<Row>
				<Col sm='10'>
					<Form
						type='get'
						onSubmit={searchCourse}
					>
						<InputGroup>
							<Label
								for="searchForm"
								size="sm"
							>
								Search course:
							</Label>
							<Input
								className='mx-1'
								bsSize="sm"
								id="searchForm"
								name="search"
								placeholder="Enter course name or id..."
								type="search"
								value={value}
								onChange={onChange}
							/>
							<Button
								color='warning'
								outline
								size='sm'
								type='submit'
							>
								Search course
							</Button>
						</InputGroup>
					</Form>
				</Col>
				<Col sm='2'>
					<Button
						color='danger'
						outline
						size='sm'
						type='button'
						onClick={showCreateCourse}
					>
						Create new course
					</Button>
				</Col>
			</Row>

		</Container>

	);
}