import React from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import { NewTodo } from "./components/NewTodo";
import { TodoList } from "./components/TodoList";

function App() {
	const [todos, setTodos] = React.useState([]);

	// React.useEffect(() => {
	//*Get user todos from api on app render
	//*Set response to state
	// }, []);

	// React.useEffect(() => {
	//*Post/Put to api on todo state change
	// }, [todo]);

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

	const handleNewTodo = todo => {
		todo.id = todos.length;
		setTodos([...todos, todo]);
	};

	return (
		<Container>
			<NewTodo addNewTodo={handleNewTodo} />
			<TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
		</Container>
	);
}

export default App;
