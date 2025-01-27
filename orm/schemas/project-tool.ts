import { pgTable, timestamp, uuid,  } from 'drizzle-orm/pg-core';
import { project } from './project';
import { tool } from './tool';

export const projectTool = pgTable(
  'project_tool',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    projectId: uuid('project_id').references(() => project.id, { onDelete: 'cascade' }).notNull(),
    toolId: uuid('tool_id').references(() => tool.id, { onDelete: 'cascade' }).notNull(),
    createdAt: timestamp('created_at', { precision: 6, withTimezone: true }).notNull(),
  },
  () => [],
).enableRLS();
