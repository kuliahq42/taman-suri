"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  X,
  ShoppingBag,
  Sun,
  Droplets,
  Wind,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import type { Plant, PlantBadge } from "@/data/plants";
import { useCartStore } from "@/store/cart";
import { formatCurrency, getWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

interface QuickViewProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
}

const badgeColors: Record<PlantBadge, string> = {
  "Low Light": "bg-sage-100 text-sage-700 border-sage-200",
  "Pet Friendly": "bg-terracotta/10 text-terracotta border-terracotta/20",
  "Best Seller": "bg-forest-800 text-cream-50 border-forest-700",
  "Easy Care": "bg-sage-100 text-moss-700 border-sage-200",
  "Air Purifier": "bg-moss-50 text-moss-700 border-moss-200",
  "New Arrival": "bg-terracotta text-cream-50 border-terracotta/90",
  "Rare Collector Plant": "bg-amber-100 text-amber-800 border-amber-200",
};

export const QuickView = ({ plant, isOpen, onClose }: QuickViewProps) => {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    if (!plant) return;
    addItem(plant);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && plant && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-forest-800/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <div
              className="relative w-full max-w-5xl max-h-[92vh] rounded-3xl bg-cream-50 shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-cream-50/95 backdrop-blur shadow-md flex items-center justify-center text-charcoal hover:bg-forest-800 hover:text-cream-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative md:w-1/2 aspect-square md:aspect-auto bg-sage-50 overflow-hidden flex-shrink-0">
                <Image
                  src={plant.image}
                  alt={plant.commonName}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {plant.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColors[badge]}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-10 overflow-y-auto hide-scrollbar">
                <div className="text-[11px] uppercase tracking-[0.2em] text-sage-500 font-bold mb-2">
                  {plant.category === "rare"
                    ? "Rare Collector Plants"
                    : plant.category === "pots-accessories"
                    ? "Pots & Accessories"
                    : plant.category === "indoor"
                    ? "Indoor Plants"
                    : "Outdoor Plants"}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800 leading-tight mb-1">
                  {plant.commonName}
                </h2>
                <p className="italic text-sage-600 mb-6">{plant.botanicalName}</p>

                <div className="flex items-end gap-3 mb-7 pb-7 border-b border-forest-800/10">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-forest-800 leading-none">
                    {formatCurrency(plant.price)}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-7">
                  <h4 className="text-sm font-bold text-forest-800 uppercase tracking-wider mb-3">
                    About this plant
                  </h4>
                  <p className="text-sm md:text-base text-charcoal/80 leading-relaxed">
                    {plant.description}
                  </p>
                </div>

                {/* Care guide */}
                {plant.careGuide.light !== "N/A" && (
                  <div className="mb-7">
                    <h4 className="text-sm font-bold text-forest-800 uppercase tracking-wider mb-3">
                      Care Guide
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        {
                          icon: Sun,
                          label: "Light",
                          value: plant.careGuide.light,
                        },
                        {
                          icon: Droplets,
                          label: "Water",
                          value: plant.careGuide.water,
                        },
                        {
                          icon: Wind,
                          label: "Humidity",
                          value: plant.careGuide.humidity,
                        },
                      ].map((c) => (
                        <div
                          key={c.label}
                          className="p-4 rounded-2xl bg-sage-50 border border-sage-100"
                        >
                          <c.icon className="w-5 h-5 text-forest-800 mb-2" />
                          <div className="text-[10px] uppercase tracking-wider text-sage-500 font-bold mb-0.5">
                            {c.label}
                          </div>
                          <div className="text-xs text-charcoal/80 leading-relaxed">
                            {c.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guarantee */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-terracotta/10 border border-terracotta/15 mb-7">
                  <CheckCircle2 className="w-6 h-6 text-terracotta flex-shrink-0" />
                  <div className="text-sm text-terracotta/90">
                    <strong>30-Day Plant Survival Guarantee.</strong> Free
                    replacement if your plant doesn&apos;t thrive in its first
                    month.
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAdd}
                    className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-forest-800 px-6 py-4 text-base font-bold text-cream-50 shadow-lg shadow-forest-800/20 transition-all hover:bg-terracotta hover:shadow-terracotta/25 hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <Link
                    href={getWhatsAppLink(
                      encodeURIComponent(
                        `Hi! I'm interested in the ${plant.commonName} (${plant.botanicalName}) — ${formatCurrency(plant.price)}.`
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:brightness-110 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={2.3} />
                    Chat to Buy
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
