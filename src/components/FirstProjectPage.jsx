import React from "react";
import HeroImage from "../assets/img/Homepage.png";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { PiWarningCircleFill } from "react-icons/pi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

const FirstProjectPage = () => {
  return (
    <div className="w-full py-4 px-12">
      {/* Add padding-top to create space below the NavBar */}
      <h1 className="text-4xl font-bold text-blue-600 py-20">
        Redesigning A Payment Application for a seamless User Experience
      </h1>
      <div className="pt-4 flex justify-center items-center">
        <div className="w-1/2 pr-8">
          <div>
            <h1 className="pb-4 text-3xl text-blue-600">Project Overview</h1>
            <div>
              <h2 className="pb-4 text-xl text-blue-600 font-bold">
                Banking App
              </h2>
              <p className="pb-4 text-justify text-lg leading-relaxed">
                It is a payment application that allows users to make secure
                transactions, manage finances, and track payment history. The
                main focus is to create a seamless, intuitive, and efficient
                payment flow while ensuring security and user satisfaction.
              </p>
              <span className="text-blue-600">
                Project duration: November 2022 - June 2023
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={HeroImage}
            alt="sec"
            width={500}
            height={300}
            className="pt-8"
          />
        </div>
      </div>
      <div className="flex pt-20">
        <div className="w-1/2 pr-8">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <PiWarningCircleFill className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">The problem:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            The existing payment application lacks a user-friendly interface and
            easy payment flow. Users face difficulties in navigating through the
            application. This leads to frustration, and potentially lost
            business opportunities
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <AiFillStar className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">The goal:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            The goal is to redesign the payment application to provide a
            seamless user experience that simplifies the payment process,
            improve navigation and enhance the user experience.
          </p>
        </div>
      </div>

      <div className="flex pt-20">
        <div className="w-1/2 pr-8">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <BsPersonCircle className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">My role:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            UX designer and UX researcher,
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <AiOutlineMenu className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">Responsibilities:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            Planned the user research through collaboration with stakeholders
            Conducted User Research using various qualitative and quantitative
            research methods Created user personas to help guide the design
            process Planned and conducted usability testing sessions
            Collaborated with UX Designers to translate findings into design
            recommendations
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Understanding the User
        </h1>
        <div>
          <h2 className="text-4xl font-bold text-blue-600 pt-4 pb-16">
            User research: summary
          </h2>
          <div className="relative w-1/2 h-100 ml-80">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-red-600 w-10 h-10 flex items-center justify-center rounded-full">
              <BiSolidBarChartAlt2 />
            </div>
            <div className="w-100% h-2/3 mt-12 pt-6 pl-20 ">
              <p className="text-justify text-lg leading-relaxedbg-gray-100 py-12 px-12">
                A detailed approach was adopted to gain insights into user needs
                and user pain points. Interview and survey were conducted. Most
                of the participants reported frustrations with existing banking
                apps. Participants desired the need for easy steps in navigating
                a mobile app. Users also wanted a smooth user experience.
                Participants represented various age groups, income levels, and
                technological proficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <h1 className="text-4xl font-bold text-gray-500 pt-4 pb-16">
            User research: pain points
          </h1>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <span className="bg-red-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-8">
                1
              </span>
              <p className="text-lg leading-relaxed pb-4 text-red-500 font-bold">
                Pain point
              </p>
              <p className="text-lg leading-relaxed">
                Security concerns on robust encryption mesures, storage of
                payment data.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="bg-red-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-8">
                2
              </span>
              <p className="text-lg leading-relaxed pb-4 text-red-500 font-bold">
                Pain point
              </p>
              <p className="text-lg leading-relaxed">
                Navigation challenges - Users desired a payment application with
                easy navigation , input payment information.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="bg-red-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-8">
                3
              </span>
              <p className="text-lg leading-relaxed pb-4 text-red-500 font-bold">
                Pain point
              </p>
              <p className="text-lg leading-relaxed">
                Users value quick access to customer support within the app.
                They seek live chat options, in-app help guides, and easily
                accessible contact information.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="bg-red-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-8">
                4
              </span>
              <p className="text-justify text-md leading-relaxed pb-4 text-red-500 font-bold">
                Pain point
              </p>
              <p className="text-justify text-md leading-relaxed">
                Users highlighted the importance of an organized and detailed
                transaction history. They want to easily search, filter, and
                export their transaction data
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FirstProjectPage;
