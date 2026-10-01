"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="relative bg-forest-800 text-cream-100 overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sage-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="container-wide pt-24 pb-10 relative">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sage-700/30 via-forest-700/20 to-terracotta/10 border border-cream-50/10 backdrop-blur"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50/10 text-xs font-semibold uppercase tracking-wider text-cream-200 mb-4">
                <Leaf className="w-3.5 h-3.5" />
                Plant Parent Club
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-cream-50 leading-tight mb-3">
                Get 10% off your first plant order.
              </h3>
              <p className="text-cream-200/80 text-sm md:text-base max-w-lg">
                Join our newsletter for monthly plant care tips, new arrivals,
                and exclusive landscaping design inspiration.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full bg-cream-50/10 border border-cream-50/15 text-cream-50 placeholder:text-cream-200/40 outline-none focus:border-terracotta/60 focus:bg-cream-50/15 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 text-sm font-bold text-white shadow-lg shadow-terracotta/20 transition-all hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-cream-50 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest-800" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-cream-50 leading-none">
                  Taman Suri
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-sage-300 font-semibold mt-0.5">
                  Landscapes · Plants
                </div>
              </div>
            </div>
            <p className="text-cream-200/70 text-sm leading-relaxed max-w-xs mb-6">
              Premium landscaping design & build studio and curated houseplant
              boutique. We help nature find its place in your world.
            </p>
            <div className="flex items-center gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream-50/10 hover:bg-terracotta flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label="social"
                >
                  <Icon className="w-4.5 h-4.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", id: "home" },
                { label: "Landscaping", id: "services" },
                { label: "Plant Shop", id: "shop" },
                { label: "Portfolio", id: "portfolio" },
                { label: "About Us", id: "about" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => smoothScrollTo(link.id)}
                    className="text-cream-200/70 hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm uppercase tracking-wider mb-5">
              Coverage
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              {[
                "Jakarta (All Areas)",
                "Bogor · Depok · Tangerang",
                "Bekasi · BSD · Gading Serpong",
                "Bandung · Bali (By Request)",
                "Surabaya (Coming Soon)",
              ].map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-sage-400 flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Hours */}
          <div>
            <h4 className="text-cream-50 font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/70">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-sage-400 flex-shrink-0" />
                <div>
                  <div className="font-medium text-cream-100">Mon–Sat</div>
                  <div className="text-xs">08:00 – 18:00</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <Link href="tel:+6282311139873" className="hover:text-terracotta transition-colors">
                  +62 823 1113 9873
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <Link href="mailto:hello@tamansuri.id" className="hover:text-terracotta transition-colors break-all">
                  hello@tamansuri.id
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-50/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-200/50">
          <p>© {new Date().getFullYear()} Taman Suri Landscapes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-cream-50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-cream-50 transition-colors">Terms of Service</Link>
            <span className="hidden md:inline">Crafted with 🌿 in Jakarta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
