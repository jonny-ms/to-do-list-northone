import * as React from "react";
import * as M from "@material-ui/core";
import { TodoItem } from "./TodoItem";
import moment from "moment";

export function TodoList(props) {
	const overdue = props.todos
		.filter(todo => {
			return (
				todo.date < moment().format("MM/DD/YYYY") && todo.complete === false
			);
		})
		.sort((a, b) => {
			return moment(a.date, "MM/DD/YYYY").diff(moment(b.date, "MM/DD/YYYY"));
		});

	const today = props.todos.filter(todo => {
		return todo.date === moment().format("MM/DD/YYYY");
	});

	const tomorrow = props.todos.filter(todo => {
		return (
			todo.date ===
			moment()
				.add(1, "days")
				.format("MM/DD/YYYY")
		);
	});

	const upcoming = props.todos
		.filter(todo => {
			return (
				todo.date >
				moment()
					.add(1, "days")
					.format("MM/DD/YYYY")
			);
		})
		.sort((a, b) => {
			return moment(a.date, "MM/DD/YYYY").diff(moment(b.date, "MM/DD/YYYY"));
		});

	return (
		<>
			{overdue[0] && <M.Typography variant="h5">Overdue</M.Typography>}
			<section className="todo-list">
				{overdue[0] &&
					overdue.map(todo => {
						return (
							<TodoItem
								todo={todo}
								onEdit={props.onEdit}
								onDelete={props.onDelete}
								key={todo.id}
								showDate={true}
							/>
						);
					})}
			</section>

			{today[0] && <M.Typography variant="h5">Today</M.Typography>}
			<section className="todo-list">
				{today[0] &&
					today.map(todo => {
						return (
							<TodoItem
								todo={todo}
								onEdit={props.onEdit}
								onDelete={props.onDelete}
								key={todo.id}
							/>
						);
					})}
			</section>

			{tomorrow[0] && <M.Typography variant="h5">Tomorrow</M.Typography>}
			<section className="todo-list">
				{tomorrow[0] &&
					tomorrow.map(todo => {
						return (
							<TodoItem
								todo={todo}
								onEdit={props.onEdit}
								onDelete={props.onDelete}
								key={todo.id}
							/>
						);
					})}
			</section>

			{upcoming[0] && <M.Typography variant="h5">Upcoming</M.Typography>}
			<section className="todo-list">
				{upcoming[0] &&
					upcoming.map(todo => {
						return (
							<TodoItem
								todo={todo}
								onEdit={props.onEdit}
								onDelete={props.onDelete}
								showDate={true}
								key={todo.id}
							/>
						);
					})}
			</section>
		</>
	);
}
