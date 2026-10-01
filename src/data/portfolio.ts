export type PortfolioCategory = "residential" | "commercial" | "vertical";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    id: "pr001",
    title: "Villa Serenity Garden",
    category: "residential",
    location: "Pecatu, Bali",
    description:
      "A sprawling tropical villa garden featuring a koi pond, vertical walls, and over 200 species of tropical plants.",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=900&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=900&q=80",
  },
  {
    id: "pr002",
    title: "Hillside Terraced Landscape",
    category: "residential",
    location: "Bandung, West Java",
    description:
      "Multi-level terraced garden with natural stone walls, water feature, and curated tropical plant collection.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=80",
  },
  {
    id: "pr003",
    title: "Botanica Cafe Plantscape",
    category: "commercial",
    location: "Menteng, Jakarta",
    description:
      "Full interior plantscape design including vertical gardens, hanging plants, and indoor trees for a premium dining experience.",
    image:
      "https://images.unsplash.com/photo-1552653814-399f1e9eb8e1?w=900&q=80",
  },
  {
    id: "pr004",
    title: "Tower 21 Corporate Lobby",
    category: "vertical",
    location: "Sudirman, Jakarta",
    description:
      "A 6-meter tall living wall feature with over 800 individual plants, automated irrigation system installed at the corporate lobby.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80",
  },
  {
    id: "pr005",
    title: "Coastal Villa Poolside",
    category: "residential",
    location: "Seminyak, Bali",
    description:
      "Resort-style poolside landscaping with tropical palms, frangipani trees, and ambient garden lighting.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80",
  },
  {
    id: "pr006",
    title: "The Lofts Rooftop Garden",
    category: "commercial",
    location: "Kuningan, Jakarta",
    description:
      "Rooftop garden concept with vertical gardening, outdoor lounge area, and a mix of edible and ornamental plants.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
  },
  {
    id: "pr007",
    title: "Urban Home Courtyard",
    category: "residential",
    location: "Kebayoran Baru, Jakarta",
    description:
      "A tiny 15m² courtyard transformed into a peaceful tropical oasis with a water feature and vertical garden.",
    image:
      "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=900&q=80",
    beforeImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
  },
  {
    id: "pr008",
    title: "Nest Coworking Green Walls",
    category: "vertical",
    location: "SCBD, Jakarta",
    description:
      "Series of modular green walls and preserved moss installations across 3 floors of coworking space.",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=900&q=80",
  },
];
