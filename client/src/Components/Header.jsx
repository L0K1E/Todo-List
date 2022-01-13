import React from "react";
import { formatDate } from "../utils/formatDate";
import { days } from "../utils/days";

const Header = () => {
	const date = new Date();
	const day = date.getDay();

	return (
		<header className="header">
			<h1>
				{days[day]}, {formatDate(date.toLocaleDateString("en-GB"))}
			</h1>
		</header>
	);
};

export default Header;
