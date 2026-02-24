import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Define the type since it might not be directly exported from schema easily in this environment
export interface GalleryImage {
  id: number;
  url: string;
  category: string;
  description: string | null;
}

// Fallback data in case the DB is empty, to ensure the UI looks stellar
const MOCK_GALLERY: GalleryImage[] = [
  {
    id: 101,
    url: "https://images.unsplash.com/photo-1598371839155-dc04d3e8e19c?w=800&q=80",
    category: "tattoos",
    description: "Detailed black and grey sleeve work."
  },
  {
    id: 102,
    url: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80",
    category: "large-pieces",
    description: "Full back traditional piece."
  },
  {
    id: 103,
    url: "https://images.unsplash.com/photo-1568515387631-8b650a3191ce?w=800&q=80",
    category: "piercings",
    description: "Industrial and helix custom setup."
  },
  {
    id: 104,
    url: "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=800&q=80",
    category: "script",
    description: "Custom lettering, freehand."
  },
  {
    id: 105,
    url: "https://images.unsplash.com/photo-1590243400586-7243c49e2cb3?w=800&q=80",
    category: "tattoos",
    description: "Neo-traditional shading."
  },
  {
    id: 106,
    url: "https://images.unsplash.com/photo-1621570073577-0ab1a9d454df?w=800&q=80",
    category: "large-pieces",
    description: "Chest piece in progress."
  },
];

export function useGallery() {
  return useQuery({
    queryKey: [api.gallery.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.gallery.list.path, { credentials: "include" });
        if (!res.ok) throw new Error("Failed to fetch gallery");
        const data = await res.json();
        const parsed = api.gallery.list.responses[200].parse(data);
        
        // Return mock data if empty for demo purposes
        return parsed.length > 0 ? parsed : MOCK_GALLERY;
      } catch (error) {
        console.warn("Failed to fetch real gallery, using fallback", error);
        return MOCK_GALLERY;
      }
    },
  });
}
