export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  startingPrice: string;
}

export const services: Service[] = [
  {
    id: "s001",
    title: "Modern Minimalist Gardens",
    subtitle: "Residential & Villa Design",
    description:
      "Transform your outdoor space into a serene sanctuary with our signature minimalist garden design. We blend clean lines, carefully selected tropical foliage, and natural stone elements to create gardens that feel both contemporary and timeless.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
    features: [
      "Consultation & 3D design rendering",
      "Premium tropical plant selection",
      "Natural stone & pebble pathways",
      "Custom water feature options",
      "Outdoor lighting integration",
    ],
    startingPrice: "from Rp 15,000,000",
  },
  {
    id: "s002",
    title: "Vertical Gardens & Indoor Plantscapes",
    subtitle: "Offices, Cafes & Commercial Spaces",
    description:
      "Bring life to interior walls and corporate spaces with our signature vertical gardens and lush indoor plantscapes. Perfect for offices, restaurants, hotels, and retail environments that crave biophilic design.",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80",
    features: [
      "Custom green wall design",
      "Automated drip irrigation",
      "Low-maintenance plant palette",
      "Moss wall & preserved options",
      "Rental & monthly care packages",
    ],
    startingPrice: "from Rp 8,000,000",
  },
  {
    id: "s003",
    title: "Hardscaping & Koi Ponds",
    subtitle: "Water Features & Structural Elements",
    description:
      "Elevate your landscape with custom hardscaping — from elegant koi ponds and cascading waterfalls to premium decking, pergolas, and natural stone walls built to last a lifetime.",
    image:
      "https://images.unsplash.com/photo-1570544860153-8b5d4d2a3c28?w=1200&q=80",
    features: [
      "Custom koi pond design & filtration",
      "Natural stone walls & terraces",
      "Premium hardwood decking & pergolas",
      "Waterfalls & streams",
      "Fire pits & outdoor kitchens",
    ],
    startingPrice: "from Rp 25,000,000",
  },
  {
    id: "s004",
    title: "Garden Maintenance & Care",
    subtitle: "Monthly Subscription Packages",
    description:
      "Keep your landscape thriving year-round with our professional maintenance team. From pruning and fertilizing to pest control and seasonal plant refresh, we treat every garden like our own.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    features: [
      "Weekly / biweekly / monthly visits",
      "Pruning, trimming & shaping",
      "Organic fertilization",
      "Integrated pest management",
      "Seasonal plant rotation",
    ],
    startingPrice: "from Rp 850,000 / month",
  },
];
