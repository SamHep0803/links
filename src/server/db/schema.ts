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
    slug: varchar("slug", { length: 256 }),
    url: varchar("url", { length: 1024 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (link) => ({
    slugIndex: index("link_idx").on(link.slug),
  }),
);
