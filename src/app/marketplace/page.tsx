"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

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
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center px-4 pt-20">
        {/* Floating decorative elements - CSS only */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float" />
        <div
          className="absolute top-40 right-20 w-14 h-14 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-8 h-8 rounded-full bg-primary/5 animate-float"
          style={{ animationDelay: "2s" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto w-full">
          {/* Coming Soon Watermark */}
          <div 
            className="watermark text-center leading-none mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#000000", opacity: 0.04 }}
          >
            COMING SOON
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-medium text-dark mb-4">
            Veloco Marketplace
          </h1>

          <p className="text-mid-gray text-base md:text-lg mb-10 leading-relaxed max-w-sm mx-auto">
            Template website siap pakai untuk segala kebutuhan bisnis Anda. Landing page, e-commerce, portfolio, dan lainnya.
          </p>

          {/* Email capture */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 rounded-full bg-gray-50 border border-gray-200 text-dark placeholder:text-gray-400 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-deep transition-colors shrink-0"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto mb-12 border border-gray-200 w-full">
              <p className="text-dark font-medium mb-1">Thank you for your interest!</p>
              <p className="text-mid-gray text-sm">
                We&apos;ll notify you when the marketplace launches.
              </p>
            </div>
          )}

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mid-gray hover:text-primary text-sm transition-colors"
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
    </>
  );
}
