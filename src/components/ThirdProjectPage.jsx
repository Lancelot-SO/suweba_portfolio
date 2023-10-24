import React from "react";
import HeroImage1 from "../assets/Portfolio 3/Mock up project overview.png";
import Persona from "../assets/project2/pexel4.jpg";
import Persona1 from "../assets/project2/pexel1.jpg";
import map from "../assets/Portfolio 3/journey.png";
import sketch from "../assets/Portfolio 3/Sketch.jpg";
import Digital from "../assets/Portfolio 3/Digital.png";
import prototype from "../assets/Portfolio 3/Prototype.png";
import usability1 from "../assets/Portfolio 3/Usability1.png";
import after1 from "../assets/Portfolio 3/After1.png";
import usability2 from "../assets/Portfolio 3/Usability2.png";
import after2 from "../assets/Portfolio 3/After2.png";
import mock1 from "../assets/Portfolio 3/Mock1.png";
import mock2 from "../assets/Portfolio 3/Mock2.png";
import mock3 from "../assets/Portfolio 3/Mock3.png";
import mock4 from "../assets/Portfolio 3/Mock4.png";
import prototype1 from "../assets/Portfolio 3/PrototypeHifi.png";

import { CgDanger } from "react-icons/cg";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight, BsPersonCircle } from "react-icons/bs";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { HiPencil } from "react-icons/hi";

