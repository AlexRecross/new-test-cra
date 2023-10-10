import React from "react";

export default function Input({ inputClassName, labelName, inputId, type, placeholder, value, onChange }) {
	return(
		<div className={inputClassName}>
			<label htmlFor={inputId}><b>{labelName}</b></label>
			<input
				id={inputId}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				/>
		</div>
	)
}