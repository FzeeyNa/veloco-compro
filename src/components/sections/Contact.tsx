"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-off-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="reveal-item">
            <div className="relative">
              <div className="bg-primary rounded-2xl p-8 md:p-12 flex items-center justify-center">
                <Image
                  src="/logo/2.png"
                  alt="Veloco"
                  width={300}
                  height={300}
                  className="w-2/3 h-auto"
                />
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-accent-yellow text-lg">★</span>
                <span className="text-lg font-bold">5.0</span>
              </div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="reveal-item">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-4"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Ready to Start
              <br />
              Your <span className="text-primary">Project</span>?
            </h2>
            <p className="text-mid-gray mb-8 text-base md:text-lg leading-relaxed">
              Mari diskusikan solusi terbaik untuk bisnis Anda. Tim kami siap
              membantu mewujudkan visi digital Anda.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/6285781228271?text=Halo%20Veloco%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat via WhatsApp
              </a>

              {/* Email CTA */}
              <a
                href="mailto:velocoproject@gmail.com"
                className="btn-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
