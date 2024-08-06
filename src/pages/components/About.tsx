import React from "react";
import MySkill from "./MySkill";

const About = () => {
  return (
    <>
      <div className="flex items-start mt-[10rem] justify-center  w-full">
        <div className="flex w-[90%] h-full items-center justify-around  gap-5">
          <div className="flex w-[50%] flex-col gap-3">
            <span className="text-primary-color text-4xl font-extrabold font-serif">
              About
            </span>
            <div className="flex items-start justify-start gap-3">
              <span className="w-[15rem] h-[1px] bg-primary-color mt-3"></span>
              <p className=" dark:text-white-color text-bg-color">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                voluptates modi atque nostrum, aliquam, dolore distinctio minima
                veniam quae ad iure facere tempore placeat? Neque, sed
                voluptates. Deleniti nisi dolores, voluptate illum animi labore
                odit aliquam itaque laboriosam, veniam facere unde beatae
                voluptas est. Fugiat tenetur sint vitae voluptatibus mollitia?
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-3 items-center"></div>
        </div>
      </div>
      <MySkill />
    </>
  );
};

export default About;
