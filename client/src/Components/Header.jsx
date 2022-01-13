import React from "react";
import { days } from "../utils/days";

const Header = () => {
	const date = new Date();
	const day = date.getDay();

	return (
		<header>
			<h1>
				{days[day]}, {date.toLocaleDateString("en-GB")}
			</h1>
		</header>
	);
};

export default Header;
