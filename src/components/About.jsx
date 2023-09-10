import React from "react";
import { GrMail } from "react-icons/gr";
import HeroImage from "../assets/heroImage.png";

function About() {
  const email = "fsowah001@gmail.com";

  return (
    <div
      className="h-screen w-full bg-gradient-to-b from-black  
    to-blue-900 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row py-5"
      >
        {/* Image */}
        <div className="">
          <img src={HeroImage} alt="hero" />
        </div>

        {/* Text */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">Hello, I'm Suweba 😊👋</h1>
          <p>
            I have 10 years of experience designing projects for clients all
            over the world. Currently, I love to use Figma and Adobe Photoshop
            for my projects.
          </p>
          <ul className="mt-4 flex justify-between items-center">
            <li className="mr-3 flex flex-row gap-4">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrMail size={25} className="text-yellow-500" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <GrMail size={25} className="text-yellow-500" />
              </a>
            </li>
            <li>
              <button className="bg-gradient-to-r from-yellow-100 to-yellow-500 text-white px-4 py-2">
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
