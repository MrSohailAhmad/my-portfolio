import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navMenu = [
    {
      path: "1",
      title: "Home",
    },
    {
      path: "1",
      title: "Portfolio",
    },
    {
      path: "1",
      title: "Experience",
    },
    {
      path: "1",
      title: "Contact",
    },
  ];
  return (
    <div className="flex items-center fixed justify-center w-full ">
      <div className="flex items-center justify-center w-[90%] h-[10rem] bg-transparent">
        <ul className="flex items-center justify-center gap-10  ">
          {navMenu.map((item, idx) => (
            <li key={idx} className={``}>
              <Link
                className="text-secoundery-color hover:text-primary-color cursor-pointer"
                href={""}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
