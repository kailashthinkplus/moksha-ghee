"use client";

import Image from "next/image";

const recipes = [
  {
    title: "All Recipes",
    image: "/images/recipe-all.png",
    featured: true,
  },
  {
    title: "Breakfast",
    image: "/images/recipe-breakfast.png",
  },
  {
    title: "Lunch",
    image: "/images/recipe-lunch.png",
  },
  {
    title: "Dinner",
    image: "/images/recipe-dinner.png",
  },
];

export default function RecipeSection() {
  return (
    <section id="recipes"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
      style={{
        background:
          "linear-gradient(180deg,#F7DFC5 0%,#FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* HEADER */}

        <div className="mx-auto max-w-[1000px] text-center">
          <h2
            className="
              text-[42px]
              font-black
              uppercase
              leading-[1.05]
              text-[#930909]

              md:text-[54px]
            "
          >
            RECIPES MADE RICHER
          </h2>

          <h2
            className="
              mt-2
              text-[42px]
              font-black
              uppercase
              leading-[1.05]

              md:text-[54px]
            "
          >
            <span className="text-[#930909]">
              WITH
            </span>{" "}
            <span className="text-[#F0B400]">
              MOKSHA
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[850px]
              text-[18px]
              leading-[1.8]
              text-[#2B2B2B]

              md:text-[22px]
            "
          >
            From comforting everyday meals to indulgent
            festive favorites, discover recipes elevated
            with the rich aroma, smooth texture and pure
            flavor of Moksha Ghee.
          </p>
        </div>

        {/* RECIPES GRID */}

        <div
          className="
            mt-16
            grid
            gap-8

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {recipes.map((recipe, index) => (
            <button
              key={index}
              className={`
                group
                relative
                overflow-visible
                rounded-[32px]
                transition-all
                duration-500

                ${
                  recipe.featured
                    ? "bg-[#F0B400]"
                    : "bg-[#E7E0D5]"
                }

                hover:bg-[#F0B400]
                hover:-rotate-2
                hover:scale-[1.03]
              `}
            >
              {/* OUTLINE EFFECT */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  border-2
                  border-[#F0B400]
                  opacity-0
                  transition-all
                  duration-500

                  group-hover:opacity-100
                  group-hover:translate-x-[10px]
                  group-hover:translate-y-[10px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  px-6
                  py-8
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[190px]
                    w-[190px]
                    overflow-hidden
                    rounded-full
                    border-[5px]
                    border-black
                    bg-white
                  "
                >
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    text-[34px]
                    font-bold
                    text-[#8F1B1B]
                  "
                >
                  {recipe.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}