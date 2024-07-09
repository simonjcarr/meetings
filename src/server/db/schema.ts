// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
  unique
} from "drizzle-orm/pg-core";


/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `builddocs_${name}`);

export const users = createTable('user', {
  id: serial('id').primaryKey(),
  createdAt: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  upldatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(() => new Date()),
})

export const projects = createTable('project', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  upldatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(() => new Date()),
}, (table) => {
  return {
    nameIdx: index('name_idx').on(table.name)
  }
})

export const projectUsers = createTable('project_user', {
  id: serial('id').primaryKey(),
  projectId: serial('project_id').notNull().references(() => projects.id),
  userId: serial('user_id').notNull().references(() => users.id),
  createdAt: timestamp('created_at', { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  upldatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(() => new Date()),
}, (table) => {
  return {
    projectIdUserIdIdx: index('project_id_user_id_idx').on(table.projectId, table.userId),
    projectIdUserIdUnique: unique('project_id_user_id_unique').on(table.projectId, table.userId)
  }
})

