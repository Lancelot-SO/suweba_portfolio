import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import heroImage from "../assets/heroImage.png";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "projects",
    },
    {
      id: 2,
      link: "about",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-20
    text-white bg-blue-950 fixed px-4"
    >
      <div className="flex flex-row gap-2">
        <a href="/" className="flex flex-row gap-2">
          <img
            src={heroImage}
            className="rounded-md"
            width={32}
            height={32}
            alt="logo"
          />

          <h1 className="flex items-center justify-center text-yellow-500 text-3xl font-signature pt-2">
            Suweba
          </h1>
        </a>
      </div>
      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-yellow-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex flex-row">
        <li className="px-4 text-yellow-500 cursor-pointer hover:scale-105 duration-200">
          <BsLinkedin />
        </li>
        <li className="text-yellow-500 cursor-pointer hover:scale-105 duration-200">
          <BsGithub />
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-yellow-500" size={30} />
        ) : (
          <FaBars className="text-yellow-500" size={30} />
        )}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-black to-blue-900 text-yellow-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
