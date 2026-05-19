"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function VisiMisi() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Visi */}
          <div className="reveal-item">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Visi
            </span>
            <h3
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              &ldquo;Crafting
              <br />
              <span className="text-primary">Digital</span>
              <br />
              Impact&rdquo;
            </h3>
            <p className="text-light-gray mt-6 text-sm leading-relaxed">
              Menjadi perusahaan IT Solutions terdepan yang memberikan dampak
              digital nyata bagi setiap klien dan masyarakat.
            </p>
          </div>

          {/* Misi */}
          <div className="reveal-item">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Misi
            </span>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  text: "Memudahkan klien dalam membangun kehadiran digital yang kuat dan berdampak.",
                },
                {
                  num: "02",
                  text: "Mendukung transformasi digital UMKM dan bisnis dengan solusi teknologi yang terjangkau.",
                },
                {
                  num: "03",
                  text: "Memberikan solusi tepat sasaran melalui kolaborasi erat dengan setiap klien.",
                },
                {
                  num: "04",
                  text: "Mengembangkan ekosistem teknologi yang inklusif melalui program edukasi dan komunitas.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4">
                  <span className="text-primary font-semibold text-sm mt-0.5 shrink-0">
                    {item.num}
                  </span>
                  <p className="text-light-gray text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
