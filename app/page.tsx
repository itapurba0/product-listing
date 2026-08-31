import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import StoreHighlights from "@/components/StoreHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Fixed Theme Toggle */}
      <div className="fixed bottom-4 right-4 z-50 rounded-full bg-white shadow-lg dark:bg-zinc-900 dark:shadow-brand-amber/10">
        <ThemeToggle />
      </div>

      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductGrid />
        <StoreHighlights />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
