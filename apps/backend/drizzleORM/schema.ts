import { pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

// test schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull(),
  name: text("name"),
  passwordHash: text("password_hash").notNull(),
});
