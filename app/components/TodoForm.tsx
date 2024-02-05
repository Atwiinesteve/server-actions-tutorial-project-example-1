"use client";

import React from "react";
import createTodo from "../actions/db.actions";

function TodoForm() {
	return (
		<form
			action={createTodo}
			className="flex flex-col items-center justify-center">
			<input
				type="text"
				placeholder="Enter your todo..."
				className="border-2 border-gray-300 p-2 m-2"
				name="description"
			/>
			<button type="submit" className="bg-blue-500 text-white p-2 m-2">
				Submit
			</button>
		</form>
	);
}

export default TodoForm;
