"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Star,
  Award,
  ShieldCheck,
  CheckCircle2,
  Leaf,
} from "lucide-react";
import { getWhatsAppLink, smoothScrollTo } from "@/lib/utils";

export const Hero = () => {
  const trustBadges = [
    {
      icon: Star,
      label: "4.9 / 5 Rating",
      sub: "From 300+ happy clients",
    },
    {
      icon: Award,
      label: "100+ Projects",
      sub: "Completed since 2018",
    },
    {
      icon: ShieldCheck,
      label: "Plant Guarantee",
      sub: "30-day survival promise",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600"
          alt="Tropical landscape garden"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-200 via-transparent to-forest-200/40" />
      </div>

      

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-terracotta/20 blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[5%] w-40 h-40 rounded-full bg-sage-400/30 blur-3xl pointer-events-none"
      />

      <div className="container-wide py-20 md:py-32 relative">
        <div className="max-w-3xl text-cream-50">
          {/* Pretitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cream-50/10 backdrop-blur-md border border-cream-50/15 mb-6"
          >
            <Leaf className="w-4 h-4 text-terracotta" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-cream-100">
              Boutique Landscaping Studio
            </span>
            <span className="flex items-center gap-1 text-xs text-cream-200/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
              Bali · Jakarta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Bringing the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-terracotta">
                Beauty of Nature
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 left-0 h-3 bg-terracotta/25 -z-0 rounded"
              />
            </span>{" "}
            into Your Living Spaces.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-cream-100/85 max-w-2xl leading-relaxed mb-10"
          >
            Professional landscaping design & build services, paired with a
            curated collection of premium houseplants for homes and commercial
            spaces.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button
              onClick={() => smoothScrollTo("shop")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-terracotta px-7 py-4 text-base font-bold text-white shadow-xl shadow-terracotta/30 transition-all hover:brightness-110 hover:-translate-y-1 hover:shadow-2xl hover:shadow-terracotta/40 active:translate-y-0"
            >
              Explore Plant Shop
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href={getWhatsAppLink(
                encodeURIComponent(
                  "Hi Taman Suri! I'm interested in a landscaping consultation for my space."
                )
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border-2 border-cream-50/30 bg-cream-50/5 backdrop-blur-md px-7 py-4 text-base font-bold text-cream-50 transition-all hover:bg-cream-50 hover:text-forest-800 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.3} />
              Consult via WhatsApp
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {trustBadges.map((b, i) => (
              <div
                key={b.label}
                className="flex items-start gap-3 p-4 rounded-2xl bg-cream-50/5 backdrop-blur-md border border-cream-50/10"
              >
                <div className="w-10 h-10 rounded-full bg-terracotta/25 flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-terracotta" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold text-cream-50 leading-tight">
                    {b.label}
                  </div>
                  <div className="text-xs text-cream-100/60 mt-0.5">
                    {b.sub}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-cream-50/30 flex items-start justify-center p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-cream-50/70"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
