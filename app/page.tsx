import db from "@/db/db";

export default async function Home() {
	const todos = await db.todo.findMany();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<form className="flex flex-col items-center justify-center">
				<input
					type="text"
					placeholder="Enter your email"
					className="border-2 border-gray-300 p-2 m-2"
				/>
				<button className="bg-blue-500 text-white p-2 m-2">Submit</button>
			</form>
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
