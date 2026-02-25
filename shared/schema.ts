import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { sqliteTable, text as sqliteText, integer as sqliteInteger } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// SQLite table definition
export const sqliteGalleryImages = sqliteTable("gallery_images", {
  id: sqliteInteger("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  url: sqliteText("url").notNull(),
  category: sqliteText("category").notNull(), // 'tattoos', 'piercings', 'large-pieces', 'script'
  description: sqliteText("description"),
});

// PostgreSQL table definition
export const pgGalleryImages = pgTable("gallery_images", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  category: varchar("category", { length: 50 }).notNull(), // 'tattoos', 'piercings', 'large-pieces', 'script'
  description: text("description"),
});

// Use SQLite schema for all environments
export const galleryImages = sqliteGalleryImages;

export const insertGalleryImageSchema = createInsertSchema(sqliteGalleryImages).omit({ id: true });
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof sqliteGalleryImages.$inferSelect;
