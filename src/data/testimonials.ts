export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t001",
    name: "Amanda Wijaya",
    role: "Homeowner, Pondok Indah",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "Taman Suri transformed our backyard into a tropical paradise. The team was professional, detail-oriented, and the results exceeded every expectation. Our koi pond is the highlight of every gathering!",
  },
  {
    id: "t002",
    name: "Dimas Pratama",
    role: "Cafe Owner, Kemang",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "The vertical garden they installed at our cafe has become our signature. Customers come just to take photos with it. Plus, the monthly maintenance service keeps everything looking flawless.",
  },
  {
    id: "t003",
    name: "Sophie Tanuwidjaja",
    role: "Interior Designer",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "I've collaborated with Taman Suri on 7+ residential projects now. Their plant quality is unmatched, and their team understands design intent. Every plant I buy from them arrives in perfect condition.",
  },
  {
    id: "t004",
    name: "Rizky Firmansyah",
    role: "Commercial Property Manager",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=68",
    quote:
      "The 6-meter green wall in our lobby is absolutely stunning. The automated system works flawlessly and Taman Suri's quarterly check-ins give us complete peace of mind.",
  },
  {
    id: "t005",
    name: "Maya Sari",
    role: "Plant Collector",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=25",
    quote:
      "As a serious collector, I'm picky about where I source rare plants. Taman Suri's plants are acclimatized beautifully — I've never lost a single plant purchased from them, and that's saying something.",
  },
  {
    id: "t006",
    name: "Budi Santoso",
    role: "Villa Management, Canggu",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
    quote:
      "Their monthly maintenance package is worth every rupiah. Our villa gardens are always guest-ready, and guest feedback about the landscaping consistently comes back 10/10.",
  },
];
