import React from "react";
import { GrMail } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import resumePDF from "../assets/Resume.pdf";
import HeroImage from "../assets/hero.jpg";

function About() {
  const email = "sidikialare@gmail.com";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "My-resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen w-full bg-white text-black">
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row py-5"
      >
        {/* Image */}
        <div className="mt-12 ml-5 md:mt-16 lg:mt-24 xl:mt-20">
          <img
            src={HeroImage}
            alt="hero"
            style={{ maxWidth: "90%" }}
            className="rounded-md"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">Hello, I am Sidiki Alare</h1>
          <p className="text-text-color">
            I'm a student with a passion for UX design and a background in
            Customer Experience (CX). My journey in the world of user-centric
            design began with a deep fascination for the way technology and
            human interactions intertwine. Now, I'm eager to apply my CX
            expertise to enhance digital experiences. Join me as I explore the
            art of creating intuitive, user-friendly interfaces and forging
            memorable connections between people and technology.
          </p>
          <ul className="mt-4 flex justify-between items-center">
            <li className="mr-3 flex flex-row gap-4 ">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-blue-500 border rounded-full p-2 hover:bg-custom-blue duration-200"
              >
                <GrMail
                  size={30}
                  className="text-custom-blue mt-1 hover:text-white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sidikialare/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-blue-500 border rounded-md p-2 hover:bg-custom-blue duration-200"
              >
                <BsLinkedin
                  size={25}
                  className="text-custom-blue mt-1 hover:text-white"
                />
              </a>
            </li>
            <li>
              <button
                onClick={handleDownloadCV}
                className="border border-blue-500 bg-white text-black px-4 py-2 rounded-full hover:bg-custom-blue hover:text-white duration-200"
              >
                Get Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
