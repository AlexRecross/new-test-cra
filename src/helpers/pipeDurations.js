//hours to minutes
import React from "react";

function Duration({value}){
	function toHoursAndMinutes(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)} hours`
	}
	function padToTwoDigits(num) {
		return num.toString().padStart(2, '0');
	}
	return (
		<p><b>Duration:</b> {toHoursAndMinutes(value)}</p>
	)
}

export default Duration;
