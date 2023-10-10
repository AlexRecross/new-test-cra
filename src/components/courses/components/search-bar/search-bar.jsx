import React from 'react';
import styles from './search-bar.module.css'
import Button from '../../../../common/button';
import Input from "../../../../common/input";

function SearchBar({ value, onChange, searchCourse, showCreateCourse }) {
	return (
		<form
			className={styles.searchBar}
			onSubmit={searchCourse}
			action='#'
			method="get"
		>
			<div>
				<Input
					labelName={'Search course: '}
				  inputId={'inputForSearchbar'}
				  type={'search'}
					placeholder={'Enter course name or id...'}
					value={value}
					onChange={onChange}
				/>
			</div>
			<div>
				<Button
					type='submit'
					onClick={searchCourse}
				>
					Search course
				</Button>
				<Button
					type='button'
					onClick={showCreateCourse}
				>
					Create new course
				</Button>
			</div>
		</form>
	);
}

export default SearchBar;
