import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@shared/schema";

// Default to SQLite database in ./data directory for production
const dbPath = process.env.DATABASE_URL 
  ? process.env.DATABASE_URL.replace('file:', '')
  : './data/production.db';

// Ensure data directory exists for production
import { mkdirSync } from 'fs';
import { dirname } from 'path';

try {
  mkdirSync(dirname(dbPath), { recursive: true });
} catch (err) {
  // Directory might already exist
}

const sqlite = new Database(dbPath);

// Use SQLite schema for all environments
const sqliteSchema = {
  galleryImages: schema.sqliteGalleryImages,
};

const db = drizzle(sqlite, { schema: sqliteSchema });

export { db };
export const pool = null;
