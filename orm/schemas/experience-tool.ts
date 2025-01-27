import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { experience } from './experience';
import { tool } from './tool';

export const experienceTool = pgTable(
  'experience_tool',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    experienceId: uuid('experience_id')
      .references(() => experience.id, { onDelete: 'cascade' })
      .notNull(),
    toolId: uuid('tool_id')
      .references(() => tool.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at', { precision: 6, withTimezone: true }).notNull(),
  },
  () => [],
).enableRLS();
