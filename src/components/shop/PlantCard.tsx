"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import type { Plant, PlantBadge } from "@/data/plants";
import { useCartStore } from "@/store/cart";
import { formatCurrency } from "@/lib/utils";

interface PlantCardProps {
  plant: Plant;
  onQuickView: (plant: Plant) => void;
  index?: number;
}

const badgeColors: Record<PlantBadge, string> = {
  "Low Light": "bg-sage-100 text-sage-700 border-sage-200",
  "Pet Friendly": "bg-terracotta/10 text-terracotta border-terracotta/20",
  "Best Seller": "bg-forest-800 text-cream-50 border-forest-700",
  "Easy Care": "bg-sage-100 text-moss-700 border-sage-200",
  "Air Purifier": "bg-moss-50 text-moss-700 border-moss-200",
  "New Arrival": "bg-terracotta text-cream-50 border-terracotta/90",
};

export const PlantCard = ({ plant, onQuickView, index = 0 }: PlantCardProps) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: (index % 8) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl bg-cream-50 shadow-lg shadow-forest-800/[0.04] border border-forest-800/[0.05] overflow-hidden flex flex-col"
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sage-50">
        <Image
          src={plant.image}
          alt={plant.commonName}
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-800/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            aria-label="Quick view"
            onClick={() => onQuickView(plant)}
            className="w-9 h-9 rounded-full bg-cream-50/95 backdrop-blur shadow-md flex items-center justify-center text-forest-800 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-forest-800 hover:text-cream-50"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            aria-label="Wishlist"
            className="w-9 h-9 rounded-full bg-cream-50/95 backdrop-blur shadow-md flex items-center justify-center text-forest-800 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75 hover:bg-red-50 hover:text-red-500"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {plant.badges.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColors[badge]}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom add to cart overlay */}
        <div className="absolute inset-x-3 bottom-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]">
          <button
            onClick={() => addItem(plant)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-800 px-4 py-3 text-sm font-bold text-cream-50 shadow-2xl hover:bg-terracotta transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="mb-4">
          <h3 className="font-serif text-lg md:text-xl font-bold text-forest-800 leading-tight mb-1 group-hover:text-terracotta transition-colors">
            {plant.commonName}
          </h3>
          <p className="text-[11px] md:text-xs italic text-sage-600">
            {plant.botanicalName}
          </p>
        </div>

        {/* Small badges */}
        {plant.badges.length > 2 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {plant.badges.slice(2).map((badge) => (
              <span
                key={badge}
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badgeColors[badge]}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sage-500 font-semibold mb-0.5">
              Price
            </div>
            <div className="font-serif text-xl md:text-2xl font-bold text-forest-800 leading-none">
              {formatCurrency(plant.price)}
            </div>
          </div>
          <button
            onClick={() => onQuickView(plant)}
            aria-label="View details"
            className="w-10 h-10 rounded-full bg-forest-800/5 hover:bg-forest-800 text-forest-800 hover:text-cream-50 flex items-center justify-center transition-all hover:-translate-y-0.5"
          >
            <Eye className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
