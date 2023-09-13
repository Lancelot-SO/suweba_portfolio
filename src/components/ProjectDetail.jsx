import React from "react";

function ProjectDetail({ project, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
        <img src={project.src} alt={project.title} className="max-h-80 mb-4" />
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
