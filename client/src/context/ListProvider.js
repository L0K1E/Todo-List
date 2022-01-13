import { createContext, useContext, useState, useEffect } from "react";

export const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
	const [list, setList] = useState([
		{
			id: 1,
			content: "Hello World",
			isCompleted: false,
		},
		{
			id: 2,
			content: "Complete Styling",
			isCompleted: false,
		},
		{
			id: 3,
			content: "Complete context",
			isCompleted: true,
		},
		{
			id: 4,
			content: "Buy Eggs",
			isCompleted: false,
		},
	]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchTodoLists = async () => {
			//
		};

		fetchTodoLists();

		return () => {
			// cancel request
		};
	});

	return <ListContext.Provider value={{ list, loading }}>{children}</ListContext.Provider>;
};
