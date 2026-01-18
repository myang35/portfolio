import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const project = pgTable('project', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description').default('').notNull(),
	githubUrl: text('github_url').default('').notNull(),
	websiteUrl: text('websiteUrl').default('').notNull(),
	technologies: text('technologies').array().default([]).notNull()
});
