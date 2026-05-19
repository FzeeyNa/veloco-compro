"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const programs = [
  {
    name: "Veloco EduTech",
    logo: "/logo/9.png",
    description: "Divisi edukasi teknologi untuk memberdayakan generasi muda melalui program pembelajaran digital.",
    category: "Education Technology",
    status: "Active",
  },
  {
    name: "Veloco GameDev",
    logo: "/logo/11.png",
    description: "Komunitas game development yang mendorong kreativitas dan inovasi di industri gaming lokal.",
    category: "Game Development",
    status: "Active",
  },
  {
    name: "Risol Mayo Hibat",
    logo: "/logo/13.png",
    description: "Tim hackathon Veloco yang aktif berkompetisi di berbagai event nasional dan internasional.",
    category: "Hackathon Team",
    status: "Ongoing",
  },
  {
    name: "Hibat Raja Risol",
    logo: "/logo/15.png",
    description: "Tim hackathon kedua yang fokus pada solusi teknologi untuk permasalahan sosial dan bisnis.",
    category: "Hackathon Team",
    status: "Ongoing",
  },
];

export default function Ecosystem() {
  const ref = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8; // scroll by 80% of container width
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="ecosystem" className="section-padding bg-off-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="text-center mb-8 md:mb-12">
          <span className="badge mb-4 reveal-item">Our Ecosystem</span>
          <h2
            className="text-3xl md:text-5xl font-normal leading-tight reveal-item"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Program & Inisiatif
            <br />
            <span className="italic text-mid-gray">dari Veloco</span>
          </h2>
        </div>

        {/* Mobile scroll buttons */}
        <div className="flex justify-end gap-2 mb-4 sm:hidden reveal-item pr-2">
          <button 
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-gray-50 hover:text-primary transition-colors shadow-sm"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-gray-50 hover:text-primary transition-colors shadow-sm"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {programs.map((program, i) => (
            <div key={i} className="card text-center group reveal-item min-w-65 w-[75vw] sm:min-w-0 sm:w-auto shrink-0 snap-center">
              <div className="w-24 h-16 sm:w-32 sm:h-24 mx-auto mb-4 relative">
                <Image
                  src={program.logo}
                  alt={program.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-semibold mb-1">{program.name}</h3>
              <p className="text-xs text-mid-gray mb-3">{program.category}</p>
              <p className="text-sm text-mid-gray leading-relaxed mb-4">
                {program.description}
              </p>
              <span
                className={
                  program.status === "Active" ? "badge-active" : "badge-ongoing"
                }
              >
                {program.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
