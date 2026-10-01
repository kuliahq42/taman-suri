export type PlantCategory =
  | "indoor"
  | "outdoor"
  | "rare"
  | "pots-accessories";

export type PlantBadge =
  | "Low Light"
  | "Pet Friendly"
  | "Best Seller"
  | "Easy Care"
  | "Air Purifier"
  | "New Arrival"
  | "Rare Collector Plant";

export interface Plant {
  id: string;
  commonName: string;
  botanicalName: string;
  category: PlantCategory;
  price: number;
  image: string;
  badges: PlantBadge[];
  description: string;
  careGuide: {
    light: string;
    water: string;
    humidity: string;
  };
}

export const plants: Plant[] = [
  {
    id: "p001",
    commonName: "Monstera Deliciosa",
    botanicalName: "Monstera deliciosa",
    category: "indoor",
    price: 895000,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80",
    badges: ["Best Seller", "Air Purifier"],
    description:
      "Iconic Swiss cheese plant with large, glossy split leaves. A statement piece for any modern interior.",
    careGuide: {
      light: "Bright indirect light",
      water: "Weekly, allow soil to dry",
      humidity: "60-80%",
    },
  },
  {
    id: "p002",
    commonName: "Fiddle Leaf Fig",
    botanicalName: "Ficus lyrata",
    category: "indoor",
    price: 1250000,
    image:
      "https://images.unsplash.com/photo-1545165375-7c5f3d0b96f3?w=800&q=80",
    badges: ["Best Seller"],
    description:
      "Sculptural beauty with large, glossy violin-shaped leaves. Perfect for bright corners.",
    careGuide: {
      light: "Bright filtered light",
      water: "When top 2 inches dry",
      humidity: "Moderate",
    },
  },
  {
    id: "p003",
    commonName: "Bird of Paradise",
    botanicalName: "Strelitzia reginae",
    category: "outdoor",
    price: 1750000,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&q=80",
    badges: ["Easy Care"],
    description:
      "Tropical stunner with banana-like leaves. Adds an instant resort vibe to patios and gardens.",
    careGuide: {
      light: "Full sun to partial shade",
      water: "Regularly, well-drained soil",
      humidity: "Tolerates dry air",
    },
  },
  {
    id: "p004",
    commonName: "Snake Plant Laurentii",
    botanicalName: "Sansevieria trifasciata",
    category: "indoor",
    price: 345000,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=800&q=80",
    badges: ["Low Light", "Easy Care", "Air Purifier"],
    description:
      "Nearly indestructible upright sword-like leaves with yellow edges. NASA-approved air purifier.",
    careGuide: {
      light: "Low to bright indirect",
      water: "Every 2-3 weeks",
      humidity: "Low tolerance",
    },
  },
  {
    id: "p005",
    commonName: "Variegated Monstera Albo",
    botanicalName: "Monstera deliciosa 'Albo Variegata'",
    category: "rare",
    price: 8500000,
    image:
      "https://images.unsplash.com/photo-1655065488820-2cf2d1a1204c?w=800&q=80",
    badges: ["New Arrival"],
    description:
      "Ultra-rare collector's gem with stunning white marbled variegation. A true trophy plant.",
    careGuide: {
      light: "Bright indirect, avoid direct sun",
      water: "Moderate, keep moist",
      humidity: "70-80%",
    },
  },
  {
    id: "p006",
    commonName: "Boston Fern",
    botanicalName: "Nephrolepis exaltata",
    category: "indoor",
    price: 425000,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    badges: ["Pet Friendly", "Air Purifier"],
    description:
      "Lush, arching fronds that bring classic elegance. Excellent for hanging baskets and bathrooms.",
    careGuide: {
      light: "Medium indirect",
      water: "Keep soil moist",
      humidity: "High, mist daily",
    },
  },
  {
    id: "p007",
    commonName: "Areca Palm",
    botanicalName: "Dypsis lutescens",
    category: "indoor",
    price: 685000,
    image:
      "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?w=800&q=80",
    badges: ["Air Purifier", "Pet Friendly", "Best Seller"],
    description:
      "Feathery, arching palm fronds that add a tropical touch. Excellent natural humidifier.",
    careGuide: {
      light: "Bright indirect",
      water: "Allow top to dry between waterings",
      humidity: "High",
    },
  },
  {
    id: "p008",
    commonName: "Philodendron Pink Princess",
    botanicalName: "Philodendron erubescens",
    category: "rare",
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1640620567287-6b5e4a0aa7ed?w=800&q=80",
    badges: ["Rare Collector Plant"],
    description:
      "Highly coveted pink variegated leaves with deep green marbling. An Instagram favorite.",
    careGuide: {
      light: "Bright indirect",
      water: "When top inch dries",
      humidity: "60%+",
    },
  },
  {
    id: "p009",
    commonName: "Frangipani Tree",
    botanicalName: "Plumeria rubra",
    category: "outdoor",
    price: 950000,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    badges: ["Easy Care"],
    description:
      "Fragrant tropical blooms in pink and white. Creates a Bali resort atmosphere in any garden.",
    careGuide: {
      light: "Full sun",
      water: "Drought tolerant",
      humidity: "Warm climate",
    },
  },
  {
    id: "p010",
    commonName: "ZZ Plant",
    botanicalName: "Zamioculcas zamiifolia",
    category: "indoor",
    price: 395000,
    image:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80",
    badges: ["Low Light", "Easy Care"],
    description:
      "Glossy, dark green leaves on sturdy stems. The ultimate low-maintenance plant for beginners.",
    careGuide: {
      light: "Low to medium indirect",
      water: "Every 2-4 weeks",
      humidity: "Tolerates dry air",
    },
  },
  {
    id: "p011",
    commonName: "Terracotta Pot — Moroccan",
    botanicalName: "Handcrafted Earthenware",
    category: "pots-accessories",
    price: 285000,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80",
    badges: ["New Arrival"],
    description:
      "Hand-engraved Moroccan-inspired terracotta pot with drainage hole. Fits medium plants.",
    careGuide: {
      light: "N/A",
      water: "N/A",
      humidity: "N/A",
    },
  },
  {
    id: "p012",
    commonName: "Organic Potting Mix 10L",
    botanicalName: "Premium Soil Blend",
    category: "pots-accessories",
    price: 165000,
    image:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    badges: ["Best Seller"],
    description:
      "Premium well-draining potting mix enriched with coco peat, perlite, and slow-release fertilizer.",
    careGuide: {
      light: "N/A",
      water: "N/A",
      humidity: "N/A",
    },
  },
];
