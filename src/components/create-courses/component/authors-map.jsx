import React from "react";
import Button from "../../../common/button";

function AuthorsMap({authors, authorsList, setAuthorsList, listName, buttonName}) {
	if (authors.length === 0) {
		return (
			<div>
				<h2>{listName}</h2>
				<br />
				<span>Author list is empty</span>
			</div>
		);
	} else {
		return (
			<div>
				<ul>
					<h2>{listName}</h2>
					{authors.map((author) => {
						function authorSelectToggle() {
							const newArray = authorsList.filter((obj) => obj.id !== author.id);
							author.selected === true ?	author.selected = false : author.selected = true;
							newArray.push(author)
							setAuthorsList(newArray)
						}
						return (
							<li key={author.id}>
								<span>{author.name}</span>
								<Button type='button' onClick={authorSelectToggle}>{buttonName}</Button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default AuthorsMap