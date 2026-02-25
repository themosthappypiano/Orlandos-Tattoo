import { db } from "./db";
import { galleryImages, type InsertGalleryImage, type GalleryImage } from "@shared/schema";

export interface IStorage {
  getGalleryImages(): Promise<GalleryImage[]>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
}

export class DatabaseStorage implements IStorage {
  async getGalleryImages(): Promise<GalleryImage[]> {
    const database = await db();
    return await database.select().from(galleryImages);
  }

  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const database = await db();
    const [created] = await database.insert(galleryImages).values(image).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
