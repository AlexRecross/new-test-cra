import React, {useMemo} from "react";
import styles from './authors-lists.module.css'
import Button from "../../../common/button";

export default function AuthorsLists({ authorsList, setAuthorsList }) {

	const authorsNotSelected = useMemo( () => {
		return authorsList.filter(({ selected }) => !selected);
	}, [authorsList])

	const authorsSelected = useMemo( () => {
		return authorsList.filter(({ selected }) => selected);
	}, [authorsList])

	function selectToggle(authorId) {
		const newArray = authorsList.filter((author) => author.id !== authorId);
		const author = authorsList.find(author => author.id === authorId);
		author.selected === true ?	author.selected = false : author.selected = true;
		newArray.push(author)
		setAuthorsList(newArray)
	}

	return(
		<div className={styles.authorsLists}>
			{authorsNotSelected.length >= 1 ?
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
				:
				<ul>
					<li><b>Available authors empty</b></li>
				</ul>
			}
			{authorsSelected.length >= 1 ?
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
				:
				<ul>
					<li><b>Authors not selected</b></li>
				</ul>
			}
		</div>
	)
}


