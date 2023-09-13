import React from "react";
import project1 from "../assets/4.jpeg";
import project2 from "../assets/8.jpeg";
import project4 from "../assets/10.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      src: project1,
    },
    {
      id: 2,
      src: project2,
    },
    {
      id: 3,
      src: project1,
    },
    {
      id: 4,
      src: project4,
    },
    {
      id: 5,
      src: project1,
    },
    {
      id: 6,
      src: project4,
    },
  ];
  return (
    <div
      className="bg-blue-900
    w-full text-white md:h-4/5 pt-16"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex
      flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-white"
          >
            Projects
          </p>

          <p className="py-6">Check out some of my projects </p>
        </div>

        <div
          className="grid sm:grid-cols-1 md:grid-cols-3
          gap-8 px-12 sm:px-0"
        >
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project1"
                className="rounded-md duration-200 hover:scale-105 cursor-pointer"
              />

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-500">
                  Demo
                </button>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-yellow-500">
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
