"use server";

import db from "@/db/db.connections";
import { revalidatePath } from "next/cache";

export default async function createTodo(formData: FormData) {
	await db.todo.create({
		data: {
			description: formData.get("description") as string,
		},
	});
	revalidatePath("/");
}
