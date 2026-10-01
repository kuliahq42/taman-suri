"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/utils";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/MotionWrap";

export const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-cream-200/50">
      {/* Decorative bg */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-sage-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sage-100 border border-sage-200 mb-5">
              <Sparkles className="w-4 h-4 text-sage-600" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-sage-700">
                Our Services
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 leading-tight tracking-tight mb-5 text-balance">
              Landscaping services crafted for{" "}
              <span className="text-terracotta">modern living</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-sage-700 leading-relaxed">
              From intimate residential courtyards to sweeping commercial
              plantscapes, our design team blends artistry with horticultural
              expertise to create landscapes that endure and inspire.
            </p>
          </FadeIn>
        </div>

        {/* Service cards grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl bg-cream-50 shadow-xl shadow-forest-800/5 border border-forest-800/5 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-800/70 via-forest-800/20 to-transparent" />

                {/* Category chip */}
                <div className="absolute top-5 left-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50/95 backdrop-blur shadow-lg">
                    <Leaf className="w-4 h-4 text-forest-800" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-forest-800">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Starting price */}
                <div className="absolute bottom-5 right-5">
                  <div className="px-4 py-2 rounded-full bg-terracotta shadow-lg shadow-terracotta/25">
                    <span className="text-xs font-bold text-white">
                      {service.startingPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-7 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-800 mb-3 group-hover:text-terracotta transition-colors">
                  {service.title}
                </h3>
                <p className="text-sage-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7">
                  {service.features.slice(0, 4).map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4.5 h-4.5 text-forest-800 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal/80">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-forest-800/5">
                  <Link
                    href={getWhatsAppLink(
                      encodeURIComponent(
                        `Hi Taman Suri! I'd like to book the ${service.title} service. Please share more details.`
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-forest-800 px-5 py-3 text-sm font-bold text-cream-50 shadow-lg shadow-forest-800/15 transition-all hover:bg-terracotta hover:-translate-y-0.5 hover:shadow-terracotta/25"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                  <Link
                    href="#portfolio"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800 hover:text-terracotta transition-colors"
                  >
                    See portfolio
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
