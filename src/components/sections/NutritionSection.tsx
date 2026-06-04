"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NutritionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nutrition-bar",
        {
          y: 500,
        },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1500",
        pin: ".video-wrapper",
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className="
        relative
        h-[250vh]
        bg-[#F7DFC5]
      "
    >
      <div
        className="
          video-wrapper
          sticky
          top-0
          h-screen
          overflow-hidden
        "
      >
        {/* VIDEO */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
  absolute
  inset-0
  h-full
  w-full
  object-cover
  object-[center_8%]
  sm:object-[center_15%]
  md:object-center
          "
          style={{
            objectPosition: "center 35%",
          }}
        >
          <source
            src="/images/moksha-video-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* LIGHT OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-black/5
          "
        />

        {/* CURVED TOP MASK */}

        <div
          className="
            absolute
            top-0
            left-0
            z-30
            w-full
          "
        >
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="w-full"
          >
            <path
              fill="#F7DFC5"
              d="
              M0,120
              C90,10 180,10 280,120
              C380,10 470,10 570,120
              C670,10 760,10 860,120
              C960,10 1050,10 1150,120
              C1250,10 1340,10 1440,120
              L1440,0
              L0,0
              Z
            "
            />
          </svg>
        </div>

        {/* NUTRITION BAR */}

        <div
  className="
    nutrition-bar
    absolute
    left-1/2
    top-[120px]
    z-40
    -translate-x-1/2
    w-[980px]
    max-w-[92vw]
  "
>
  <div
    className="
      rounded-[60px]
      border-[3px]
      border-[#D7D7D7]
      bg-[#F0B400]
      shadow-2xl

      px-8
      py-5

      md:px-8
      md:py-5

      px-5
      py-6
    "
  >

    {/* MOBILE */}

    <div className="grid grid-cols-2 gap-y-6 md:hidden">

      <div className="text-center">
        <div className="text-[32px] font-black text-[#8F1B1B]">
          895/900
        </div>
        <div className="text-[14px] text-black">
          Energy From Fat
        </div>
      </div>

      <div className="text-center">
        <div className="text-[32px] font-black text-[#8F1B1B]">
          99.5/99.8
        </div>
        <div className="text-[14px] text-black">
          Total Fat
        </div>
      </div>

      <div className="text-center">
        <div className="text-[32px] font-black text-[#8F1B1B]">
          500–900
        </div>
        <div className="text-[14px] text-black">
          Vitamin A
        </div>
      </div>

      <div className="text-center">
        <div className="text-[32px] font-black text-[#8F1B1B]">
          0
        </div>
        <div className="text-[14px] text-black">
          Sugar & Carbohydrates
        </div>
      </div>

    </div>

    {/* DESKTOP */}

    <div
      className="
        hidden
        md:grid
        md:grid-cols-4
        text-center
      "
    >
      <div className="border-r border-white/50">
        <div className="text-4xl font-black text-[#8F1B1B]">
          895/900
          <span className="ml-1 text-lg">Kcal</span>
        </div>
        <div className="mt-2 text-sm text-black">
          Energy From Fat
        </div>
      </div>

      <div className="border-r border-white/50">
        <div className="text-4xl font-black text-[#8F1B1B]">
          99.5/99.8
          <span className="ml-1 text-lg">g</span>
        </div>
        <div className="mt-2 text-sm text-black">
          Total Fat
        </div>
      </div>

      <div className="border-r border-white/50">
        <div className="text-4xl font-black text-[#8F1B1B]">
          500–900
          <span className="ml-1 text-lg">mcg</span>
        </div>
        <div className="mt-2 text-sm text-black">
          Vitamin A
        </div>
      </div>

      <div>
        <div className="text-4xl font-black text-[#8F1B1B]">
          0
          <span className="ml-1 text-lg">g</span>
        </div>
        <div className="mt-2 text-sm text-black">
          Sugar & Carbohydrates
        </div>
      </div>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}