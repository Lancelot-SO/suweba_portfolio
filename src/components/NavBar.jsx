import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import heroImage from "../assets/lg1.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const navRef = useRef(null);

  const links = [
    {
      id: 1,
      link: "projects",
      href: "/projects",
    },
    {
      id: 2,
      link: "about",
      href: "/about",
    },
  ];

  const closeMenu = () => {
    setNav(false);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
    closeMenu();
  };

  return (
    <div
      className={`flex justify-between items-center w-full h-20 text-custom-blue bg-white border-b-2 fixed px-4 ${
        nav ? "bg-opacity-90" : ""
      }`}
    >
      <div className="flex flex-row gap-2">
        <a href="/" className="flex flex-row">
          <img
            src={heroImage}
            className="rounded-md"
            width={48}
            height={32}
            alt="logo"
          />

          <h1 className="flex items-center justify-center text-custom-blue text-3xl font-bold pt-2">
            Sidiki Alare
          </h1>
        </a>
      </div>
      <ul className="md:flex hidden">
        {links.map(({ id, link, href }, index) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-custom-blue hover:scale-105 duration-200 ${
              activeLink === index ? "border-b-2 border-custom-blue" : ""
            }`}
          >
            <Link to={href} onClick={() => handleLinkClick(index)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex flex-row">
        <li className="px-4 text-custom-blue cursor-pointer hover:scale-105 duration-200">
          <a
            href="https://www.linkedin.com/in/sidikialare/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="text-custom-blue cursor-pointer hover:scale-105 duration-200">
          <a
            href="https://github.com/Lancelot-SO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? (
          <FaTimes className="text-custom-blue" size={30} />
        ) : (
          <FaBars className="text-custom-blue" size={30} />
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-custom-blue">
          {links.map(({ id, link, href }, index) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={href} onClick={() => handleLinkClick(index)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
