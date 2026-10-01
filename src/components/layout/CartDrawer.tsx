"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Leaf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import {
  formatCurrency,
  formatWhatsAppMessage,
  getWhatsAppLink,
} from "@/lib/utils";

export const CartDrawer = () => {
  const isOpen = useCartStore((s) => s.isOpen);
  const items = useCartStore((s) => s.items);
  const setOpen = useCartStore((s) => s.setOpen);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);
  const total = getTotalPrice();

  const checkoutMessage = formatWhatsAppMessage(
    items.map((i) => ({
      name: `${i.plant.commonName} (${i.plant.botanicalName})`,
      quantity: i.quantity,
      price: i.plant.price,
    })),
    total
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-forest-800/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-cream-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-forest-800/10 flex items-center justify-between bg-cream-50/80 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest-800">
                    Your Cart
                  </h3>
                  <p className="text-xs text-sage-600">
                    {items.reduce((s, i) => s + i.quantity, 0)} plant
                    {items.reduce((s, i) => s + i.quantity, 0) !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close cart"
                className="w-10 h-10 rounded-full hover:bg-forest-800/5 flex items-center justify-center text-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center mb-6">
                    <Leaf className="w-12 h-12 text-sage-500" />
                  </div>
                  <h4 className="font-serif text-2xl text-forest-800 mb-2">
                    Cart is empty
                  </h4>
                  <p className="text-sm text-sage-600 mb-6 max-w-xs">
                    Explore our curated collection of premium plants to start
                    your garden journey.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="btn-primary"
                  >
                    Browse Plants
                  </button>
                </motion.div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item, idx) => (
                    <motion.li
                      key={item.plant.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-4 p-3 rounded-2xl hover:bg-white transition-colors border border-forest-800/5"
                    >
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-sage-100">
                        <Image
                          src={item.plant.image}
                          alt={item.plant.commonName}
                          fill
                          className="object-cover"
                          sizes="96px"
                        />
                      </div>
                      <div className="flex-1 flex flex-col min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h5 className="font-semibold text-forest-800 text-sm leading-tight truncate">
                              {item.plant.commonName}
                            </h5>
                            <p className="text-[11px] italic text-sage-600 truncate">
                              {item.plant.botanicalName}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.plant.id)}
                            aria-label="Remove"
                            className="w-7 h-7 rounded-full hover:bg-red-50 text-sage-400 hover:text-red-500 flex items-center justify-center flex-shrink-0 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-forest-800/5">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.plant.id,
                                  item.quantity - 1
                                )
                              }
                              aria-label="Decrease"
                              className="w-6 h-6 rounded-full hover:bg-forest-800/10 flex items-center justify-center text-forest-800"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-bold text-forest-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.plant.id,
                                  item.quantity + 1
                                )
                              }
                              aria-label="Increase"
                              className="w-6 h-6 rounded-full hover:bg-forest-800/10 flex items-center justify-center text-forest-800"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-sm font-bold text-forest-800">
                            {formatCurrency(item.plant.price * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="border-t border-forest-800/10 bg-cream-50 p-6 shadow-[0_-10px_40px_rgba(19,62,39,0.06)]"
              >
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm text-sage-600">
                    <span>Subtotal</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-sage-600">
                    <span>Delivery</span>
                    <span className="text-terracotta font-semibold">
                      Calculated via chat
                    </span>
                  </div>
                  <div className="flex justify-between items-end pt-3 border-t border-forest-800/10">
                    <span className="font-semibold text-forest-800">
                      Total
                    </span>
                    <span className="font-serif text-2xl font-bold text-forest-800">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>
                <Link
                  href={getWhatsAppLink(checkoutMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setTimeout(() => {
                      setOpen(false);
                      clearCart();
                    }, 500);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
                  Checkout via WhatsApp
                </Link>
                <p className="mt-3 text-center text-[11px] text-sage-500">
                  Secure order — we will confirm details & delivery via chat
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
