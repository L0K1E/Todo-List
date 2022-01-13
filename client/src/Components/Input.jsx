import React from "react";

const Input = ({ type, placeholder, disabled }) => {
	return (
		<div>
			<input className="input" type={type} placeholder={placeholder} disabled={disabled} />
		</div>
	);
};

export default Input;
