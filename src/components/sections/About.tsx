"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-off-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <span className="badge mb-6 reveal-item">About Us</span>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight mb-4 reveal-item"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          Trusted partner in
          <br />
          <span className="italic text-mid-gray">digital transformation</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left - Logo card */}
          <div className="reveal-item">
            <div className="bg-primary rounded-2xl p-8 md:p-12 flex items-center justify-center aspect-square max-w-md">
              <Image
                src="/logo/2.png"
                alt="Veloco - Crafting Digital Impact"
                width={400}
                height={400}
                className="w-3/4 h-auto"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center reveal-item">
            <p className="text-mid-gray leading-relaxed mb-6 text-base md:text-lg">
              <strong className="text-dark">Veloco</strong> (Velocity +
              Technology) adalah perusahaan IT Solutions yang berfokus pada
              digital transformation. Kami membantu bisnis dari berbagai skala
              untuk membangun kehadiran digital yang kuat dan berdampak.
            </p>
            <p className="text-mid-gray leading-relaxed mb-8 text-base md:text-lg">
              Dengan tim yang passionate dan berpengalaman, kami menghadirkan
              solusi teknologi yang tepat sasaran — dari website, mobile app,
              hingga konsultasi IT strategis.
            </p>

            <div className="flex gap-12">
              <div>
                <p
                  className="text-4xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  10+
                </p>
                <p className="text-sm text-mid-gray mt-1">Team Members</p>
              </div>
              <div>
                <p
                  className="text-4xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-dm-serif)" }}
                >
                  98%
                </p>
                <p className="text-sm text-mid-gray mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
