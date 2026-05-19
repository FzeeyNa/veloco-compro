"use client";

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

  return (
    <section id="ecosystem" className="section-padding bg-off-white">
      <div className="container-custom px-4 md:px-8" ref={ref}>
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div key={i} className="card text-center group reveal-item">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={program.logo}
                  alt={program.name}
                  fill
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
