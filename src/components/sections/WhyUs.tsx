"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "Velocity bukan sekadar nama — kami mengutamakan kecepatan tanpa mengorbankan kualitas.",
  },
  {
    icon: "🎯",
    title: "Precision",
    description: "Solusi tepat sasaran, tidak berlebihan. Setiap fitur dirancang sesuai kebutuhan klien.",
  },
  {
    icon: "🤝",
    title: "Trusted Partner",
    description: "Hadir dari awal hingga akhir. Pendampingan penuh selama proses pengembangan.",
  },
  {
    icon: "💡",
    title: "Innovative",
    description: "Selalu menggunakan teknologi terkini untuk memberikan solusi yang relevan dan future-proof.",
  },
  {
    icon: "📈",
    title: "Growth-Oriented",
    description: "Tumbuh bersama klien. Solusi kami dirancang untuk scale seiring berkembangnya bisnis Anda.",
  },
];

export default function WhyUs() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="text-center mb-12">
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
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 reveal-item ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <span className="text-3xl mb-4 block">{reason.icon}</span>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
