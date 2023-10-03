import React from 'react';
import Button from '../../../../common/button';

function SearchBar({value, onChange, goToCreate}) {
	return (
		<div className='searchBar'>
			<div className='searchPanel'>
				<label>
					<input
						className='searchInput'
						type='search'
						placeholder='Enter course name or id...'
						value={value}
						onChange={onChange}
					/>
				</label>
				<input className='searchButton' type='button' value='Search' />
			</div>
			<div className='addButton'>
				<Button type='button' onClick={goToCreate}>
					Create new course
				</Button>
			</div>
		</div>
	);
}

export default SearchBar;
