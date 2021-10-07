import React, { useState } from "react";

const AddLiItems = () => {
	const [tasks, setTasks] = useState(["aaa", "bbb"]);

	const handleKeyPress = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			setTasks(tasks.concat(e.target.value));
			e.target.value = "";
		} else {
			alert("Please write a new task");
		}
	};

	const RemoveTask = data => {
		setTasks(tasks.filter(item => item !== tasks[data]));
	};

	return (
		<form>
			<input
				className="form-control form-control-lg"
				id="input-text"
				type="text"
				onKeyPress={handleKeyPress}
				placeholder="Enter your task"
			/>

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
										onClick={e => RemoveTask(e.target.id)}
										className="far fa-trash-alt"></i>
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
						: "items left. Add your first!"}
				</li>
			</ul>
		</form>
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
