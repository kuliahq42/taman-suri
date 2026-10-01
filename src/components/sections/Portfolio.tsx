"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Home,
  Building2,
  BarChart3,
  MapPin,
  ArrowLeftRight,
  X,
  ArrowRight,
} from "lucide-react";
import { portfolio, type PortfolioCategory } from "@/data/portfolio";
import { FadeIn } from "@/components/motion/MotionWrap";

type FilterKey = "all" | PortfolioCategory;

const FILTERS: { key: FilterKey; label: string; icon: typeof Home }[] = [
  { key: "all", label: "All Projects", icon: BarChart3 },
  { key: "residential", label: "Residential", icon: Home },
  { key: "commercial", label: "Commercial", icon: Building2 },
  { key: "vertical", label: "Vertical Garden", icon: Sparkles },
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showBefore, setShowBefore] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (activeFilter === "all") return portfolio;
    return portfolio.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const selected = portfolio.find((p) => p.id === selectedId) || null;

  const toggleBefore = (id: string) => {
    setShowBefore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="section-padding relative bg-cream-200/40 overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-40 left-1/3 w-80 h-80 rounded-full bg-sage-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-forest-800/8 border border-forest-800/10 mb-5">
              <Sparkles className="w-4 h-4 text-forest-800" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-forest-800">
                Portfolio
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 leading-tight tracking-tight mb-5 text-balance">
              Projects we&apos;ve had the joy of{" "}
              <span className="text-terracotta">bringing to life</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-sage-700 leading-relaxed">
              A small selection of 100+ completed projects across Jakarta,
              Bali, and beyond. Every landscape tells a story.
            </p>
          </FadeIn>
        </div>

        {/* Filter */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 md:mb-14">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              const Icon = f.icon;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-terracotta text-white shadow-xl shadow-terracotta/25 -translate-y-0.5"
                      : "bg-cream-50 text-charcoal/80 border border-forest-800/10 hover:border-forest-800/20 hover:text-forest-800 hover:-translate-y-0.5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{f.label}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {filtered.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: (idx % 6) * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-3xl overflow-hidden shadow-xl shadow-forest-800/5 border border-forest-800/5 bg-cream-50 cursor-pointer ${
                    idx % 5 === 0 ? "md:row-span-2" : ""
                  }`}
                  style={{ aspectRatio: idx % 5 === 0 ? undefined : "4/5" }}
                  onClick={() => setSelectedId(item.id)}
                >
                  <div className="relative w-full h-full min-h-[300px]">
                    <Image
                      src={
                        item.beforeImage && showBefore[item.id]
                          ? item.beforeImage
                          : item.image
                      }
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-800/85 via-forest-800/10 to-transparent" />

                    {/* Before/After toggle */}
                    {item.beforeImage && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBefore(item.id);
                        }}
                        className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-50/95 backdrop-blur shadow-lg text-xs font-bold text-forest-800 hover:bg-white transition-colors"
                      >
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                        {showBefore[item.id] ? "After" : "Before"}
                      </button>
                    )}

                    {/* Category tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-50/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-forest-800 shadow-md">
                        {item.category === "residential"
                          ? "Residential"
                          : item.category === "commercial"
                          ? "Commercial"
                          : "Vertical Garden"}
                      </span>
                    </div>

                    {/* Info overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
                      <div className="flex items-start gap-2 mb-2 text-[11px] text-cream-100/85">
                        <MapPin className="w-3.5 h-3.5 mt-0.5 text-terracotta" />
                        <span className="font-medium">{item.location}</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-cream-50 leading-tight mb-2 group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-cream-100/80 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span>View details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-[80] bg-forest-800/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 md:p-10"
              onClick={() => setSelectedId(null)}
            >
              <div
                className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-cream-50 shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedId(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cream-50/95 backdrop-blur shadow-md flex items-center justify-center text-charcoal hover:bg-forest-800 hover:text-cream-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-800/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-cream-50/95 text-[10px] font-bold uppercase tracking-wider text-forest-800 shadow-md mb-3">
                      {selected.category === "residential"
                        ? "Residential"
                        : selected.category === "commercial"
                        ? "Commercial"
                        : "Vertical Garden"}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-50 mb-1">
                      {selected.title}
                    </h2>
                    <div className="flex items-center gap-2 text-cream-100/85 text-sm">
                      <MapPin className="w-4 h-4 text-terracotta" />
                      {selected.location}
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-10 overflow-y-auto">
                  <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                    {selected.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
