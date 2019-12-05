import * as React from "react";
import * as M from "@material-ui/core";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

export function NewTodo(props) {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [date, setDate] = React.useState(moment().format("MM/DD/YYYY"));

	const handleDate = date => {
		setDate(moment(date, "MM/DD/YYYY"));
	};

	const handleSubmit = () => {
		const todo = {
			title,
			description,
			date,
			complete: false
		};
		props.addNewTodo(todo);
		setTitle("");
		setDescription("");
		setDate(moment().format("MM/DD/YYYY"));
	};

	return (
		<>
			<M.Paper id="newTodo">
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

				<M.Button onClick={handleSubmit} className="button">
					New Todo
				</M.Button>
			</M.Paper>
		</>
	);
}
