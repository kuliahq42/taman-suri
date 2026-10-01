"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MessageCircle, X, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { getWhatsAppLink } from "@/lib/utils";

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(false), 6000);
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip bubble */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-xs mr-16 border border-forest-800/5"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  aria-label="Dismiss"
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-sage-100 hover:bg-sage-200 text-sage-500 flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-sage-500 mb-0.5">
                      Need help?
                    </div>
                    <p className="text-sm text-charcoal/80 leading-snug">
                      Our plant specialist is online! Chat with us for free
                      advice on plants & landscaping.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white border-r border-b border-forest-800/5 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <Link
            href={getWhatsAppLink(
              encodeURIComponent(
                "Hi Taman Suri! I have a question about your services."
              )
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative"
          >
            <motion.div
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl"
            />
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-16 h-16 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 flex items-center justify-center border-4 border-white"
            >
              <MessageCircle
                className="w-8 h-8 text-white"
                strokeWidth={2.5}
              />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 border-2 border-white">
                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
              </span>
            </motion.div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
