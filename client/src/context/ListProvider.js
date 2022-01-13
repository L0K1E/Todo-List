import { createContext, useContext, useState, useEffect } from "react";
import { getAllItems, updateItem, deleteItem } from "../api/todoApi";

export const ListContext = createContext();

export const useList = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		const fetchTodoLists = async () => {
			try {
				const { data, status } = await getAllItems();
				if (status === 200) {
					setItems(data);
				}
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};

		fetchTodoLists();

		return () => {
			// cancel request
		};
	}, [update]);

	const updateListItem = async id => {
		try {
			const { data, status } = await updateItem(id);

			if (status === 200) {
				setUpdate(prev => !prev);
			}
			console.log(data);
		} catch (err) {
			console.log("updateListItem", err);
		}
	};

	const deleteListItem = async id => {
		try {
			const { data, status } = await deleteItem(id);
			if (status === 200) {
				setUpdate(prev => !prev);
			}
			console.log(data);
		} catch (err) {
			console.log("deleteListItem", err);
		}
	};

	return (
		<ListContext.Provider value={{ items, loading, updateListItem, deleteListItem }}>
			{children}
		</ListContext.Provider>
	);
};
