import React from "react";
import HeroImage from "../assets/hero1.jpg";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-white text-text-color">
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl flex items-center justify-center  px-4 text-text-color">
            Hello, Welcome
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold">
            I'm a UI/UX Designer
          </h2>
          <p className="py-4 text-text-color">
            I have 10 years of experience designing projects for clients all
            over the world. Currently, I love to use Figma and Adobe Photoshop
            for my projects.
          </p>
          <a href="/projects">
            <button className="group w-fit text-text-color px-6 py-3  my-2 flex items-center cursor-pointer rounded-md border border-text-color hover:scale-105">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </a>
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
