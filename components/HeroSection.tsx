import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-warm via-amber-50 to-orange-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-amber/10 px-4 py-1.5 text-sm font-semibold text-brand-amber dark:bg-brand-amber/20">
            Welcome to Annapurna
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            Equipping Your Kitchen with{" "}
            <span className="text-brand-amber">Quality &amp; Trust</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Discover premium kitchen appliances and home utensils at the best prices.
            Your one-stop shop for everything your kitchen needs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="#products">
              <Button size="lg">View Catalog</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-amber/5 dark:bg-brand-amber/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/5 dark:bg-brand-orange/10" />
    </section>
  );
}
