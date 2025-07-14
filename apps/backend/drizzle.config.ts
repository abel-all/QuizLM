import { Config } from "drizzle-orm/node-postgres/migrator";
import * as dotenv from "dotenv";
dotenv.config();

const config: Config = {
  schema: "./drizzleORM/schema.ts",
  out: "./drizzleORM/migrations",
  driverUrl: process.env.DATABASE_URL!,
};

export default config;
