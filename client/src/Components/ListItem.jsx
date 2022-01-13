import React from "react";
import { Input } from ".";
import { useList } from "../context/ListProvider";

const ListItem = ({ content, isCompleted, id }) => {
	const { updateListItem, deleteListItem } = useList();

	return (
		<div className="list-item">
			<div className="section-1">
				<Input
					type="checkbox"
					checked={isCompleted}
					onChange={() => updateListItem(id, { IsCompleted: !isCompleted, id, Content: content })}
				/>
				<span className={isCompleted ? "line-through" : ""}>{content}</span>
			</div>
			<div className="section-2">
				<button className="delete-btn" onClick={() => deleteListItem(id)}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default ListItem;
