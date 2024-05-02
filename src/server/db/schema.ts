import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `links_${name}`);

export const links = createTable(
  "link",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (link) => ({
    slugIndex: index("slug_idx").on(link.slug),
  }),
);
