import React, { useState } from "react";

const AddLiItems = () => {
	const [tasks, setTasks] = useState([]);

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			setTasks(tasks.concat(e.target.value));
			e.target.value = "";
		}
	};
	const RemoveTask = i => {
		setTasks(tasks.filter((element, index) => index !== i));
	};
	return (
		<>
			<div className="container px-0">
				<form className="row g-3">
					<div className="col-10">
						<input
							className="form-control"
							type="text"
							id="input-text"
							onKeyPress={handleKeyPress}
							placeholder="What's new to be done?"
						/>
					</div>
					<div className="col-2">
						<button type="submit" className="btn btn-light mb-3">
							Add
						</button>
					</div>
				</form>
			</div>
			<ul className="list-group shadow mt-2">
				{tasks.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
							{item}
							<span>
								<a href="#">
									<i
										id={index}
										onClick={() => RemoveTask(index)}
										className="delete far fa-trash-alt"></i>
								</a>
							</span>
						</li>
					);
				})}
				<li className="list-group-item counter" id="task-counter">
					{tasks.length}{" "}
					{tasks.length > 1
						? "items left"
						: tasks.length === 1
						? "item left"
						: "No tasks yet, add a your first!"}
				</li>
			</ul>
		</>
	);
};
const TODOlist = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6 mt-5 pb-3">
					<h1>todos</h1>
					<AddLiItems />
				</div>
			</div>
		</div>
	);
};
export default TODOlist;
