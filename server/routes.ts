import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

async function seedGallery() {
  const images = await storage.getGalleryImages();
  if (images.length === 0) {
    const seedData = [
      { url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop', category: 'tattoos', description: 'Traditional black and grey tattoo' },
      { url: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000&auto=format&fit=crop', category: 'tattoos', description: 'Detailed portrait work' },
      { url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000&auto=format&fit=crop', category: 'piercings', description: 'Industrial and cartilage piercing' },
      { url: 'https://images.unsplash.com/photo-1582260662251-1e967a31b402?q=80&w=1000&auto=format&fit=crop', category: 'large-pieces', description: 'Full back coverup' },
      { url: 'https://images.unsplash.com/photo-1590246814883-578ae10e08dd?q=80&w=1000&auto=format&fit=crop', category: 'script', description: 'Gothic script lettering' },
      { url: 'https://images.unsplash.com/photo-1583000623253-ab0e6e76fb21?q=80&w=1000&auto=format&fit=crop', category: 'tattoos', description: 'Custom blackwork' },
    ];
    
    for (const img of seedData) {
      await storage.createGalleryImage(img);
    }
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Seed the gallery images on startup
  seedGallery().catch(console.error);

  app.get(api.gallery.list.path, async (req, res) => {
    const images = await storage.getGalleryImages();
    res.json(images);
  });

  return httpServer;
}
