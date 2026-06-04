"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const badges = [
  {
    title: "FSSAI Approved",
    icon: "/images/fssai-logo.png",
  },
  {
    title: "100% Pure & Natural",
    icon: "/images/pure-natural.svg",
  },
  {
    title: "Made from Premium Quality Milk",
    icon: "/images/milk-icon.png",
  },
  {
    title: "Rich Aroma & Authentic Taste",
    icon: "/images/spoon-ghee.png",
  },
];

export default function TrustBadgeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
gsap.fromTo(
  ".trust-item",
  {
    y: 60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "all",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      once: true,
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
        bg-[#FFFFFF]
        py-16
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className="
            grid
            grid-cols-2
            gap-y-10

            lg:grid-cols-4
            lg:gap-0
          "
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="
                trust-item
                relative
                flex
                flex-col
                items-center
                text-center
                px-6

                transition-all
                duration-500
                hover:-translate-y-3
              "
            >
              {/* Desktop Divider */}

              {index !== 3 && (
                <div
                  className="
                    hidden
                    lg:block
                    absolute
                    right-0
                    top-1/2
                    h-[230px]
                    w-px
                    -translate-y-1/2
                    bg-[#D8D8D8]
                  "
                />
              )}

              {/* ICON */}

              <div
                className="
                  relative
                  h-[90px]
                  w-[140px]
                  transition-all
                  duration-500
                  hover:scale-110
                "
              >
                <Image
                  src={badge.icon}
                  alt={badge.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-6
                  max-w-[240px]
                  text-[18px]
                  font-bold
                  leading-[1.4]
                  text-black

                  lg:text-[20px]
                "
              >
                {badge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}