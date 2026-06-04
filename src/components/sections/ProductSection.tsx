"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // MOBILE CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  // AUTOPLAY
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // DESKTOP GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1024) {
        gsap.to(".product-track", {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=2200",
            scrub: 1,
            pin: true,
          },
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="
        relative
        bg-[#F7DFC5]
      "
    >
{/* MOBILE */}

<div className="block lg:hidden">
  <div
    className="
      px-6
      pt-[110px]
      pb-12
      text-center
    "
  >
    {/* TOP */}

    <div>
      <h2
        className="
          text-[42px]
          font-black
          leading-[0.9]
          text-[#9B1111]
        "
      >
        TWO
      </h2>

      <div
        className="
          mx-auto
          mt-2
          inline-block
          rotate-[-2deg]
          bg-[#E8AE00]
          px-6
          py-2
        "
      >
        <span
          className="
            text-[20px]
            text-[#5C2600]
          "
          style={{
            fontFamily: "Riwaya, serif",
          }}
        >
          Rich & Perfectly Crafted
        </span>
      </div>

      <h3
        className="
          mt-4
          text-[42px]
          font-black
          uppercase
          leading-[0.95]
          text-[#9B1111]
        "
      >
        GHEE
      </h3>

      <h3
        className="
          text-[42px]
          font-black
          uppercase
          leading-[0.95]
          text-[#9B1111]
        "
      >
        EXPERIENCES
      </h3>

      <p
        className="
          mx-auto
          mt-5
          max-w-[340px]
          text-[18px]
          leading-[1.8]
          text-[#2D2D2D]
        "
      >
        Crafted with uncompromising purity,
        rich aroma and exceptional taste.
        Discover Cow Ghee and Buffalo Ghee
        crafted to elevate every meal.
      </p>
    </div>

{/* PRODUCT CAROUSEL */}

<div className="relative mx-auto mt-8 w-full max-w-[420px]">
  <button
    onClick={() => emblaApi?.scrollPrev()}
    className="
      absolute
      left-0
      top-1/2
      z-20
      -translate-y-1/2
      bg-transparent
      p-2
    "
  >
    <ChevronLeft
      size={28}
      className="text-[#9B1111]"
    />
  </button>

  <button
    onClick={() => emblaApi?.scrollNext()}
    className="
      absolute
      right-0
      top-1/2
      z-20
      -translate-y-1/2
      bg-transparent
      p-2
    "
  >
    <ChevronRight
      size={28}
      className="text-[#9B1111]"
    />
  </button>

  <div
    ref={emblaRef}
    className="overflow-hidden"
  >
    <div className="flex">
      <div className="min-w-full flex justify-center">
        <Image
          src="/images/cow-ghee-package.png"
          alt="Cow Ghee"
          width={900}
          height={900}
          priority
          className="
            w-full
            max-w-[340px]
            h-auto
          "
        />
      </div>

      <div className="min-w-full flex justify-center">
        <Image
          src="/images/buffalo-ghee-package.png"
          alt="Buffalo Ghee"
          width={900}
          height={900}
          priority
          className="
            w-full
            max-w-[340px]
            h-auto
          "
        />
      </div>
    </div>
  </div>
</div>

<button
  className="
    mt-6
    rounded-full
    border
    border-[#9B1111]
    px-12
    py-4
    text-[18px]
    font-semibold
    text-[#9B1111]
  "
>
  SHOP NOW
</button>

</div>
</div>

{/* DESKTOP */}

{/* DESKTOP */}
     {/* DESKTOP */}

<div
  className="
    hidden
    lg:flex
    h-screen
    items-center
  "
>
  <div
    className="
      mx-auto
      grid
      w-full
      max-w-[1500px]
      grid-cols-[0.85fr_1.15fr]
      items-center
      gap-2
      px-16
    "
  >
    {/* LEFT */}

<div
  className="
    flex
    flex-col
    items-center
    justify-center
    text-center
  "
>
  {/* TWO */}

  <h2
    className="
      text-[68px]
      font-black
      leading-[0.9]
      text-[#9B1111]
    "
  >
    TWO
  </h2>

  {/* YELLOW STRIP */}

  <div
    className="
      mt-2
      rotate-[-2deg]
      bg-[#E8AE00]
      px-12
      py-3
    "
  >
    <span
      className="text-[28px] text-[#5C2600]"
      style={{
        fontFamily: "Riwaya, serif",
      }}
    >
      Rich & Perfectly Crafted
    </span>
  </div>

  {/* GHEE */}

  <h3
    className="
      mt-4
      text-[56px]
      font-black
      leading-[0.95]
      text-[#9B1111]
    "
  >
    GHEE
  </h3>

  <h3
    className="
      text-[56px]
      font-black
      leading-[0.95]
      text-[#9B1111]
    "
  >
    EXPERIENCES
  </h3>

  {/* DESCRIPTION */}

  <p
    className="
      mt-8
      max-w-[520px]
      text-center
      text-[18px]
      leading-relaxed
      text-[#2B2B2B]
    "
  >
    Crafted with uncompromising purity, rich aroma,
    and exceptional taste. Our Cow Ghee and Buffalo
    Ghee are made to elevate every meal with
    authentic flavor and premium quality.
  </p>

  {/* BUTTON */}

  <button
    className="
      mt-10
      rounded-full
      border
      border-[#9B1111]
      px-12
      py-4
      text-[18px]
      font-semibold
      text-[#9B1111]
      transition-all
      duration-300
      hover:bg-[#9B1111]
      hover:text-white
    "
  >
    SHOP NOW
  </button>
</div>

    {/* RIGHT */}

    <div
      className="
        relative
        h-[760px]
        overflow-hidden
      "
    >
      <div
        className="
          product-track
          flex
          h-full
          w-[200%]
        "
      >
        {/* COW */}

        <div
          className="
            flex
            h-full
            w-1/2
            items-center
            justify-center
          "
        >
          <Image
            src="/images/cow-ghee-package.png"
            alt="Cow Ghee"
            width={1200}
            height={1200}
            priority
            className="
              h-auto
              w-[700px]
            "
          />
        </div>

        {/* BUFFALO */}

        <div
          className="
            flex
            h-full
            w-1/2
            items-center
            justify-center
          "
        >
          <Image
            src="/images/buffalo-ghee-package.png"
            alt="Buffalo Ghee"
            width={1200}
            height={1200}
            priority
            className="
              h-auto
              w-[700px]
            "
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}