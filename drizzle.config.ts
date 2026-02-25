import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "sqlite",
  driver: "sql.js",
  dbCredentials: {
    url: process.env.DATABASE_URL || "./data/production.db",
  },
});
