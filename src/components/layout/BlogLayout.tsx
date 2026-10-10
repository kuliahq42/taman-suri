import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import type { ReactNode } from "react";

export const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-cream-50 text-charcoal overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
};
