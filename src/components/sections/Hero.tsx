"use client";

import { useScrollReveal, useHeroAnimation, useCounterAnimation } from "@/hooks/useScrollReveal";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useCounterAnimation();
  return (
    <span
      ref={ref}
      data-target={target}
      data-suffix={suffix}
      className="text-3xl md:text-4xl font-bold"
      style={{ fontFamily: "var(--font-dm-serif)" }}
    >
      0{suffix}
    </span>
  );
}

export default function Hero() {
  const heroRef = useHeroAnimation();
  const statsRef = useScrollReveal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-white">
      <div className="container-custom px-4 md:px-8" ref={heroRef}>
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6 hero-item will-animate">
          <div className="flex items-center gap-4">
            <span className="badge">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              IT Solutions
            </span>
          </div>
          <p className="text-sm text-mid-gray max-w-xs lg:text-right">
            Worldwide Digital Solutions for growing businesses
          </p>
        </div>

        {/* Main heading */}
        <div className="mb-10 hero-item will-animate">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-normal leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Crafting
            <br />
            <span className="text-primary">Digital</span>
            <br />
            Impact.
          </h1>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-12 hero-item will-animate">
          <a href="#contact" className="btn-primary">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#portfolio" className="btn-secondary">
            See Portfolio
          </a>
        </div>

        {/* Hero visual card */}
        <div className="hero-item will-animate relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[16/7] mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
          <div className="absolute bottom-6 right-6 bg-white rounded-xl p-4 shadow-lg max-w-xs hidden md:block">
            <p className="text-sm font-medium">Advanced Digital Solutions</p>
            <p className="text-xs text-mid-gray mt-1">
              and rapid prototyping for optimal results
            </p>
          </div>
          <div className="absolute bottom-6 left-6 flex gap-2">
            {["01", "02", "03", "04"].map((num, i) => (
              <div
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                  i === 1
                    ? "bg-dark text-white px-4 w-auto"
                    : "bg-white/80 text-dark"
                }`}
              >
                {i === 1 ? "Digital Solutions" : num}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center reveal-item">
              <Counter target={20} suffix="+" />
              <p className="text-sm text-mid-gray mt-1">Projects Completed</p>
            </div>
            <div className="stats-divider hidden md:block" />
            <div className="text-center reveal-item">
              <Counter target={5} suffix="+" />
              <p className="text-sm text-mid-gray mt-1">Programs Running</p>
            </div>
            <div className="stats-divider hidden md:block" />
            <div className="text-center reveal-item">
              <Counter target={100} suffix="%" />
              <p className="text-sm text-mid-gray mt-1">On-time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
