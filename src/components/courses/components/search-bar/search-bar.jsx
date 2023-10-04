import React from 'react';
import styles from './search-bar.module.css'
import Button from '../../../../common/button';

function SearchBar({ value, onChange, goToCreate }) {
	return (
		<div className={styles.searchBar}>
			<div>
				<label>
					<input
						className={styles.searchInput}
						type='search'
						placeholder='Enter course name or id...'
						value={value}
						onChange={onChange}
					/>
				</label>
			</div>
			<div>
				<Button
					type='button'
					onClick={goToCreate}
				>
					Create new course
				</Button>
			</div>
		</div>
	);
}

export default SearchBar;
