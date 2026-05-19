"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: "01",
    title: "Fast Delivery",
    description: "Velocity bukan sekadar nama — kami mengutamakan kecepatan tanpa mengorbankan kualitas.",
  },
  {
    icon: "02",
    title: "Precision",
    description: "Solusi tepat sasaran, tidak berlebihan. Setiap fitur dirancang sesuai kebutuhan klien.",
  },
  {
    icon: "03",
    title: "Trusted Partner",
    description: "Hadir dari awal hingga akhir. Pendampingan penuh selama proses pengembangan.",
  },
  {
    icon: "04",
    title: "Innovative",
    description: "Selalu menggunakan teknologi terkini untuk memberikan solusi yang relevan dan future-proof.",
  },
  {
    icon: "05",
    title: "Growth-Oriented",
    description: "Tumbuh bersama klien. Solusi kami dirancang untuk scale seiring berkembangnya bisnis Anda.",
  },
  {
    icon: "06",
    title: "End-to-End Support",
    description: "Layanan menyeluruh dari konsepsi, pengembangan, hingga pemeliharaan lanjutan.",
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="text-center mb-16">
          <span className="badge mb-4 !bg-white/10 !text-white reveal-item">
            Why Choose Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-normal leading-tight reveal-item"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            Why <span className="text-primary">Veloco</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 reveal-item group"
            >
              <span className="text-4xl font-light text-white/30 mb-6 block group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-dm-serif)" }}>{reason.icon}</span>
              <h3 className="text-xl font-medium mb-3">{reason.title}</h3>
              <p className="text-base text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
