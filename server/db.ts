import { drizzle } from "drizzle-orm/sql-js";
import initSqlJs from "sql.js";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname } from 'path';
import * as schema from "@shared/schema";

// Default to SQLite database in ./data directory for production
const dbPath = process.env.DATABASE_URL 
  ? process.env.DATABASE_URL.replace('file:', '')
  : './data/production.db';

// Ensure data directory exists for production
try {
  mkdirSync(dirname(dbPath), { recursive: true });
} catch (err) {
  // Directory might already exist
}

let dbInstance: any = null;
let drizzleInstance: any = null;

async function createDatabase() {
  if (dbInstance) return dbInstance;
  
  const SQL = await initSqlJs();
  
  if (existsSync(dbPath)) {
    // Load existing database
    const filebuffer = readFileSync(dbPath);
    dbInstance = new SQL.Database(filebuffer);
  } else {
    // Create new database
    dbInstance = new SQL.Database();
    
    // Create tables
    dbInstance.run(`
      CREATE TABLE gallery_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT
      );
    `);
    
    // Save initial database
    const data = dbInstance.export();
    writeFileSync(dbPath, Buffer.from(data));
  }

  // Setup periodic saves
  setInterval(() => {
    const data = dbInstance.export();
    writeFileSync(dbPath, Buffer.from(data));
  }, 10000); // Save every 10 seconds

  return dbInstance;
}

async function getDb() {
  if (drizzleInstance) return drizzleInstance;
  
  const sqliteDb = await createDatabase();
  
  // Use SQLite schema for all environments
  const sqliteSchema = {
    galleryImages: schema.sqliteGalleryImages,
  };
  
  drizzleInstance = drizzle(sqliteDb, { schema: sqliteSchema });
  return drizzleInstance;
}

export { getDb as db };
export const pool = null;
