import db from "@/db/db.connections";
import TodoForm from "./components/TodoForm";

export default async function Home() {
	const todos = await db.todo.findMany();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<TodoForm />
			<div className="flex flex-col items-center justify-center">
				{todos.map((todo) => (
					<div key={todo.id} className="flex items-center justify-center">
						<p className="m-2">{todo.description}</p>
					</div>
				))}
			</div>
		</main>
	);
}
