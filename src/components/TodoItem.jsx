import * as React from "react";
import * as M from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { EditDialog } from "./EditDialog";

export function TodoItem(props) {
	const handleStatus = () => {
		const editedTodo = {
			...props.todo,
			complete: !props.todo.complete
		};
		props.onEdit(editedTodo);
	};

	const handleDelete = () => {
		props.onDelete(props.todo.id);
	};

	return (
		<M.Paper className="todo">
			<div className="header">
				<M.Typography variant="h5">{props.todo.title}</M.Typography>
				{props.showDate && (
					<M.Typography variant="subtitle1">{props.todo.date}</M.Typography>
				)}
			</div>
			<div className="body">
				<M.Typography variant="body1">{props.todo.description}</M.Typography>
			</div>
			<div className="footer">
				<M.FormControlLabel
					control={
						<M.Checkbox
							checked={props.todo.complete}
							onChange={handleStatus}
							value={props.todo.complete}
							color="primary"
						/>
					}
					label="Complete"
				/>
				<div className="icons">
					<EditDialog todo={props.todo} onEdit={props.onEdit} />
					<M.IconButton aria-label="delete" onClick={handleDelete}>
						<DeleteIcon fontSize="small" />
					</M.IconButton>
				</div>
			</div>
		</M.Paper>
	);
}
