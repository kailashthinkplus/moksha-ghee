"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-[100]
          w-full
          transition-all
          duration-500
        "
      >
        <div
          className={`
            mx-auto
            transition-all
            duration-500
            ${isScrolled ? "px-4 pt-4" : "px-0 pt-0"}
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500

              ${
                isScrolled
                  ? `
                    mx-auto
                    max-w-7xl
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/50
                    backdrop-blur-[30px]
                    backdrop-saturate-200
                    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                    px-6
                    py-4
                  `
                  : `
                    px-6
                    py-6
                    lg:px-12
                  `
              }
            `}
          >
            {/* LEFT */}

            <div className="flex items-center gap-3">
              <button
                aria-label="Open Menu"
                onClick={() => setIsMenuOpen(true)}
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  transition
                  hover:bg-white/10
                "
              >
                <Menu
                  size={34}
                  strokeWidth={1.75}
                  className="text-[#9B1111]"
                />
              </button>

              {/* MOBILE LOGO */}

              <div className="block lg:hidden w-[70px]">
                <Image
                  src="/images/moksha-logo.svg"
                  alt="Moksha Ghee"
                  width={300}
                  height={120}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* DESKTOP CENTER LOGO */}

            <div
              className="
                hidden
                lg:block
                absolute
                left-1/2
                top-3
                -translate-x-1/2
              "
            >
              <div
                className={`
                  transition-all duration-500
                  ${isScrolled ? "w-[65px]" : "w-[110px]"}
                `}
              >
                <Image
                  src="/images/moksha-logo.svg"
                  alt="Moksha Ghee"
                  width={500}
                  height={200}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* RIGHT CTA */}

            <a
              href="#"
              className="
                rounded-full
                bg-[#E5AA00]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#5A3100]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105

                lg:px-8
              "
            >
              Buy Online
            </a>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}

      <div
        className={`
          fixed
          inset-0
          z-[200]
          transition-all
          duration-500
          ${
            isMenuOpen
              ? "pointer-events-auto"
              : "pointer-events-none"
          }
        `}
      >
        {/* BACKDROP */}

        <div
          onClick={() => setIsMenuOpen(false)}
          className={`
            absolute
            inset-0
            bg-black/20
            backdrop-blur-md
            transition-opacity
            duration-500
            ${
              isMenuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

                {/* PANEL */}

        <div
          className={`
            absolute
            left-0
            top-0
            h-full
            w-full
            max-w-xl

            border-r
            border-white/30

            bg-white/55
            backdrop-blur-[40px]
            backdrop-saturate-200

            transition-transform
            duration-500
            ease-out

            ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          {/* PANEL HEADER */}

          <div className="flex items-center justify-between p-8">
            <div className="w-[110px]">
              <Image
                src="/images/moksha-logo.svg"
                alt="Moksha Ghee"
                width={500}
                height={200}
                className="h-auto w-full"
              />
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="
                rounded-full
                p-2
                transition
                hover:bg-black/5
              "
            >
              <X
                size={34}
                className="text-[#9B1111]"
              />
            </button>
          </div>

          {/* NAVIGATION */}

          <nav className="mt-12 px-10">
            <ul className="space-y-8">
              <li>
                <Link
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-2xl
                    md:text-4xl
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#9B1111]
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-2xl
                    md:text-4xl
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#9B1111]
                  "
                >
                  About Moksha
                </Link>
              </li>

              <li>
                <Link
                  href="#products"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-2xl
                    md:text-4xl
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#9B1111]
                  "
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="#recipes"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-2xl
                    md:text-4xl
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#9B1111]
                  "
                >
                  Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-2xl
                    md:text-4xl
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#9B1111]
                  "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* SOCIAL */}

          <div className="absolute bottom-10 left-10">
            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-[#9B1111]/70
              "
            >
              Follow Us
            </p>

            <div className="mt-5 flex items-center gap-5">
              <a
                href="https://www.instagram.com/mokshaghee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/instagram-black.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="
                    transition
                    duration-300
                    hover:scale-110
                  "
                />
              </a>

              <a
                href="https://www.facebook.com/mokshaghee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/facebook-black.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="
                    transition
                    duration-300
                    hover:scale-110
                  "
                />
              </a>

              <a
                href="https://www.youtube.com/@mokshaghee"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/youtube-black.svg"
                  alt="YouTube"
                  width={28}
                  height={28}
                  className="
                    transition
                    duration-300
                    hover:scale-110
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}