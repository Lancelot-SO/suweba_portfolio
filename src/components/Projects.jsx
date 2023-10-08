import React from "react";
import { projectsData } from "../data";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <div className="bg-white w-full text-blue-500 md:h-4/5 pt-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-blue-500"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
            {projectsData.map((item) => {
              return <ProjectDetails key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
