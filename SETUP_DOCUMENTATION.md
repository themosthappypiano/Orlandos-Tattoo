# Orlando Tattoo App - Setup Documentation

## Overview
This document outlines the changes made to enable the Orlando Tattoo app to run with `npm run dev`. The app is a full-stack React application with Express.js backend, using Drizzle ORM for database operations.

## Initial State
- App had `npm run dev` script configured but was failing to start
- Multiple compatibility and configuration issues prevented successful execution

## Changes Made

### 1. Fixed Package.json Overrides Issue

**Problem:** Invalid npm syntax in package.json overrides section
```json
"overrides": {
  "drizzle-kit": {
    "@esbuild-kit/esm-loader": "npm:tsx@^4.20.4"
  }
}
```

**Solution:** Removed the problematic overrides section entirely
- **File:** `package.json`
- **Action:** Deleted the entire overrides block (lines 103-107)
- **Reason:** The `npm:tsx@^4.20.4` syntax was invalid and preventing `npm install`

### 2. Environment Variables Setup

**Problem:** Missing `DATABASE_URL` environment variable required by the database connection

**Solution:** Created `.env` file and configured dotenv loading
- **File:** `.env` (created)
- **Content:** `DATABASE_URL=file:./dev.db`
- **File:** `package.json` 
- **Change:** Updated dev script to load environment variables:
  ```json
  "dev": "NODE_ENV=development tsx -r dotenv/config server/index.ts"
  ```
- **Dependencies Added:** `npm install dotenv`

### 3. Database Configuration for Local Development

**Problem:** App was configured only for PostgreSQL, which requires a running database server

**Solution:** Added SQLite support for local development

#### 3a. Updated Database Connection (`server/db.ts`)
```typescript
// Before: PostgreSQL only
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

// After: Support both SQLite and PostgreSQL
import { drizzle } from "drizzle-orm/node-postgres";
import { drizzle as sqliteDrizzle } from "drizzle-orm/better-sqlite3";
import pg from "pg";
import Database from "better-sqlite3";

// Auto-detect database type based on URL
const isLocal = process.env.DATABASE_URL.startsWith('file:');

if (isLocal) {
  const sqlite = new Database(process.env.DATABASE_URL.replace('file:', ''));
  db = sqliteDrizzle(sqlite, { schema });
} else {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}
```

#### 3b. Updated Database Schema (`shared/schema.ts`)
```typescript
// Added conditional schema definition
const isLocal = process.env.DATABASE_URL?.startsWith('file:') ?? false;

export const galleryImages = isLocal 
  ? sqliteTable("gallery_images", {
      id: sqliteInteger("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
      url: sqliteText("url").notNull(),
      category: sqliteText("category").notNull(),
      description: sqliteText("description"),
    })
  : pgTable("gallery_images", {
      id: serial("id").primaryKey(),
      url: text("url").notNull(),
      category: varchar("category", { length: 50 }).notNull(),
      description: text("description"),
    });
```

#### 3c. Updated Drizzle Config (`drizzle.config.ts`)
```typescript
// Added SQLite support
const isLocal = process.env.DATABASE_URL.startsWith('file:');

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: isLocal ? "sqlite" : "postgresql",
  dbCredentials: isLocal 
    ? { url: process.env.DATABASE_URL }
    : { url: process.env.DATABASE_URL },
});
```

**Dependencies Added:** `npm install better-sqlite3 @types/better-sqlite3`

### 4. Fixed Node.js Compatibility Issues

**Problem:** `import.meta.dirname` not available in Node.js v18.19.1

**Solution:** Replaced with standard `__dirname` pattern

#### 4a. Vite Config (`vite.config.ts`)
```typescript
// Before:
import path from "path";
// ... using import.meta.dirname

// After:
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// ... using __dirname instead of import.meta.dirname
```

#### 4b. Vite Server Setup (`server/vite.ts`)
```typescript
// Applied same __dirname fix
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Updated path resolution
const clientTemplate = path.resolve(
  __dirname,  // instead of import.meta.dirname
  "..",
  "client", 
  "index.html",
);
```

### 5. Vite Version Compatibility

**Problem:** Vite 7.x requires Node.js v20+ but system has v18.19.1

**Solution:** Downgraded to compatible version
- **Command:** `npm install vite@^5.0.0 @vitejs/plugin-react@^4.0.0`
- **Reason:** Vite 5.x supports Node.js v18, while v7.x requires v20+

### 6. Database Table Creation

**Problem:** Database tables didn't exist

**Solution:** Created database tables
- **Command:** `npm run db:push`
- **Result:** Created `gallery_images` table in SQLite database
- **Database File:** `./dev.db` (auto-created)

## Installation Commands Summary

```bash
# 1. Install dependencies (after fixing package.json)
npm install

# 2. Add environment variable support
npm install dotenv

# 3. Add SQLite database support  
npm install better-sqlite3 @types/better-sqlite3

# 4. Downgrade Vite for Node.js compatibility
npm install vite@^5.0.0 @vitejs/plugin-react@^4.0.0

# 5. Create database tables
npm run db:push

# 6. Start development server
npm run dev
```

## Final Configuration

### Environment File (`.env`)
```
DATABASE_URL=file:./dev.db
```

### Package.json Scripts (relevant section)
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx -r dotenv/config server/index.ts",
    "build": "tsx script/build.ts",
    "start": "NODE_ENV=production node dist/index.cjs",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  }
}
```

## How to Start Development

1. **Clone/Access the project directory**
2. **Install dependencies:** `npm install`
3. **Create database tables:** `npm run db:push`
4. **Start development server:** `npm run dev`
5. **Access the application:** `http://localhost:5000`

## Tech Stack
- **Frontend:** React 18, Vite 5, Tailwind CSS
- **Backend:** Express.js, TypeScript
- **Database:** SQLite (dev) / PostgreSQL (production)
- **ORM:** Drizzle ORM
- **Build Tool:** Vite with HMR support
- **Development:** tsx for TypeScript execution

## Notes
- The app automatically uses SQLite for local development when `DATABASE_URL` starts with `file:`
- For production deployment, use a PostgreSQL connection string in `DATABASE_URL`
- Hot module replacement (HMR) is enabled for frontend development
- The server serves both API endpoints and the React application

## Troubleshooting
- If `npm run dev` fails, ensure Node.js version is compatible (v18+)
- If database errors occur, run `npm run db:push` to recreate tables
- If port 5000 is in use, the app will fail to start - kill any process using that port