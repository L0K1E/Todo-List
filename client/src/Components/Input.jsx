import React from "react";

const Input = ({ type, placeholder, disabled, ...options }) => {
	return (
		<div>
			<input type={type} placeholder={placeholder} disabled={disabled} {...options} />
		</div>
	);
};

export default Input;
