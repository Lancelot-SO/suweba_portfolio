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
            Hello, I'm Sidiki Suweiba Alare, a User Experience (UX) Designer
            with a Customer Experience (CX) background who enjoys reading and
            listening to music. My journey in the world of user-centric design
            was driven by a strong interest in using customer experiences to
            enhance digital experiences. Join me as we explore the art of
            creating intuitive, user-friendly interfaces and forging memorable
            connections between people and technology.
          </p>
          <ul className="mt-4 flex items-end gap-4">
            <li className="border-r h-4 border-text-color w-auto pr-2 flex items-end">
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline align-baseline"
              >
                Email
              </a>
            </li>
            <li className="border-r h-4 border-text-color w-auto pr-2 flex items-end">
              <a
                href="https://www.linkedin.com/in/sidikialare/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </li>
            <li className="w-auto pr-2 flex items-end">
              <a
                onClick={handleDownloadCV}
                className="underline align-baseline"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
