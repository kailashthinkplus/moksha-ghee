"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;

    if (!hero || !bg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      bg.style.transform = `
        translate3d(${x}px, ${y}px, 0)
        scale(1.05)
      `;
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* BACKGROUND */}

      <div
        ref={bgRef}
        className="
          absolute
          inset-0
          transition-transform
          duration-300
          ease-out
          will-change-transform
        "
      >
        <Image
          src="/images/hero-bg-desktop.jpg"
          alt="Moksha Hero"
          fill
          priority
          className="
            object-cover
            object-center
            scale-[1.03]
          "
        />
      </div>

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/15
        "
      />

      {/* CONTENT */}

<div
  className="
    relative
    z-10
    flex
    h-full
    flex-col
    items-center
    justify-center
    text-center
    px-6
    pt-[120px]
  "
>
  {/* HEADING */}

  <h1
    className="
      max-w-[900px]
      text-[45px]
      font-extrabold
      uppercase
      leading-[0.92]
      tracking-[-2px]
      text-[#A10F12]
      md:text-[66px]
    "
  >
    HANDCRAFTED GHEE
  </h1>

  {/* TAGLINE */}

  <div
    className="
      mt-7
      rotate-[-1.8deg]
      bg-[#E5AA00]
      px-14
      py-2
      shadow-lg
    "
  >
<span
  className="
    font-riwaya
    text-[20px]
    md:text-[32px]
    font-normal
    tracking-[0.02em]
    text-[#8A1D11]
  "
>
      For A Modern Indulgence
    </span>
  </div>

  {/* DESCRIPTION */}

  <p
    className="
      mt-10
      max-w-[760px]
      text-[16px]
      leading-[1.7]
      font-normal
      text-[#2B2B2B]
    "
  >
    Made with the finest ingredients and crafted with
    uncompromising quality, Moksha delivers rich aroma,
    smooth texture, and the authentic taste that turns every
    meal into something unforgettable.
  </p>

  {/* CTA */}

  <button
    className="
      mt-12
      rounded-full
      bg-[#E5AA00]
      px-12
      py-4
      text-[17px]
      font-semibold
      text-[#4F2A00]
      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)]
    "
  >
    SHOP NOW
  </button>
</div>
    </section>
  );
}