import React from "react";

export default function Input({ inputClassName, labelName, inputName, inputId, type, placeholder, value, onChange }) {
	return(
		<div className={inputClassName}>
			<label htmlFor={inputId}><b>{labelName}</b></label>
			<input
				id={inputId}
				name={inputName}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				/>
		</div>
	)
}