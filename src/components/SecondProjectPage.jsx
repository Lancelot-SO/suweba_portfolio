import React from "react";
import hero from "../assets/Project/Project overview.png";
import persona1 from "../assets/Project/Persona 1.svg";
import persona2 from "../assets/Project/Persona 2.svg";
import analysis from "../assets/Project/Competitive analysis.png";
import ideation from "../assets/Project/Ideation_Sketch.png";
import wireframe from "../assets/Project/Digital Wireframe.png";
import Prototype from "../assets/Project/Prototype - Digital Wireframes.png";
import before from "../assets/Project/Before Tutorial.png";
import after from "../assets/Project/Mock 3 Enroll Page.png";
import after1 from "../assets/Project/Mock 2 Discover page.png";
import Discover from "../assets/Project/After Discover 1 .png";
import Discover1 from "../assets/Project/Before Discover.png";
import hifi from "../assets/Project/Hi fi prototype.png";
import mobile from "../assets/Project/mobile_screen.png";
import tablet from "../assets/Project/Responsive Tablet .png";
import desktop from "../assets/Project/Responsiv -Desk_Laptop.png";

import { PiChalkboardSimpleDuotone } from "react-icons/pi";
import {
  BsArrowLeft,
  BsArrowRight,
  BsClock,
  BsPersonCircle,
} from "react-icons/bs";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
const SecondProjectPage = () => {
  return (
    <div className="w-full py-4 px-12">
      <h1 className="text-4xl font-bold text-blue-600 py-20">
        Design A Way To Help Tutor Teenagers In Financial Skills{" "}
      </h1>
      <h1 className="flex items-center justify-center pb-4 text-3xl text-gray-500">
        Project Overview
      </h1>

      <div className=" flex  justify-center items-center">
        <div className="w-1/3 pr-8 flex">
          <div>
            <div>
              <div className="bg-blue-600 w-16 px-3 h-16 flex items-center rounded-full text-white mb-4">
                <PiChalkboardSimpleDuotone
                  className="flex items-center justify-center"
                  size={40}
                />
              </div>
              <h2 className="pb-4 text-xl text-blue-600 font-bold">
                The product:
              </h2>
              <p className="pb-4 text-justify text-lg leading-relaxed text-gray-500">
                The product is a design solution aimed to empower teenagers with
                essential financial knowledge and skills that will help them
                make informed and responsible financial decisions
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="bg-blue-600 w-16 px-3 h-16 flex items-center rounded-full text-white mb-4">
                  <BsClock
                    className="flex items-center justify-center"
                    size={40}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-blue-600 pb-4">Project duration:</span>
                  <span className="text-gray-500 pb-4">June - July 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-row">
          <div className="flex m-0 p-0">
            <img src={hero} alt="sec" className="pt-8 w-3/3" />
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
            The existing learning application do not have a solution
            specifically designed to teach teenagers financial literacy. The
            existing applications have modules and subjects across many fields
            and no tailor made content to encourage teenagers learn and
            understand financial skills
          </p>
        </div>
        <div className="w-1/2">
          <div className="bg-blue-600 w-10 px-3 h-10 flex items-center rounded-full">
            <AiFillStar className="text-white" />
          </div>
          <p className="text-blue-600 font-bold pt-4">The goal:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
            To design a learning application that specifically address financial
            literacy gaps amongst teenagers. The solution will be tailor made to
            teach and coach teenagers skills required to learn and upskill. The
            content will be designed in a friendly and interactive way to
            encourage teenagers to ls and tailoring it to meet the diverse
            backgrounds and levels of financial knowledge users.
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
                Planned and conducted the user research through collaboration
                with stakeholders using qualitative and quantitative research
                methods
              </li>
              <li>Created user personas to help guide the design process</li>
              <li>Planned and conducted usability testing sessions</li>
              <li>
                Collaborated with UX Designers to translate findings into design
                recommendations
              </li>
              <li>Created wireframes and mock-ups</li>
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
                A detailed approach was adopted to gain insights into user needs
                and user pain points. Interviews and surveys were conducted
                among teenagers. Most participants reported the existing
                learning platforms came with a cost. Participants wanted a
                dedicated learning platform that catered to learning financial
                skills in a hands on practical way. They wanted a simple way to
                understand complex topics. The feedback received through
                research made it very clear that users were willing to learn
                financial skills and not abandon the program if the modules were
                taught in a simple way for participants to grasp and understand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-16 pb-16">
            Amawen
          </h1>
          <span className="text-red-500">Problem statement:</span>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Amawen is a high school student who needs to learn financial skills
            to manage his allowances because the available programs makes it
            difficult for him to learn.
          </p>
        </div>
        <div class="w-2/3 p-4">
          <img src={persona1} alt="ps" />
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-16 pb-16">
            Person 2: Apuingle
          </h1>
          <span className="text-red-500">Problem statement:</span>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Apuingle is high school graduate with dyslexia who needs to have
            personal tuition on financial skills because her current learning
            environment is not personalized.
          </p>
        </div>
        <div class="w-2/3 p-4">
          <img src={persona2} alt="ps" />
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-16 pb-16">
            Competitive audit
          </h1>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Users wanted wanted a dedicated learning platform targeted at
            teenagers and tailored to teach financial skills. Users wanted the
            course to be taught in simple manner for them to understand. Users
            also wanted to enroll on courses taught by instructors who could
            simplify the content
          </p>
        </div>
        <div class="w-2/3 p-4">
          <img src={analysis} alt="ps" className="w-full h-80" />
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-16 pb-16">
            Ideation
          </h1>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            This shows the basic structure and highlights the intended use of
            the application. All subjects are accessed freely with no cost. The
            application shows the subjects under financial skills a learner can
            enroll on. The second image shows the progress of each module taken
            and the 3r screen provides an overview of the course instructors.
            Instructor reviews will motivate users to enroll
          </p>
        </div>
        <div class="w-2/3 p-4">
          <img src={ideation} alt="ps" />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Starting the design
        </h1>
        <div className="flex flex-col pt-20">
          <div className="flex flex-row">
            <div className="w-1/3 pr-8">
              <h2 className="text-4xl font-bold text-gray-500 pb-20">
                Digital wireframes
              </h2>
              <p className="text-justify text-lg text-gray-500 leading-relaxed py-12">
                [Users desired an overview of the subjects and the instructors
                teaching the subjects]
              </p>
            </div>
            <div className="w-2/3 flex items-center justify-center">
              <div className="flex flex-row w-80 mb-80 gap-4">
                <span className="text-gray-500">
                  Tips on the various finance subjects a learner can enroll on{" "}
                </span>
                <BsArrowRight size={60} className="text-yellow-500" />
              </div>
              <img
                src={wireframe}
                alt="sec"
                className="w-80 h-100 border border-blue-200"
              />
              <div className="flex flex-row w-80 mt-40 gap-4">
                <BsArrowLeft size={60} className="text-yellow-500" />
                <span className="text-gray-500">
                  Information on the instructors to provide learners with a
                  information to make a decision before enrolling on a course{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-row">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">
              Low-fidelity prototype
            </h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              The user access the homepage. The user is guided on the selection
              of subjects based on the user’s interest. A list of subjects are
              displayed providing the user the option to select from. The user
              selects the preferred course and follows through the steps to
              enroll. Please find link below
            </p>
            <br />
            <p>Please find link below</p>
            <a
              href="https://www.figma.com/file/dcqu1J9EjE74Tua5pTai3s/Web-Payment?t
              ype=design&node-id=122%3A105&mode=design&t=TALZ4SUg2pn
              RWjz7-1"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.figma.com/file/dcqu1J9EjE74Tua5pTai3s/Web-Payment?t
              ype=design&node-id=122%3A105&mode=design&t=TALZ4SUg2pn RWjz7-1
            </a>
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <img src={Prototype} alt="sec" className="w-2/3 h-2/3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl font-bold text-gray-500 pt-4 pb-16">
          Usability study: findings
        </h1>
        <span className="flex mb-12 text-gray-500">
          Insert a one to two sentence introduction to the findings shared
          below.
        </span>

        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className="bg-orange-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>
            <span className="flex ml-16 mb-8">Finding</span>

            <p className="text-lg leading-relaxed">
              Users wanted interactive learning that would incorporate games,
              quizzes and discussions to reinforce learning
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-orange-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>
            <span className="flex ml-16 mb-8">Finding</span>

            <p className="text-lg leading-relaxed">
              Users wanted a tracking system that would enable them see their
              progress and achievements{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-orange-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <span className="flex ml-16 mb-8">Finding</span>

            <p className="text-lg leading-relaxed">
              Users wanted clear language and jargon free content
            </p>
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
              Based on the insights from the usability studies, i applied design
              changes like providing a clear indication on the course progress
              and nature of the content.
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex flex-row ml-8">
              <div>
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-4">
                  <img src={before} alt="sec" className="pt-8 w-2/3" />
                  <BsArrowRight size={60} className="text-yellow-500 mt-80" />
                </div>
              </div>
              <div>
                <span className="text-custom-blue">After usability study</span>
                <img src={after} alt="sec" className="pt-8 w-3/3 border" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row pb-20">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">Mockups</h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              Additional designs included having personalized recommendations
              for users based off their activities and what other learners are
              discovering.
            </p>
          </div>
          <div className="w-2/3">
            <div className="flex flex-row">
              <div className="flex flex-1 flex-col">
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-4">
                  <img src={Discover1} alt="sec" className="w-80 " />
                  <BsArrowRight size={60} className="text-yellow-500 mt-80" />
                </div>
              </div>
              <div className="flex flex-1 flex-col w-full">
                <span className="text-custom-blue ml-24">
                  After usability study
                </span>
                <img src={Discover} alt="sec" className="h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-4xl font-bold text-gray-500 pb-4">Mockups</h2>
        <div className="flex flex-row gap-1">
          <img
            src={after1}
            alt="sec"
            className="w-1/4  p-2 border-2 border-black rounded-lg"
          />
          <img
            src={after}
            alt="sec"
            className="w-1/4  p-2 border-2 border-black rounded-lg"
          />
          <img
            src={after}
            alt="sec"
            className="w-1/4  p-2 border-2 border-black rounded-lg"
          />
          <img
            src={after}
            alt="sec"
            className="w-1/4  p-2 border-2 border-black rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-row">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">
              Low-fidelity prototype
            </h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              The high fidelity prototype followed the same user flow as the low
              fidelity prototype including design changes made after the
              usability studies.
            </p>
            <br />
            <p>View the link below.</p>
            <a
              href="https://www.figma.com/file/dcqu1J9EjE74Tua5pTai3s/Web-
              Payment?type=design&node-id=128%3A46&mode=design&t
              =TALZ4SUg2pnRWjz7-1"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.figma.com/file/dcqu1J9EjE74Tua5pTai3s/Web-
              Payment?type=design&node-id=128%3A46&mode=design&t
              =TALZ4SUg2pnRWjz7-1
            </a>
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <img src={hifi} alt="sec" className="w-2/3 h-2/3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl font-bold text-gray-500 pt-4 pb-16">
          Accessibility considerations
        </h1>

        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className="bg-green-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>

            <p className="text-lg leading-relaxed">
              Clear labels for interactive elements that can be read by screen
              readers
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-green-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-lg leading-relaxed">
              Adjustable font size. Users can adjust the font size .{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-green-400 w-16 h-16 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>

            <p className="text-lg leading-relaxed">
              Initial focus of the home screen on personalized recommendations
              help define the primary task or action for the user{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Responsive Design
        </h1>
        <div className="flex flex-row pt-20">
          <div className="w-1/3 pr-8">
            <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-16 pb-16">
              Sitemap
            </h1>
            <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
              The sitemap was designed with user feedback in mind. The goal was
              to create a clear and organized information architecture to
              improve user navigation and a positive learning experience for
              users
            </p>
          </div>
          <div class="w-2/3 p-4">
            <img src={analysis} alt="ps" className="w-full h-80" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-row">
          <div>
            <span className="ml-8 text-gray-500">Mobile Website</span>
            <img src={mobile} alt="mob" />
          </div>
          <div>
            <span className="ml-8 text-gray-500">Tablet</span>
            <img src={tablet} alt="mob" />
          </div>
          <div>
            <span className="ml-8 text-gray-500">Desktop</span>
            <img src={desktop} alt="mob" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Refining the design
        </h1>
        <h2 className="text-4xl font-bold text-gray-500">Takeaways</h2>

        <div className="flex pt-20">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-500 w-10 px-3 h-10 flex items-center rounded-full">
              <FaClipboardCheck className="text-white" />
            </div>
            <p className="text-gray-500 font-bold pt-4">Impact:</p>
            <br />
            <p className="text-justify text-lg leading-relaxed">
              Users shared that the app could motivate users to learn and apply
              financial skills. One quote from a peer was “ “learning financial
              skills via the app is like having a personal finance tutor on the
              go helping me make smart financial decisions.
            </p>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-500 w-10 px-3 h-10 flex items-center rounded-full">
              <MdMenuBook className="text-white" />
            </div>
            <p className="text-gray-500 font-bold pt-4">What I learned:</p>
            <br />
            <p className="text-justify text-lg leading-relaxed">
              I learned that even though the problem i was trying to solve was
              big one, going through the entire design process and aligning with
              specific user needs helped me come up with innovative solutions
              that were both feasible and useful
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
              Continuous user testing and feedback to identify areas for
              improvement and refine
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-lg leading-relaxed">
              Add more financial educational resources and complimentary topics{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <p className="text-lg leading-relaxed">
              Conduct research on how successful the app is in reaching the goal
              to learn financial skills
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

export default SecondProjectPage;
