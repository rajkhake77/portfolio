"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="text-center text-[30px] md:text-3xl lg:text-4xl font-bold">
        A small selection of my{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-25 gap-y-8 mt-5">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.pinTitle} href={item.href}>
              <div className="relative sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]">
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  fill// adjust to your expected height
                  className="z-10 object-cover"
                  priority
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-m lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
