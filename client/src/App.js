import React, { useEffect } from "react";
import { Headers, Input } from "./Components";
import { useList } from "./context/ListProvider";
import "./App.css";
import ListItem from "./Components/ListItem";

const App = () => {
	const { items, loading } = useList();

	useEffect(() => {
		const date = new Date();
		document.title = `Todo, ${date.toLocaleDateString("en-GB")}`;
	}, []);

	return (
		<div>
			<Headers />
			<div className="list-item-container">
				{loading ? (
					<h1 style={{ textAlign: "center" }}>Loading...</h1>
				) : (
					items.map(item => (
						<ListItem
							key={item.id}
							id={item.id}
							content={item.Content}
							isCompleted={item.IsCompleted}
						/>
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
