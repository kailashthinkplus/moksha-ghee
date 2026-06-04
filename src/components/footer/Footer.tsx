"use client";

import Image from "next/image";

export default function Footer() {
  return (
<footer
  className="
    relative
    overflow-hidden
    text-white
    bg-[#0D0D0D]
    bg-no-repeat
    bg-right-bottom
    bg-contain
  "
  style={{
  backgroundImage: "url('/images/footer-ghee-splash.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "cover",
}}
>
      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-8
          py-10

          lg:px-20
          lg:py-12
        "
      >
        <div
          className="
            grid
            gap-12

            md:grid-cols-2
            lg:grid-cols-[240px_220px_220px]
            lg:gap-[140px]
          "
        >
          {/* LOGO COLUMN */}

          <div>
            <Image
              src="/images/moksha-footer-logo.svg"
              alt="Moksha"
              width={125}
              height={125}
              className="
                h-auto
                w-[125px]
              "
            />

            <p
              className="
                mt-6
                max-w-[240px]
                text-[14px]
                leading-[2]
                text-[#D0D0D0]
              "
            >
              Moksha Ghee is crafted with
              uncompromising purity,
              premium ingredients,
              and rich authentic flavor.
            </p>

            {/* SOCIAL */}

            <div
  className="
    mt-10
    flex
    items-center
    gap-6
  "
>
  <a
    href="https://www.facebook.com/mokshaghee"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/facebook.svg"
      alt="Facebook"
      width={32}
      height={32}
      className="
        h-[32px]
        w-[32px]
        transition-all
        duration-300
        hover:scale-110
      "
    />
  </a>

  <a
    href="https://www.instagram.com/mokshaghee/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      src="/images/instagram.svg"
      alt="Instagram"
      width={32}
      height={32}
      className="
        h-[32px]
        w-[32px]
        transition-all
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
      src="/images/youtube.svg"
      alt="YouTube"
      width={32}
      height={32}
      className="
        h-[32px]
        w-[32px]
        transition-all
        duration-300
        hover:scale-110
      "
    />
  </a>
</div>
</div>

          {/* USEFUL LINKS */}

          <div>
            <h3
              className="
                text-[22px]
                font-semibold
                text-white
              "
            >
              Useful Links
            </h3>

            <ul
              className="
                mt-8
                space-y-5
              "
            >
              <li>
                <a
                  href="#home"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  About Moksha
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* SHOP NOW */}

          <div>
            <h3
              className="
                text-[22px]
                font-semibold
                text-white
              "
            >
              Shop Now
            </h3>

            <ul
              className="
                mt-8
                space-y-5
              "
            >
              <li>
                <a
                  href="#"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  Cow Ghee
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  Buffalo Ghee
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-[14px]
                    text-[#E3E3E3]
                    transition-colors
                    hover:text-[#F0B400]
                  "
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div
          className="
            mt-12
            border-t
            border-white/10
            pt-8
          "
        >
          <p
            className="
              text-[13px]
              text-white
            "
          >
            © Moksha Ghee 2026 | Powered by <a className="text-[#9B1111]" target="_blank" href="https://www.getbuildez.com">ShopEZ</a>
          </p>
        </div>
      </div>
    </footer>
  );
}