"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MarketplaceTeaser() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10">
          <span className="badge mb-4 reveal-item">Marketplace</span>
          <h2
            className="text-3xl md:text-5xl font-normal leading-tight reveal-item"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Veloco <span className="text-primary">Marketplace</span>
          </h2>
          <p className="text-mid-gray mt-4 max-w-lg mx-auto reveal-item">
            Template website siap pakai untuk bisnis Anda — segera hadir.
          </p>
        </div>

        {/* Blurred preview cards */}
        <div className="relative reveal-item">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 blur-card">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 p-6"
              >
                <div className="w-full h-3 bg-gray-300 rounded mb-3" />
                <div className="w-2/3 h-3 bg-gray-300 rounded mb-6" />
                <div className="w-full h-24 bg-gray-300/50 rounded-lg mb-4" />
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-gray-300 rounded-full" />
                  <div className="w-20 h-6 bg-gray-300 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Frosted overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-md mx-4">
              <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                >
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                COMING SOON
              </h3>
              <p className="text-sm text-mid-gray mb-6">
                Be the first to know when we launch
              </p>

              <form
                className="flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" className="btn-primary text-sm !px-5">
                  Notify Me
                </button>
              </form>

              <Link
                href="/marketplace"
                className="text-sm text-primary hover:underline mt-4 inline-block"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
