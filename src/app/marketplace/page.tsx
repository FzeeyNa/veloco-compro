"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MarketplacePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen bg-primary relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Floating decorative elements - CSS only */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/5 animate-float" />
      <div
        className="absolute top-40 right-20 w-14 h-14 rounded-full bg-white/5 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-white/5 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/5 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/3 left-1/3 w-8 h-8 rounded-full bg-white/5 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/50 via-transparent to-primary-deep/50" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo/6.png"
            alt="Veloco."
            width={160}
            height={60}
            className="h-12 md:h-16 w-auto mx-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-normal text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Marketplace
        </h1>

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">
            Coming Soon — Q3 2026
          </span>
        </div>

        <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed">
          Template website siap pakai untuk segala kebutuhan bisnis Anda.
          <br className="hidden md:block" />
          Landing page, e-commerce, portfolio, dan lainnya.
        </p>

        {/* Email capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-4 rounded-full bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors shrink-0 animate-pulse-glow"
            >
              Notify Me 🔔
            </button>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-8 border border-white/20">
            <span className="text-3xl block mb-2">🎉</span>
            <p className="text-white font-medium">Thank you!</p>
            <p className="text-white/60 text-sm mt-1">
              We&apos;ll notify you when the marketplace launches.
            </p>
          </div>
        )}

        {/* Features preview */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
          {[
            { icon: "🎨", label: "Premium Templates" },
            { icon: "⚡", label: "Ready to Use" },
            { icon: "📱", label: "Fully Responsive" },
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <span className="text-2xl block mb-1">{feature.icon}</span>
              <span className="text-white/50 text-xs">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3M3 8L7 4M3 8L7 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
