import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer 
      className="w-full pt-10 pb-10 overflow-x-hidden" 
      id="contact"
    >
      <div className="flex flex-col items-center px-4">
        <h1 className="text-center text-[30px] md:text-3xl lg:text-4xl font-bold">
          Ready to take
          <span className="text-purple-300"> your Digital presence </span> 
          to the next level?
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:rajkhake89@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-4 max-w-6xl mx-auto">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          © 2025 Raj Khake
        </p>

        <div className="flex items-center md:gap-3 gap-6 flex-wrap justify-center">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 my-4 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
