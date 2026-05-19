"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Web Development",
    description: "Website modern, responsif, dan performa tinggi untuk meningkatkan kehadiran digital bisnis Anda.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mobile App",
    description: "Aplikasi mobile cross-platform yang intuitif dan powerful untuk iOS dan Android.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan user experience yang memukau untuk konversi optimal.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "IT Consulting",
    description: "Konsultasi strategis untuk transformasi digital, arsitektur sistem, dan roadmap teknologi.",
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-primary via-primary-deep to-[#001a5c] text-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <span className="badge mb-6 !bg-white/10 !text-white reveal-item">
          Our Services
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 reveal-item">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Comprehensive
              <br />
              Digital
              <br />
              <span className="italic">Services</span>
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group cursor-default reveal-item"
              >
                <div className="text-white/80 mb-4 group-hover:text-accent-yellow transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
