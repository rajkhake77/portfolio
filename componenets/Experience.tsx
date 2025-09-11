import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="py-20 w-full overflow-x-hidden">
      <h1 className="text-center text-[30px] md:text-3xl lg:text-4xl font-bold">
        My
        <span className="text-purple-300"> Work Experience </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4 sm:px-6 lg:px-0">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: "1.75rem",
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col p-6 md:p-8 lg:p-10 gap-6 bg-[linear-gradient(180deg,#000000,#1a1a1a)] rounded-2xl w-full">
              {/* Thumbnail */}
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={96}
                height={96}
                className="lg:w-24 md:w-20 w-16 object-contain"
                priority={false}
              />

              {/* Text Content */}
              <div className="flex flex-col items-start text-left">
                <h1 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {card.title}
                </h1>
                <span className="text-sm md:text-base font-medium text-gray-400 mt-1">
                  {card.company}
                </span>
                <p className="text-sm md:text-base text-gray-300 mt-4 leading-relaxed max-w-lg">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
