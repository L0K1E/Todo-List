import React, { useEffect, useState } from "react";
import { Headers, Input } from "./Components";
import { useList } from "./context/ListProvider";
import "./App.css";
import ListItem from "./Components/ListItem";

const App = () => {
	const { items, loading, addNewListItem } = useList();
	const [newItem, setNewItem] = useState("");

	useEffect(() => {
		const date = new Date();
		document.title = `Todo, ${date.toLocaleDateString("en-GB")}`;
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		addNewListItem(newItem);
	};

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
			<form onSubmit={handleSubmit}>
				<Input
					className="input"
					type="text"
					placeholder={'Add new item, Press "Enter" once you\'ve done typing'}
					onChange={e => setNewItem(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default App;
