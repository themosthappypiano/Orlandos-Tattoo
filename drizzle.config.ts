import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql", // Always use PostgreSQL for production builds
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
