"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MarketplaceTeaser() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-off-white border-y border-gray-100">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="max-w-3xl mx-auto text-center reveal-item bg-white p-10 md:p-16 rounded-2xl border border-gray-100 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
            Coming Soon
          </div>
          
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Veloco <span className="text-primary">Marketplace</span>
          </h2>
          
          <p className="text-mid-gray text-lg md:text-xl mb-10 max-w-lg mx-auto">
            Template website siap pakai berstandar industri untuk mempercepat digitalisasi bisnis Anda.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
            />
            <button type="submit" className="btn-primary py-4 px-8 justify-center">
              Notify Me
            </button>
          </form>
          
          <Link
            href="/marketplace"
            className="text-sm font-medium text-mid-gray hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            Pelajari lebih lanjut
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
