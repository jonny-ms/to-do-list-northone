import React from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

function App() {
	const [todos, setTodos] = React.useState([]);

	const handleEdit = editedTodo => {
		const editedTodos = todos.map(todo => {
			if (todo.id === editedTodo.id) {
				return editedTodo;
			}
			return todo;
		});
		setTodos(editedTodos);
	};

	const handleDelete = id => {
		const updatedTodos = todos.filter(todo => {
			return todo.id !== id;
		});
		setTodos(updatedTodos);
	};

	return (
		<Container>
			<NewTodo
				addNewTodo={todo => {
					todo.id = todos.length;
					setTodos([...todos, todo]);
				}}
			/>
			<TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
		</Container>
	);
}

export default App;
