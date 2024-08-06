import { images } from "@/assests";
import React from "react";

const HeroSec = () => {
  return (
    <div className="h-screen flex items-center justify-center shadow-b">
      <div className="flex w-[90%] items-center justify-around h-full ">
        <div className="flex flex-col gap-3">
          <p className="text-4xl dark:text-white text-bg-color">
            I'M{" "}
            <span className="font-bold text-5xl font-serif text-primary-color">
              Muhammad Sohail
            </span>
          </p>
          <span className="dark:text-white-color text-2xl">
            MERN Stack Developer
          </span>
          <span className="dark:text-white-color text-2xl">
            React Developer
          </span>
          <button className="border-4 rounded border-primary-color h-[3rem] w-[10rem] text-primary-color mt-5">
            Contact me
          </button>
        </div>
        {/* <div className="bg-img absolute right-5 bottom-0 -z-0 h-[80%] w-[50%]"></div> */}
        <div className="flex flex-col gap-3 items-center">
          <span className="h-[5rem] w-[2px] bg-primary-color"></span>
          <span className="cursor-pointer">
            {images.Github("w-7 hover:fill-primary-color h-7 fill-white-color")}
          </span>
          {/* <span>{images.WP("w-10 h-10 fill-white-color")}</span> */}
          <span className="cursor-pointer">
            {images.Linkedin(
              "w-7 hover:fill-primary-color  h-7 fill-white-color"
            )}
          </span>
          <span className="cursor-pointer">
            {images.Mail(
              "w-7 h-7 hover:stroke-primary-color  stroke-white-color"
            )}
          </span>
          <span className="h-[5rem] w-[2px] bg-primary-color"></span>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
