"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type Project = {
  title: string;
  category: string;
  description: string;
  color: string;
  isPlaceholder?: boolean;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Veloco x Thoth",
    category: "IT Solutions",
    description: "Platform kolaborasi untuk solusi digital enterprise.",
    color: "from-primary to-primary-deep",
  },
  {
    title: "Layak App",
    category: "UMKM Application",
    description: "Aplikasi mobile untuk membantu kelayakan bisnis UMKM.",
    color: "from-[#1a1a2e] to-[#16213e]",
    link: "https://yayasanlayak.or.id/",
  },
  {
    title: "More Projects",
    category: "Coming Soon",
    description: "Proyek menarik lainnya yang sedang dalam pengembangan.",
    color: "from-gray-200 to-gray-300",
    isPlaceholder: true,
  },
];

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="badge mb-4 reveal-item">Portfolio</span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight reveal-item"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Our Latest
              <br />
              <span className="italic text-mid-gray">Projects</span>
            </h2>
          </div>

          <div className="flex gap-2 reveal-item">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const innerContent = (
              <>
                {/* Image placeholder */}
                <div
                  className={`rounded-2xl aspect-[4/3] bg-gradient-to-br ${project.color} mb-4 overflow-hidden relative`}
                >
                  {project.isPlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-dark/40 text-lg font-medium">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                      <span
                        className="text-white/20 text-4xl font-bold"
                        style={{ fontFamily: "var(--font-dm-serif)" }}
                      >
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {!project.isPlaceholder && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-mid-gray group-hover:text-primary transition-colors"
                    >
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-mid-gray">{project.category}</p>
              </>
            );

            if (project.link) {
              return (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer reveal-item block"
                >
                  {innerContent}
                </a>
              );
            }

            return (
              <div
                key={i}
                className="group cursor-pointer reveal-item"
              >
                {innerContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
