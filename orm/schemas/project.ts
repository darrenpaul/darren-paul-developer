import { pgTable, timestamp, uuid, varchar, boolean } from 'drizzle-orm/pg-core';
import { user } from './user';
import { client } from './client';

export const project = pgTable(
  'project',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title').notNull(),
    slug: varchar('slug').notNull().unique(),
    ownerId: uuid('owner_id').references(() => user.id, { onDelete: 'cascade' }),
    clientId: uuid('client_id')
      .references(() => client.id, { onDelete: 'cascade' })
      .notNull(),
    content: varchar('content'),
    description: varchar('description'),
    thumbnailUri: varchar('thumbnail_uri'),
    published: boolean('published').default(false).notNull(),
    favorite: boolean('favorite').default(false).notNull(),
    liveUri: varchar('live_uri'),
    updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { precision: 6, withTimezone: true }).notNull(),
  },
  () => [],
).enableRLS();
