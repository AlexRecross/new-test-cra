import React from 'react';
import Button from '../../../../common/Button';

function SearchBar() {
	return (
		<div className='searchBar'>
			<div className='searchPanel'>
				<label>
					<input
						className='searchInput'
						type='search'
						placeholder='Enter course name or id...'
					/>
				</label>
				<input className='searchButton' type='button' value='Search' />
			</div>
			<div className='addButton'>
				<Button
					name='Add new course'
					function={() => {
						console.log('new course added');
					}}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
