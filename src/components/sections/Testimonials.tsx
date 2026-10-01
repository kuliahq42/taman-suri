"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Star,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Award,
  Users,
  HeartHandshake,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { getWhatsAppLink } from "@/lib/utils";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/motion/MotionWrap";

const STATS = [
  { icon: Award, value: "100+", label: "Projects Completed" },
  { icon: Users, value: "300+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "7", label: "Years of Experience" },
  { icon: HeartHandshake, value: "98%", label: "Repeat Client Rate" },
];

export const Testimonials = () => {
  return (
    <section id="about" className="section-padding relative bg-cream-50 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-sage-300/20 blur-3xl pointer-events-none" />

      <div className="container-wide relative">
        {/* About / Intro + Stats */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest-800/10">
              <div className="aspect-[5/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1000&q=85"
                  alt="Taman Suri team at work"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge */}
              <motion.div
                animate={{ rotate: [0, -3, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 bg-cream-50 rounded-2xl px-5 py-4 shadow-xl max-w-[220px]"
              >
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-terracotta fill-terracotta"
                    />
                  ))}
                </div>
                <div className="font-serif text-2xl font-bold text-forest-800 leading-none mb-1">
                  4.9 / 5.0
                </div>
                <div className="text-xs text-sage-600">from 300+ reviews</div>
              </motion.div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sage-100 border border-sage-200 mb-5">
                <Sparkles className="w-4 h-4 text-sage-600" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-sage-700">
                  About Taman Suri
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 leading-[1.1] tracking-tight mb-6 text-balance">
                A boutique studio crafting{" "}
                <span className="text-terracotta">landscapes with soul</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sage-700 text-base md:text-lg leading-relaxed mb-5">
                Founded in 2018 in Jakarta, Taman Suri began as a tiny nursery
                with a big dream: to make world-class landscape design
                accessible to every home and business in Indonesia.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-sage-700 text-base md:text-lg leading-relaxed mb-8">
                Today, our team of certified horticulturists, landscape
                designers, and master craftsmen have completed over 100
                projects — from intimate urban courtyards to sprawling villa
                estates across Bali and beyond.
              </p>
            </FadeIn>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.05}>
                  <div className="p-4 sm:p-5 rounded-2xl bg-sage-50/60 border border-sage-100">
                    <stat.icon className="w-5 h-5 text-forest-800 mb-2" />
                    <div className="font-serif text-2xl md:text-3xl font-bold text-forest-800 leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-sage-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/15 mb-5">
              <Quote className="w-4 h-4 text-terracotta" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta/90">
                Client Love
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 leading-tight tracking-tight mb-5 text-balance">
              What our clients say about us
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sage-700 text-base md:text-lg leading-relaxed">
              Words from the homeowners, business owners, and partners we&apos;ve
              had the pleasure of working with.
            </p>
          </FadeIn>
        </div>

        {/* Testimonial Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t) => (
            <motion.figure
              key={t.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative p-6 md:p-7 rounded-3xl bg-cream-50 border border-forest-800/5 shadow-lg shadow-forest-800/[0.04] flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-sage-200" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-terracotta fill-terracotta"
                  />
                ))}
              </div>

              <blockquote className="relative z-10 text-charcoal/85 leading-relaxed mb-6 flex-1">
                <p className="text-[15px]">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-forest-800/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-cream-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-bold text-forest-800 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-xs text-sage-600 mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export const WhatsAppCTABanner = () => {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1800&q=80"
          alt="CTA Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/95 via-forest-800/85 to-forest-800/75" />
      </div>

      <div className="container-wide relative">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center text-cream-50">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 text-balance">
              Ready to transform your{" "}
              <span className="text-terracotta">outdoor space?</span>
            </h2>
            <p className="text-base md:text-xl text-cream-100/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a free on-site consultation with our senior design team.
              We&apos;ll walk your space, share ideas, and draft a custom proposal
              — with zero obligations.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link
                href={getWhatsAppLink(
                  encodeURIComponent(
                    "Hi Taman Suri! I'd like to schedule a FREE on-site consultation. Please share available slots."
                  )
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base md:text-lg font-bold text-white shadow-2xl shadow-[#25D366]/30 transition-all hover:brightness-110 hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" strokeWidth={2.3} />
                Free Consultation via WhatsApp
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream-50/30 bg-cream-50/5 backdrop-blur px-8 py-4 text-base md:text-lg font-bold text-cream-50 transition-all hover:bg-cream-50 hover:text-forest-800 hover:-translate-y-1"
              >
                Chat with our team
              </Link>
            </div>
            <p className="mt-8 text-xs text-cream-100/60">
              ✅ No pressure sales · ✅ Response within 24 hours · ✅ Jakarta &
              surrounding areas
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
