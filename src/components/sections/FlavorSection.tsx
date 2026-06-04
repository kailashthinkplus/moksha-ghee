"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SplitText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`reveal-char inline-block ${className}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export default function FlavorSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: isMobile ? "+=1600" : "+=2400",
        pin: true,
        pinSpacing: true,
      });

      gsap.fromTo(
        ".reveal-char",
        {
          opacity: 0,
          filter: "blur(18px)",
          y: 20,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: isMobile ? "+=1400" : "+=2200",
            scrub: 4,
          },
        }
      );

      gsap.fromTo(
        ".spoon-image",
        {
          y: isMobile ? 250 : 450,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: isMobile ? "+=1400" : "+=1800",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={sectionRef}
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#9D2724]
  "
>
  <div
    className="
      absolute
      inset-0
      flex
      flex-col
      items-center
      justify-center
      px-5
      md:px-6
      text-center
    "
    style={{
      paddingTop: "120px",
      paddingBottom: "90px",
    }}
  >
    {/* TOP */}

    <div className="mb-4 md:mb-3">
      <h2
        className="
          text-[34px]
          sm:text-[40px]
          md:text-[42px]
          lg:text-[52px]
          leading-[0.9]
          font-extrabold
          uppercase
          tracking-[-0.04em]
          text-white
          whitespace-nowrap
        "
      >
        <SplitText text="POUR OVER YOUR" />
      </h2>

      <h2
        className="
          text-[34px]
          sm:text-[40px]
          md:text-[42px]
          lg:text-[52px]
          leading-[0.9]
          font-extrabold
          uppercase
          tracking-[-0.04em]
          whitespace-nowrap
        "
      >
        <SplitText
          text="EVERYDAY "
          className="text-white"
        />

        <SplitText
          text="MEALS,"
          className="text-[#F0B300]"
        />
      </h2>
    </div>

    {/* SPOON */}

    <div className="spoon-image my-2 md:my-0">
      <Image
        src="/images/ghee-spoon.png"
        alt="Ghee Spoon"
        width={800}
        height={800}
        priority
        className="
          h-auto
          w-[170px]
          sm:w-[200px]
          md:w-[260px]
          lg:w-[340px]
        "
      />
    </div>

    {/* BOTTOM */}

    <div className="mt-2 md:mt-0">
      <h2
        className="
          text-[34px]
          sm:text-[40px]
          md:text-[42px]
          lg:text-[52px]
          leading-[0.9]
          font-extrabold
          uppercase
          tracking-[-0.04em]
          text-white
          whitespace-nowrap
        "
      >
        <SplitText text="BRING OUT THE" />
      </h2>

      <h2
        className="
          text-[34px]
          sm:text-[40px]
          md:text-[42px]
          lg:text-[52px]
          leading-[0.9]
          font-extrabold
          uppercase
          tracking-[-0.04em]
          whitespace-nowrap
        "
      >
        <SplitText
          text="PUREST "
          className="text-[#F0B300]"
        />

        <SplitText
          text="FLAVOR IN"
          className="text-white"
        />
      </h2>

      <h2
        className="
          text-[34px]
          sm:text-[40px]
          md:text-[42px]
          lg:text-[52px]
          leading-[0.9]
          font-extrabold
          uppercase
          tracking-[-0.04em]
          text-white
          whitespace-nowrap
        "
      >
        <SplitText text="EVERY SINGLE BITE" />
      </h2>
    </div>
  </div>
</section>
  );
}