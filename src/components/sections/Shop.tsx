"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sparkles, Flower2, TreeDeciduous, Package, Grid3X3 } from "lucide-react";
import { plants, type Plant, type PlantCategory } from "@/data/plants";
import { PlantCard } from "@/components/shop/PlantCard";
import { QuickView } from "@/components/shop/QuickView";
import { FadeIn } from "@/components/motion/MotionWrap";

type FilterKey = "all" | PlantCategory;

const FILTERS: { key: FilterKey; label: string; icon: typeof Leaf }[] = [
  { key: "all", label: "All Plants", icon: Grid3X3 },
  { key: "indoor", label: "Indoor", icon: Flower2 },
  { key: "outdoor", label: "Outdoor", icon: TreeDeciduous },
  { key: "rare", label: "Rare Collector", icon: Sparkles },
  { key: "pots-accessories", label: "Pots & Accessories", icon: Package },
];

export const Shop = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [quickViewPlant, setQuickViewPlant] = useState<Plant | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return plants;
    return plants.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleQuickView = (plant: Plant) => {
    setQuickViewPlant(plant);
    setIsQuickViewOpen(true);
  };

  return (
    <section id="shop" className="section-padding relative bg-cream-50 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-sage-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/15 mb-5">
              <Leaf className="w-4 h-4 text-terracotta" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta/90">
                Curated Plant Boutique
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 leading-tight tracking-tight mb-5 text-balance">
              Premium houseplants,{" "}
              <span className="text-sage-600">lovingly grown</span> & acclimatized
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-sage-700 leading-relaxed">
              Every plant is hand-picked from our partner nurseries and
              greenhouse-acclimatized for 4+ weeks before arriving at your door.
              Shop with our 30-day survival guarantee.
            </p>
          </FadeIn>
        </div>

        {/* Filter tabs */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              const Icon = f.icon;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-forest-800 text-cream-50 shadow-xl shadow-forest-800/20 -translate-y-0.5"
                      : "bg-cream-50 text-charcoal/80 border border-forest-800/10 hover:border-forest-800/20 hover:text-forest-800 hover:-translate-y-0.5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-terracotta" : ""}`} />
                  <span className="whitespace-nowrap">{f.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Products grid */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
            >
              {filtered.map((plant, idx) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  index={idx}
                  onQuickView={handleQuickView}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-100 mb-5">
                <Leaf className="w-10 h-10 text-sage-400" />
              </div>
              <h4 className="font-serif text-2xl text-forest-800 mb-2">
                No plants in this category yet
              </h4>
              <p className="text-sage-600">
                Check back soon — new stock arrives weekly.
              </p>
            </div>
          )}
        </div>

        {/* Shop footer CTA */}
        <FadeIn delay={0.4}>
          <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sage-100 via-sage-50 to-terracotta/10 border border-sage-200/50 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-800 mb-3">
              Looking for something specific?
            </h3>
            <p className="text-sage-700 mb-6 max-w-xl mx-auto">
              We source rare collector specimens on request. Tell us what you&apos;re
              hunting for and our plant specialist will help find the perfect match.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Quick View Modal */}
      <QuickView
        plant={quickViewPlant}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </section>
  );
};
