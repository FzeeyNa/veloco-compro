"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(".reveal-item");
    const targets = children.length > 0 ? Array.from(children) : [el];

    // Set initial state immediately
    gsap.set(targets, { y: 30, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useHeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(".hero-item");

    // Set initial state
    gsap.set(items, { y: 40, opacity: 0 });

    const ctx = gsap.context(() => {
      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useCounterAnimation() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = parseInt(el.dataset.target || "0", 10);
    const suffix = el.dataset.suffix || "";

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}
