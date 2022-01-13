import { apiEndpoint } from "./endpoint";

export const getAllItems = async () => {
	try {
		const res = await fetch(`${apiEndpoint}/todos/all`);
		const data = await res.json();

		return { data, status: res.status };
	} catch (err) {
		console.log("Error while fetching all items", err);
	}
};

export const updateItem = async (id, body) => {
	try {
		const res = await fetch(`${apiEndpoint}/todos/update/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: { ...body },
		});
		const data = await res.json();

		return { data, status: res.status };
	} catch (err) {
		console.log("Error while updateing item", err);
	}
};

export const deleteItem = async id => {
	try {
		const res = await fetch(`${apiEndpoint}/todos/delete/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		return { data, status: res.status };
	} catch (err) {
		console.log("Error while deleting item", err);
	}
};
