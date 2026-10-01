"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Search,
  ShoppingBag,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { useCartStore } from "@/store/cart";
import { getWhatsAppLink, smoothScrollTo } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Landscaping", id: "services" },
  { label: "Plant Shop", id: "shop" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const getTotalItems = useCartStore((s) => s.getTotalItems);
  const cartCount = getTotalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => smoothScrollTo(id), 50);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-xl shadow-md shadow-forest-800/5 border-b border-forest-800/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center group-hover:bg-forest-700 transition-colors">
            <Leaf className="w-5 h-5 text-cream-50" strokeWidth={2.5} />
          </div>
          <div className="text-left">
            <div
              className={`font-serif text-xl font-bold leading-none tracking-tight transition-colors ${
                scrolled ? "text-forest-800" : "text-forest-800"
              }`}
            >
              Taman Suri
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-sage-600 font-semibold mt-0.5">
              Landscapes · Plants
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="px-4 py-2 text-sm font-medium text-charcoal hover:text-forest-800 relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-terracotta group-hover:w-1/2 transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Search"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled
                ? "hover:bg-forest-800/5 text-forest-800"
                : "hover:bg-white/10 text-forest-800"
            }`}
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={toggleCart}
            aria-label="Shopping Cart"
            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              scrolled
                ? "hover:bg-forest-800/5 text-forest-800"
                : "hover:bg-white/10 text-forest-800"
            }`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-terracotta text-[10px] font-bold text-white flex items-center justify-center shadow-md"
              >
                {cartCount > 9 ? "9+" : cartCount}
              </motion.span>
            )}
          </button>

          <Link
            href={getWhatsAppLink(
              encodeURIComponent(
                "Hi Taman Suri! I'd like to book a free consultation for my landscaping project."
              )
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-forest-800/20 transition-all hover:bg-forest-700 hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Free Consultation
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-forest-800 hover:bg-forest-800/5"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-cream-50 border-t border-forest-800/5"
          >
            <nav className="container-wide py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left px-4 py-3 rounded-xl text-base font-medium text-charcoal hover:bg-forest-800/5 hover:text-forest-800 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <Link
                href={getWhatsAppLink(
                  encodeURIComponent(
                    "Hi Taman Suri! I'd like to book a free consultation."
                  )
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:hidden inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-5 py-3 text-sm font-semibold text-cream-50"
              >
                <MessageCircle className="w-4 h-4" />
                Free Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
