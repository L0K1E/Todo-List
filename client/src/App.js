import React, { useEffect } from "react";
import { Headers, Input } from "./Components";
import { useList } from "./context/ListProvider";
import "./App.css";
import ListItem from "./Components/ListItem";

const App = () => {
	const { list, loading } = useList();

	useEffect(() => {
		const date = new Date();
		document.title = `Todo, ${date.toLocaleDateString("en-GB")}`;
	}, []);

	return (
		<div>
			<Headers />
			<div className="list-item-container">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					list.map(item => (
						<ListItem key={item.id} content={item.content} isCompleted={item.isCompleted} />
					))
				)}
			</div>
			<Input
				className="input"
				type="text"
				placeholder={'Add new item, Press "Enter" one you\'ve done typing'}
			/>
		</div>
	);
};

export default App;
