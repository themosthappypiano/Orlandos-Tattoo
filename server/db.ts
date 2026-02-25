import { drizzle } from "drizzle-orm/node-postgres";
import { drizzle as sqliteDrizzle } from "drizzle-orm/better-sqlite3";
import pg from "pg";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

function createDatabase() {
  // Use SQLite for local development if DATABASE_URL starts with 'file:'
  const isLocal = process.env.DATABASE_URL!.startsWith('file:');
  
  if (isLocal) {
    const sqlite = new Database(process.env.DATABASE_URL!.replace('file:', ''));
    // Use the appropriate schema based on database type
    const localSchema = {
      galleryImages: schema.sqliteGalleryImages,
    };
    return {
      db: sqliteDrizzle(sqlite, { schema: localSchema }),
      pool: null
    };
  } else {
    const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    // Use PostgreSQL schema for production
    const prodSchema = {
      galleryImages: schema.pgGalleryImages,
    };
    return {
      db: drizzle(pool, { schema: prodSchema }),
      pool
    };
  }
}

const { db, pool } = createDatabase();

export { db, pool };
