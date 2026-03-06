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
    url: "/gallery-1.jpg",
    category: "tattoos",
    description: "Custom lion tattoo with roses"
  },
  {
    id: 102,
    url: "/gallery-2.jpg",
    category: "tattoos",
    description: "Detailed black and grey tattoo work"
  },
  {
    id: 103,
    url: "/gallery-3.jpg",
    category: "tattoos",
    description: "Professional tattoo artwork"
  },
  {
    id: 104,
    url: "/gallery-4.jpg",
    category: "script",
    description: "Custom lettering and script work"
  },
  {
    id: 105,
    url: "/gallery-5.jpg",
    category: "tattoos",
    description: "Artistic tattoo creation"
  },
  {
    id: 106,
    url: "/gallery-6.jpg",
    category: "large-pieces",
    description: "Large-scale tattoo artwork"
  },
  {
    id: 107,
    url: "/gallery-7.jpg",
    category: "tattoos",
    description: "Professional tattoo artwork"
  },
  {
    id: 108,
    url: "/gallery-8.jpg",
    category: "tattoos",
    description: "Custom tattoo design"
  },
  {
    id: 109,
    url: "/gallery-9.jpg",
    category: "tattoos",
    description: "Detailed tattoo work"
  },
  {
    id: 110,
    url: "/gallery-10.jpg",
    category: "tattoos",
    description: "Custom tattoo design"
  },
  {
    id: 111,
    url: "/gallery-11.jpg",
    category: "large-pieces",
    description: "Large-scale custom tattoo"
  },
  {
    id: 112,
    url: "/gallery-12.jpg",
    category: "tattoos",
    description: "Professional tattoo work"
  },
  {
    id: 113,
    url: "/piercing-actual-1.jpg",
    category: "piercings",
    description: "Professional ear piercing by Grace"
  },
  {
    id: 114,
    url: "/piercing-actual-2.jpg",
    category: "piercings",
    description: "Multiple ear piercings showcase by Grace"
  },
  {
    id: 115,
    url: "/piercing-actual-3.jpg",
    category: "piercings",
    description: "Ear piercing work by Grace"
  },
  {
    id: 116,
    url: "/piercing-actual-4.jpg",
    category: "piercings",
    description: "Professional piercing showcase by Grace"
  },
  {
    id: 117,
    url: "/review-tattoo-1.jpg",
    category: "tattoos",
    description: "Featured tattoo work"
  },
  {
    id: 118,
    url: "/review-tattoo-2.jpg",
    category: "tattoos",
    description: "Custom tattoo design"
  },
  {
    id: 119,
    url: "/review-tattoo-3.jpg",
    category: "tattoos",
    description: "Professional tattoo artwork"
  },
];

export function useGallery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      // Always return the mock gallery for now
      return MOCK_GALLERY;
    },
  });
}
