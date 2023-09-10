import React from "react";
import HeroImage from "../assets/heroImage.png";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  
          to-blue-900 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl flex items-center justify-center font-signature px-4 text-yellow-500">
            Hello, Welcome
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold">
            I'm a Graphic Designer
          </h2>
          <p className="py-4 text-gray-400">
            I have 10 years of experience designing projectd for clients all
            over the world. Currently, I love to use Figma and Adobe Photoshop
            for my projects.
          </p>
          <button
            className="group w-fit px-6 py-3 my-2 flex items-center cursor-pointer
          rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500"
          >
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <BsArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Hero"
            className="rounded-2xl mx-auto md:w-full w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