const ThirdProjectPage = () => {
  return (
    <div className="w-full py-4 px-12">
      <h1 className="text-4xl font-bold text-blue-600 py-20">
        Designing A Mobile Data Collection App for A Seamless User Experience
      </h1>

      <div className="pt-4 flex  justify-center items-center">
        <div className="w-1/3 pr-8 flex">
          <div>
            <h1 className="text-3xl text-gray-500 pb-12">Project Overview</h1>
            <div>
              <h2 className="pb-4 text-xl text-blue-600 font-bold">
                Data Collection App
              </h2>
              <p className="pb-4 text-justify text-lg leading-relaxed">
                The data collection app allows the gathering of data on farmers
                to make well informed decisions and make allocation of resources
                and strategic planning. The design of the data collection app is
                to provide a user-friendly experience and simplifies the data
                collection process.
              </p>
              <span className="text-blue-600">
                Project duration:<br></br>
                August 2023 - October 2023
              </span>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-row">
          <div className="flex m-0 p-0">
            <img src={HeroImage1} alt="sec" className="pt-8 w-3/3" />
          </div>
        </div>
      </div>

      <div className="flex pt-20">
        <div className="w-1/2 pr-8">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <CgDanger className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">The problem:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            Existing applications lack user-friendly interface and easy process
            flow. Users face difficulties in navigating through the application.
            This leads to frustration, inaccurate or potentially loss of data.
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <AiFillStar className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">The goal:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            The primary goal is to establish a smooth, intuitive, and secure
            data collection process that ensures user satisfaction
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
          <p className="text-justify text-lg leading-relaxed text-gray-500">
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
            <ul className="list-disc text-gray-500">
              <li>
                Designed the visual elements of the interface, including
                layouts, color schemes, typography, icons, and interactive
                elements.
              </li>
              <li>
                Focused on the overall user experience, ensuring that the
                interface is easy to navigate and use.
              </li>
              <li>
                Conducting user research to understand user needs, behaviors,
                and preferences.
              </li>
              <li>
                Developing user personas and user journey maps to guide design
                decisions.
              </li>
              <li>
                Organizing content and features to create a logical and
                intuitive structure.
              </li>
              <li>
                Designing navigation menus and user flows that make it easy for
                users to find information and complete tasks.
              </li>
              <li>
                Creating wireframes and prototypes to visualize the layout and
                functionality of the interface.
              </li>
              <li>
                Iterating on design ideas and incorporating feedback from
                stakeholders.
              </li>
              <li>
                Designing with accessibility in mind to make the interface
                usable for people with disabilities.
              </li>
              <li>
                Ensuring compliance with accessibility standards and guidelines.
              </li>
              <li>
                Working closely with cross-functional teams, including
                developers, product managers, and other designers, to ensure the
                design aligns with project goals.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Understanding the User
        </h1>
        <div>
          <h2 className="text-4xl font-bold text-gray-500 pt-4 pb-16">
            User research: summary
          </h2>
          <div className="relative w-1/2 h-100 ml-80">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-red-600 w-10 h-10 flex items-center justify-center rounded-full">
              <BiSolidBarChartAlt2 />
            </div>
            <div className="w-100% h-2/3 mt-12 pt-6 pl-20 ">
              <p className="text-justify text-lg leading-relaxed bg-gray-100 py-12 px-12">
                The purpose of this user research study was to gain insights
                into the usability and effectiveness of a mobile data collection
                app designed to collect data on farmers The goal was to
                understand the needs, preferences, and pain points of the target
                user group, which primarily consisted of field agents. The
                research involved a combination of user interviews, surveys, and
                usability testing. A total of 10 participants were engaged in
                the study, consisting of field agents from diverse regions.
              </p>
            </div>
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
              Complex data entry. Users wanted a timely and error free process
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
              Navigation challenges - Users desired a registration application
              with easy navigation.
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
              Users wanted an application that could effectively work offline
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
              Users value quick access to customer support within the app. They
              seek in-app help guides, and easily accessible contact
              information.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-4 pb-16">
            Persona: <span className="text-black">Abigail</span>
          </h1>
          <span className="text-red-500">Problem statement:</span>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Abigail, an experienced field agent, struggles with the current tool
            for registering farmers for data subsidies. She worries about data
            security when handling sensitive information and faces frustration
            due to poor network connectivity in remote areas. The app's
            complexity overwhelms her, and she desires a simpler, more efficient
            solution for accurate registrations."
          </p>
        </div>
        <div class="w-2/3 p-4">
          <div class="flex items-start flex-col">
            <div className="flex flex-col">
              <div class="mr-4 flex items-center">
                <div className="border-4 border-yellow-500 p-2">
                  <img src={Persona} alt="sec" className=" w-40 h-30" />
                </div>
                <span class="italic mt-12 ml-16 flex items-center text-gray-500">
                  “I need a more straightforward solution to make my work
                  efficient”.
                </span>
              </div>
              <table class="mt-4 ml-16">
                <tr>
                  <td class="font-bold">Age:</td>
                  <td className="text-gray-500">32</td>
                </tr>
                <tr>
                  <td class="font-bold">Education:</td>
                  <td className="text-gray-500">College</td>
                </tr>
                <tr>
                  <td class="font-bold">Hometown:</td>
                  <td className="text-gray-500">Accra, Gh.</td>
                </tr>
                <tr>
                  <td class="font-bold">Family:</td>
                  <td className="text-gray-500">Single</td>
                </tr>
                <tr>
                  <td class="font-bold">Occupation:</td>
                  <td className="text-gray-500">Agric Engineer</td>
                </tr>
              </table>
            </div>

            <div className="flex flex-row gap-4">
              <div>
                <span className="text-gray-500 font-bold">Goals:</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>
                    Highly tech-savvy and comfortable with smartphones and apps.
                  </li>
                  <li>Strong analytical and problem-solving skills. </li>
                  <li>Values efficiency and data accuracy</li>
                </ul>
              </div>
              <div>
                <span className="text-gray-500 font-bold">Frustrations</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>
                    Frustration with network connectivity issues in rural areas.
                  </li>
                  <li>Concerned about complex registration process</li>
                </ul>
              </div>
            </div>
            <div class="border-4 border-yellow-400 mx-auto my-12">
              <p className="p-4 text-gray-500">
                Abigail is a 32-year-old field agent with a background in Agric
                Engineering who is tech-savvy and enthusiastic about using
                digital tools to streamline her work. Due to the amount of
                paperwork involved in her work, she is concerned about how to
                quickly gather her data. She is also worried about the network
                connectivity challenges and data security when handling
                information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-4 pb-16">
            Persona: <span className="text-black">Manu</span>
          </h1>
          <span className="text-red-500">Problem statement:</span>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Manu is a 21-year-old agricultural agent with a limited background
            in technology. He is relatively new to using digital tools for work.
            He has limited technology experience and tends to be hesitant about
            new apps. He prefers straightforward and user-friendly interfaces,
            and values simplicity and ease of use over advanced features.
          </p>
        </div>
        <div class="w-2/3 p-4">
          <div class="flex items-start flex-col">
            <div className="flex flex-col">
              <div class="mr-4 flex items-center">
                <div className="border-4 border-yellow-500 p-2">
                  <img src={Persona1} alt="sec" className=" w-40 h-30" />
                </div>
                <span class="mt-12 ml-16 flex items-center text-gray-500 italic">
                  “I just want something easy to use with clear instructions, so
                  I can get the job done without stress."
                </span>
              </div>
              <table class="mt-4 ml-16">
                <tr>
                  <td class="font-bold">Age:</td>
                  <td className="text-gray-500">21</td>
                </tr>
                <tr>
                  <td class="font-bold">Education:</td>
                  <td className="text-gray-500">College</td>
                </tr>
                <tr>
                  <td class="font-bold">Hometown:</td>
                  <td className="text-gray-500">Accra, Gh.</td>
                </tr>
                <tr>
                  <td class="font-bold">Family:</td>
                  <td className="text-gray-500">Single</td>
                </tr>
                <tr>
                  <td class="font-bold">Occupation:</td>
                  <td className="text-gray-500">Agric Engineer</td>
                </tr>
              </table>
            </div>

            <div className="flex flex-row gap-4">
              <div>
                <span className="text-gray-500 font-bold">Goals:</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>
                    Complete farmer registrations accurately without technical
                    hurdles.{" "}
                  </li>
                  <li>
                    Clear and straightforward instructions within the app.
                  </li>
                  <li>
                    Support resources and responsive assistance for
                    troubleshooting
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-gray-500 font-bold">Frustrations</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>
                    Overwhelmed by the platform’s complexity and too many
                    features.{" "}
                  </li>
                  <li>
                    Frequently encounters difficulties when network connectivity
                    is poor.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-4 border-yellow-400 mx-auto my-12">
              <p className="p-4 text-gray-500">
                Manu, a newly recruited agent, is struggling with the existing
                platform used for farmer registration in the data subsidization
                program. His limited technology experience and exposure to
                digital tools make the platform’s complex user interface a
                significant challenge for him. He often feels overwhelmed by the
                numerous data entry fields and lacks confidence in his ability
                to use the platform efficiently. Manu is further hindered by
                unreliable network connectivity in rural areas, leading to
                registration delays. He requires a more intuitive, user-friendly
                app with clear guidance and easy troubleshooting resources to
                complete registrations accurately and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-4xl font-bold text-gray-500 py-20">
          User journey map
        </h1>
        <img src={map} alt="map" />
        <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
          The goal is to create a user centered design, provide a seamless user
          experience.<br></br> The thought process involves incorporating
          intuitive and simple designs enabling the easy input of data.
        </p>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-4xl font-bold text-blue-600 py-20 flex items-center justify-center">
          Starting the design
        </h1>
        <h2 className="text-4xl font-bold text-gray-500 py-12">
          Paper wireframes
        </h2>
        <img src={sketch} alt="sketch" />
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-row">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">
              Digital wireframes
            </h2>
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <div className="flex flex-row w-80 mt-80 gap-4">
              <span className="text-gray-500">
                Users desired to have access to quick support when challenges
                occurred{" "}
              </span>
              <BsArrowRight size={60} className="text-yellow-500" />
            </div>
            <img src={Digital} alt="sec" className="w-80 h-100" />
            <div className="flex flex-row w-80 mb-80 gap-4">
              <BsArrowLeft size={60} className="text-yellow-500" />
              <span className="text-gray-500">
                Notice of synced and unsynced data when offline to inform users
                of the status of the registration process.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-4xl font-bold text-gray-500 py-12">
          Low-fidelity prototype
        </h2>
        <p className="text-justify text-md leading-relaxed py-4 text-gray-500">
          The user access the menu from the homepage. A list of functions are
          displayed providing the user the option to select from the menu. The
          user selects new registration and follow through the steps to onboard
          third party on to the platform
        </p>
        <span className="text-gray-500">Please find link below</span>
        <a
          href="https://www.figma.com/file/pKcEgk2OyDTLIa0PARWh44/AFA?type=design&node-id=104%3A851&mode=design&t=xinqtY
          QjyV8rsXYI-1"
          className="text-blue-500 pb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.figma.com/file/pKcEgk2OyDTLIa0PARWh44/AFA?type=design&node-id=104%3A851&mode=design&t=xinqtY
          QjyV8rsXYI-1
        </a>
        <img src={prototype} alt="sketch" />
      </div>

      <div className="flex flex-col pt-20">
        <div className="pr-8 pb-8">
          <h2 className="text-4xl font-bold text-gray-500 ">
            Usability study : findings
          </h2>
          <p className="text-justify text-lg leading-relaxed py-12 text-gray-500">
            Write a short introduction to the usability studies you conducted
            and your findings.
          </p>
        </div>
        <div className=" flex items-center justify-center pt-8">
          <div className="flex flex-row gap-8">
            <div>
              <h2 className="text-orange-400 pb-4 font-bold">
                Round 1 findings
              </h2>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  1
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Simplify the process
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  2
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  A notice to indicate offline and online mode
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  3
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Stream the upload of photo ids
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-orange-400 pb-4 font-bold">
                Round 2 findings
              </h2>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  1
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Indicate the file size for photo id during upload
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  2
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Reword texts for users to easily understand{" "}
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  3
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Incorporate high contrast colour in the design{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Refining the design
        </h1>
        <div className="flex flex-row pb-20">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">Mockups</h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              Users perceived the groupings of the services to perform similar
              functions. This was considered and the services were grouped into
              two categories to simplify the complexity of grouping all the
              services together
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex flex-row ml-8">
              <div className="w-1/2">
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-4">
                  <img
                    src={usability1}
                    alt="sec"
                    className="pt-8 w-80 h-full"
                  />
                  <BsArrowRight size={60} className="text-yellow-500 mt-80" />
                </div>
              </div>
              <div className="w-1/2">
                <span className="text-custom-blue ml-16">
                  After usability study
                </span>
                <img src={after1} alt="sec" className="pt-8 w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pb-20">
        <div className="w-1/3 pr-8">
          <h2 className="text-4xl font-bold text-gray-500 pb-20">Mockups</h2>
          <p className="text-justify text-lg leading-relaxed py-12">
            The text and headers had the same visual colours. Users did not know
            where to place emphasis. Colours were applied to the headers to show
            emphasis.A button to sync all information collected offline was
            introduced to shorten the process time.
          </p>
        </div>
        <div className="w-2/3">
          <div className="flex flex-row ml-8">
            <div className="w-1/2">
              <span className="">Before usability study</span>
              <div className="flex flex-row gap-4">
                <img src={usability2} alt="sec" className="pt-8 w-80 h-full" />
                <BsArrowRight size={60} className="text-yellow-500 mt-80" />
              </div>
            </div>
            <div className="w-1/2">
              <span className="text-custom-blue ml-16">
                After usability study
              </span>
              <img src={after2} alt="sec" className="pt-8 w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-4xl font-bold text-gray-500 pb-4">Mockups</h2>
        <div className="flex flex-wrap">
          <img src={mock1} alt="sec" className="w-1/4  p-2" />
          <img src={mock2} alt="sec" className="w-1/4  p-2" />
          <img src={mock3} alt="sec" className="w-1/4  p-2" />
          <img src={mock4} alt="sec" className="w-1/4  p-2" />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-4xl font-bold text-gray-500 py-12">
          High-fidelity prototype
        </h2>
        <p className="text-justify text-md leading-relaxed py-4 text-gray-500">
          The high fidelity prototype followed the same user flow as the low
          fidelity prototype including design changes made after the usability
          studies.
        </p>
        <span className="text-gray-500">Please find link below</span>
        <a
          href="https://www.figma.com/file/Rwk9ag9JbIWQryxEt2dayb/CalBank-App-Redesign?type=design&node-id=116%3A50&
          mode=design&t=DoiOOAKzsxMFo43G-1"
          className="text-blue-500 pb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.figma.com/file/Rwk9ag9JbIWQryxEt2dayb/CalBank-App-Redesign?type=design&node-id=116%3A50&
          mode=design&t=DoiOOAKzsxMFo43G-1
        </a>
        <img src={prototype1} alt="sketch" />
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-4xl font-bold text-gray-500 pt-4 pb-16">
          Accessibility considerations{" "}
        </h1>
        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className="bg-green-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>

            <p className="text-lg leading-relaxed">
              Contrast and Color Color contrast was applied between the texts
              and background elements
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-green-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-lg leading-relaxed">
              Adjustable font size. Users can adjust the font size .
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-green-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <p className="text-lg leading-relaxed">
              Touch Target size Interactive elements have adequate size so users
              with motor impairments can easily tap.
            </p>
          </div>
        </div>
      </div>

      <div className="flex pt-20 flex-col">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Going forward
        </h1>
        <span className="text-4xl font-bold text-gray-500 pb-20">
          Takeaways
        </span>

        <div className="flex flex-row">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-500 w-10 px-3 h-10 flex items-center rounded-full">
              <FaClipboardCheck className="text-white" />
            </div>
            <br />
            <p className="text-justify text-lg leading-relaxed">
              Impact: Users shared that the app design was clean, intuitive and
              user friendly. One quote from a peer was “navigating this app is
              so easy i do not need to figure out how to navigate as a first
              time user.
            </p>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-500 w-10 px-3 h-10 flex items-center rounded-full">
              <MdMenuBook className="text-white" />
            </div>

            <br />
            <p className="text-justify text-lg leading-relaxed">
              What I learned: I learned that even though the problem i was
              trying to solve was big one, going through the entire design
              process and aligning with specific user needs helped me come up
              with innovative solutions that were both feasible and useful
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-4xl font-bold text-gray-500 pt-4 pb-16">
          Next steps{" "}
        </h1>
        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>

            <p className="text-lg leading-relaxed">
              Collect and analyze user feedback, reviews, and comments to gain
              insights into the user experience.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-lg leading-relaxed">
              Provide educational resources to support user understanding{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <p className="text-lg leading-relaxed">
              Continue to conduct periodic usability testing to assess how well
              the application meets user needs and expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div>
          <h2 className="text-4xl font-bold text-gray-500 pt-4 pb-16">
            Let’s connect!
          </h2>
          <div className="relative w-1/2 h-100 ml-80">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white bg-gray-500 w-10 h-10 flex items-center justify-center rounded-full">
              <HiPencil />
            </div>
            <div className="w-100% h-2/3 mt-12 pt-6 pl-20 ">
              <p className="text-justify text-lg leading-relaxed bg-gray-100 py-12 px-12">
                Email -{" "}
                <a
                  href="mailto:sidikialare@gmail.com"
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-blue-500 "
                >
                  sidikialare@gmail.com
                </a>{" "}
                -<br></br>
                LinkedIn -
                <a
                  href="https://www.linkedin.com/in/sidikialare/"
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-blue-500 "
                >
                  sidikialare{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdProjectPage;
