import React from "react";
import { Input } from ".";

const ListItem = ({ content, isCompleted }) => {
	return (
		<div className="list-item">
			<div className="section-1">
				<Input type="checkbox" checked={isCompleted} onChange={() => console.log("changed!")} />
				<span className={isCompleted ? "line-through" : ""}>{content}</span>
			</div>
			<div className="section-2">
				<button className="delete-btn">
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default ListItem;
