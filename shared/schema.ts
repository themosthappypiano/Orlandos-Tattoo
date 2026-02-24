import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { sqliteTable, text as sqliteText, integer as sqliteInteger } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Use SQLite for local development if DATABASE_URL starts with 'file:'
const isLocal = process.env.DATABASE_URL?.startsWith('file:') ?? false;

export const galleryImages = isLocal 
  ? sqliteTable("gallery_images", {
      id: sqliteInteger("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
      url: sqliteText("url").notNull(),
      category: sqliteText("category").notNull(), // 'tattoos', 'piercings', 'large-pieces', 'script'
      description: sqliteText("description"),
    })
  : pgTable("gallery_images", {
      id: serial("id").primaryKey(),
      url: text("url").notNull(),
      category: varchar("category", { length: 50 }).notNull(), // 'tattoos', 'piercings', 'large-pieces', 'script'
      description: text("description"),
    });

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({ id: true });
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;
export type GalleryImage = typeof galleryImages.$inferSelect;
