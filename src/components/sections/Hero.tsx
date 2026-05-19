"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

const slides = [
  {
    id: 1,
    image: "/images/hero/bg1.png",
    label: "Digital Solutions",
    subtitle: "Advanced Digital Solutions",
    desc: "and rapid prototyping for optimal results"
  },
  {
    id: 2,
    image: "/images/hero/bg2.png",
    label: "Team Collaboration",
    subtitle: "Expert Development Teams",
    desc: "working seamlessly to build your vision"
  },
  {
    id: 3,
    image: "/images/hero/bg3.png",
    label: "Data Networks",
    subtitle: "Secure Infrastructure",
    desc: "robust networks and cloud architectures"
  },
  {
    id: 4,
    image: "/images/hero/bg4.png",
    label: "Code & Logic",
    subtitle: "Clean Architecture",
    desc: "scalable codebases for the future"
  }
];

export default function Hero() {
  const heroRef = useHeroAnimation();
  const statsRef = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-10 overflow-hidden bg-white">
      <div className="container-custom px-4 md:px-8 mt-10 md:mt-0" ref={heroRef}>
        {/* Mobile Badge */}
        <div className="md:hidden flex items-center gap-4 mb-6 hero-item will-animate">
          <span className="badge">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            IT Solutions
          </span>
        </div>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-start mb-12 hero-item will-animate">
          
          {/* Right Side (Main Title) */}
          <div className="w-full md:w-2/3 relative mb-8 md:mb-0">
            <p className="hidden md:block absolute top-4 right-0 text-sm text-mid-gray text-right max-w-[180px] leading-relaxed font-medium z-10">
              Worldwide Digital Solutions for growing businesses
            </p>
            
            <h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-normal leading-[1.1] md:leading-[0.9] tracking-tight relative z-0"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Crafting
              <br />
              <span className="text-primary block mt-1 md:mt-0 md:ml-16 lg:ml-24 xl:ml-32">Digital</span>
              <span className="block mt-1 md:mt-0 md:ml-32 lg:ml-48 xl:ml-64">Impact.</span>
            </h1>
          </div>

          {/* Left Side (Text + CTA) */}
          <div className="w-full md:w-1/3 pt-2 z-10 mt-2 md:mt-0">
            <div className="hidden md:flex items-center gap-4 mb-8">
              <span className="badge">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                IT Solutions
              </span>
            </div>
            <p className="text-dark/80 mb-8 max-w-[280px] leading-relaxed font-medium text-base">
              High-quality digital solutions bringing your ideas to life with precision, scalability, and impact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#portfolio" className="btn-secondary">
                Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Hero visual card */}
        <div className="hero-item will-animate relative rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] md:aspect-[16/7] min-h-[300px] mb-12 group shadow-sm border border-gray-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />
            </div>
          ))}

          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl max-w-xs hidden md:block z-20 transition-all duration-300">
            <p className="text-sm font-semibold text-dark">{slides[currentSlide].subtitle}</p>
            <p className="text-xs text-mid-gray mt-1 leading-relaxed">
              {slides[currentSlide].desc}
            </p>
          </div>
          
          <div className="absolute bottom-6 left-6 flex gap-2 z-20">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(i)}
                className={`h-10 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 overflow-hidden backdrop-blur-sm ${
                  i === currentSlide
                    ? "bg-dark text-white px-5 min-w-[140px] shadow-lg"
                    : "bg-white/80 text-dark w-10 hover:bg-white cursor-pointer"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className="flex items-center whitespace-nowrap">
                  <span className={`${i === currentSlide ? "mr-2 opacity-80" : ""}`}>0{i + 1}</span>
                  <span
                    className={`transition-all duration-500 overflow-hidden ${
                      i === currentSlide ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                    }`}
                  >
                    {slide.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
