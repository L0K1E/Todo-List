import { createContext, useContext, useState, useEffect } from "react";

export const ListContext = createContext();

export const useList = () => useContext(ListContext);

const ListProvider = ({ children }) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);

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

export default ListProvider;
