import Link from "next/link";
import { Hero } from "./Hero";
import { HowItWorksCarousel } from "./HowItWorksCarousel";

export function Landing() {
  return (
    <div className="min-h-screen bg-bg-warm px-4 py-12">
      <div className="mx-auto max-w-2xl space-y-10">
        <Hero />
        <HowItWorksCarousel />
        <p className="text-center text-sm text-text-dark/70">
          <Link href="/help" className="underline hover:text-primary">
            Help & FAQ
          </Link>
        </p>
      </div>
    </div>
  );
}
