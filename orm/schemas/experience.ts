import { pgTable, timestamp, uuid, varchar, boolean } from 'drizzle-orm/pg-core';
import { client } from './client';

export const experience = pgTable(
  'experience',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    company: varchar('company').notNull(),
    role: varchar('role').notNull(),
    employmentType: varchar('employment_type').notNull().default('PERMANENT'),
    content: varchar('content').notNull(),
    startDate: timestamp('start_date', { precision: 6, withTimezone: true }).notNull(),
    endDate: timestamp('end_date', { precision: 6, withTimezone: true }),
    clientId: uuid('client_id')
      .references(() => client.id, { onDelete: 'cascade' })
      .notNull(),
    thumbnailUri: varchar('thumbnail_uri'),
    published: boolean('published').default(false).notNull(),
    updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { precision: 6, withTimezone: true }).notNull(),
  },
  () => [],
).enableRLS();
