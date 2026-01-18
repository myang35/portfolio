import { query } from '$app/server';
import { db } from '$lib/server/db';

export const getProjects = query(async () => {
	const projects = await db.query.project.findMany();
	return projects;
});
