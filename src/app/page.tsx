import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Shop } from "@/components/sections/Shop";
import { Portfolio } from "@/components/sections/Portfolio";
import {
  Testimonials,
  WhatsAppCTABanner,
} from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 text-charcoal overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <Services />
        <Shop />
        <Portfolio />
        <Testimonials />
        <WhatsAppCTABanner />
      </main>

      <Footer />

      {/* Global overlays */}
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
}
