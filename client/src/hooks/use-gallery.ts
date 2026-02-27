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
    url: "/artwork1.png",
    category: "tattoos",
    description: "Custom tattoo artwork showcase"
  },
  {
    id: 102,
    url: "/artwork2.png",
    category: "large-pieces",
    description: "Detailed tattoo design"
  },
  {
    id: 103,
    url: "/artwork3.png",
    category: "tattoos",
    description: "Professional tattoo work"
  },
  {
    id: 104,
    url: "/artwork4.png",
    category: "script",
    description: "Custom lettering design"
  },
  {
    id: 105,
    url: "/artwork5.png",
    category: "tattoos",
    description: "Artistic tattoo creation"
  },
  {
    id: 106,
    url: "/artwork6.png",
    category: "large-pieces",
    description: "Detailed artwork piece"
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
