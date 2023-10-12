import React, {useMemo} from "react";
import styles from './authors-lists.module.css'
import Button from "../../../common/button";

export default function AuthorsLists({ authorsList, setAuthorsList }) {

	const authorsNotSelected = authorsList.filter(({ selected }) => !selected);
	const authorsSelected = authorsList.filter(({ selected }) => selected);

	// const authorsNotSelected = useMemo( () => {
	// 	return authorsList.filter(({ selected }) => !selected);
	// }, authorsList)

	// const authorsSelected = useMemo( () => {
	// 	return authorsList.filter(({ selected }) => selected);
	// }, authorsList)


	function selectToggle(authorId) {
		const newArray = authorsList.filter((author) => author.id !== authorId);
		const author = authorsList.find(author => author.id === authorId);
		author.selected === true ?	author.selected = false : author.selected = true;
		newArray.push(author)
		setAuthorsList(newArray)
	}

	function nonSelectedList() {
		if(authorsNotSelected.length >= 1) {
			return (
				<ul>
					<b>Available authors:</b>
					{authorsNotSelected.map((author) => (
						<li key={author.id}>
							<span>{author.name}</span>
							<Button
								type='button'
								onClick={() => selectToggle(author.id)}
							>
								Add author
							</Button>
						</li>
					))}
				</ul>
			)
		} else {
			return (
				<ul>
					<li><b>Available authors empty</b></li>
				</ul>
			)
		}
	}

	function selectedList() {
		if(authorsSelected.length >= 1) {
			return (
				<ul>
					<b>Selected authors:</b>
					{authorsSelected.map((author) => (
						<li key={author.id}>
							<span>{author.name}</span>
							<Button
								type='button'
								onClick={() => selectToggle(author.id)}
							>
								Delete author
							</Button>
						</li>
					))}
				</ul>
			)
		} else {
			return (
				<ul>
					<li><b>Authors not selected</b></li>
				</ul>
			)
		}
	}

	// authorsNotSelected.length <= 0 ? console.log('authorsNotSelected', true, authorsNotSelected) : console.log('authorsNotSelected', false, authorsNotSelected)
	// authorsSelected.length <= 1 ? console.log('authorsSelected', true, authorsSelected) : console.log('authorsSelected', false, authorsSelected)

	return(
		<div className={styles.authorsLists}>
			{nonSelectedList()}
			{selectedList()}
		</div>
	)
}




// if (authors.length === 0) {
// 	return (
// 		<div>
// 			<h2>{listName}</h2>
// 			<br />
// 			<span>Author list is empty</span>
// 		</div>
// 	);
// } else {
// 	return (
// 		<div>
// 			<ul>
// 				<h2>{listName}</h2>
// 				{authors.map((author) => {
// 					function authorSelectToggle() {
// 						const newArray = authorsList.filter((obj) => obj.id !== author.id);
// 						author.selected === true ?	author.selected = false : author.selected = true;
// 						newArray.push(author)
// 						setAuthorsList(newArray)
// 					}
// 					return (
// 						<li key={author.id}>
// 							<span>{author.name}</span>
// 							<Button type='button' onClick={authorSelectToggle}>{buttonName}</Button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }

//
// <div className={styles.authorsListCC}>
// 	<AuthorsMap
// authorsList={authorsList}
// setAuthorsList={setAuthorsList}
// authors={authorsNotSelected}
// listName='Authors'
// buttonName='Add author'
// 	/>
// 	<AuthorsMap
// authorsList={authorsList}
// setAuthorsList={setAuthorsList}
// authors={authorsSelected}
// listName='Course authors'
// buttonName='Delete author'
// 	/>
// 	</div>