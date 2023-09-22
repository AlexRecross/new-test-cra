import React from 'react';
import Button from '../../../../common/Button';

function SearchBar(props) {
	return (
		<div className='searchBar'>
			<div className='searchPanel'>
				<label>
					<input
						className='searchInput'
						type='search'
						placeholder='Enter course name or id...'
						value={props.value}
						onChange={props.onChange}
					/>
				</label>
				<input className='searchButton' type='button' value='Search' />
			</div>
			<div className='addButton'>
				<Button
					type='button'
					onClick={props.setResourceCC}
				>
					Create new course
				</Button>
			</div>
		</div>
	);
}

export default SearchBar;
