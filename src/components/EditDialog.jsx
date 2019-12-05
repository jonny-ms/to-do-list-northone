import * as React from "react";
import * as M from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

export function EditDialog(props) {
	const [open, setOpen] = React.useState(false);
	const [title, setTitle] = React.useState(props.todo.title);
	const [description, setDescription] = React.useState(props.todo.description);
	const [date, setDate] = React.useState(props.todo.date);

	const handleDate = date => {
		setDate(moment(date).format("MM/DD/YYYY"));
	};

	const handleEdit = () => {
		const editedTodo = {
			...props.todo,
			title,
			description,
			date,
			complete: false
		};
		props.onEdit(editedTodo);
		setOpen(false);
	};

	return (
		<>
			<M.IconButton aria-label="edit" onClick={() => setOpen(true)}>
				<EditIcon fontSize="small" />
			</M.IconButton>

			<M.Dialog open={open} onClose={() => setOpen(false)}>
				<M.Paper id="editTodo">
					<M.Typography variant="h6">Edit</M.Typography>

					<M.TextField
						type="text"
						value={title}
						onChange={e => setTitle(e.target.value)}
						label="Title"
						margin="normal"
						className="text-field"
					/>

					<M.TextField
						type="text"
						value={description}
						onChange={e => setDescription(e.target.value)}
						label="Description"
						multiline
						margin="normal"
						className="text-field"
					/>

					<MuiPickersUtilsProvider utils={MomentUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/DD/YYYY"
							label="Date"
							margin="normal"
							value={date}
							onChange={handleDate}
							className="text-field"
						/>
					</MuiPickersUtilsProvider>

					<M.Button onClick={handleEdit} color="primary" className="button">
						Confirm Changes
					</M.Button>
				</M.Paper>
			</M.Dialog>
		</>
	);
}
