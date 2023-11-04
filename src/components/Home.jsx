import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Home() {
  return (
    <div className="h-screen w-full bg-white text-text-color">
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-col"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl flex text-text-color">Hello,</h1>
          <h2 className="text-4xl sm:text-5xl font-bold"></h2>
          <p className="py-4 text-text-color text-4xl">
            Welcome to my creative world of crafting exceptional User
            Experiences!{" "}
          </p>
          <a href="/projects">
            <button className="group w-fit text-text-color px-6 py-3  my-2 flex items-center cursor-pointer rounded-md border border-text-color hover:scale-105">
              Projects
              <span className="group-hover:scale-150 duration-300">
                <BsArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
