import React from "react";
import { Headers, Input } from "./Components";

const App = () => {
	return (
		<div>
			<Headers />
			<Input type="text" placeholder="Add new item" />
		</div>
	);
};

export default App;
