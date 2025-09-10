import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials, companies } from "@/data";

const Client = () => {
  return (
    <div className="py-10" id="testimonials">
      <h1 className="text-center text-[30px] md:text-3xl lg:text-4xl font-bold">
        Words of appreciation from
        <span className="text-purple-300"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
      </div>
    </div>
  );
};

export default Client;
