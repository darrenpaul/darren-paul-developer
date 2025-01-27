import { pgTable, timestamp, uuid, varchar, boolean } from 'drizzle-orm/pg-core';

export const tool = pgTable(
  'tool',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title').notNull(),
    iconUri: varchar('icon_uri'),
    createdAt: timestamp('created_at', { precision: 6, withTimezone: true }).notNull(),
  },
  () => [],
).enableRLS();
