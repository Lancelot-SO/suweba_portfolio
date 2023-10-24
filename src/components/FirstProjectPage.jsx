import React from "react";
import HeroImage1 from "../assets/project2/Mock 2Homepage.png";
import HeroImage2 from "../assets/project2/Mock 3 Menu.png";
import HeroImage3 from "../assets/project2/set.png";
import Persona from "../assets/project2/p.jpg";
import Digital from "../assets/project2/digitalframe.png";
import Prototype from "../assets/project2/prototype.png";
import HandDrawn from "../assets/project2/handdrawn.jpg";
import Before from "../assets/project2/before.png";
import After from "../assets/project2/after.png";
import Confirm from "../assets/project2/confirm.png";
import Form from "../assets/project2/form.png";

import { BsPersonCircle } from "react-icons/bs";
import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
import { PiWarningCircleFill } from "react-icons/pi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaClipboardCheck } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { HiPencil } from "react-icons/hi";

const FirstProjectPage = () => {
  return (
    <div className="w-full py-4 px-12">
      {/* Add padding-top to create space below the NavBar */}
      <h1 className="text-4xl font-bold text-blue-600 py-20">
        Redesigning A Payment Application for a seamless User Experience
      </h1>
      <div className="pt-4 flex  justify-center items-center">
        <div className="w-1/3 pr-8 flex">
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
        <div className="w-2/3 flex flex-row">
          <div className="flex m-0 p-0">
            <img src={HeroImage1} alt="sec" className="pt-8 w-1/3" />
            <img src={HeroImage2} alt="sec" className="pt-8 w-1/3" />
            <img src={HeroImage3} alt="sec" className="pt-8 w-1/3" />
          </div>
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
              <p className="text-justify text-lg leading-relaxed bg-gray-100 py-12 px-12">
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
              Security concerns on robust encryption mesures, storage of payment
              data.
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
              Users value quick access to customer support within the app. They
              seek live chat options, in-app help guides, and easily accessible
              contact information.
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

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-4 pb-16">
            Persona: <span className="text-black">Atul</span>
          </h1>
          <span className="text-red-500">Problem statement:</span>
          <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
            Atul is a busy seamstress who needs ways to simply and quickly send
            to her supplier because visiting her financial institution is time
            consuming for her. Atul is skeptical in using payment apps because
            she is concerned about the security of these apps.
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
                  “Changing the narrative through fashion”
                </span>
              </div>
              <table class="mt-4 ml-16">
                <tr>
                  <td class="font-bold">Age:</td>
                  <td className="text-gray-500">23</td>
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
                  <td className="text-gray-500">Tailor</td>
                </tr>
              </table>
            </div>

            <div className="flex flex-row gap-4">
              <div>
                <span className="text-gray-500 font-bold">Goals:</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>Instantly send funds</li>
                  <li>
                    To use an app which is secure and protects customer data
                  </li>
                  <li>Use an app which is easy to navigate</li>
                </ul>
              </div>
              <div>
                <span className="text-gray-500 font-bold">Frustrations</span>
                <ul className="list-disc ml-8 text-gray-500">
                  <li>Restrictions on transfer/payment amounts</li>
                  <li>Concerned about high charges/fees</li>
                  <li>
                    Worried about weak security associated with payment apps
                  </li>
                </ul>
              </div>
            </div>
            <div class="border-4 border-yellow-400 mx-auto my-12">
              <p className="p-4 text-gray-500">
                Atul is a 23 year old tailor who has dyslexia and lives with her
                mum. She sews ready made garments and buys items from different
                sellers to accessorize. Atul constantly needs to quickly make
                payments to secure her desired items. Due to her busy schedule,
                she is concerned with going to her financial institution to make
                payments. She is also worried about high fees and charges
                associated with funds transfer and worried using a payment app
                may result in security and data breach and a limit on the
                payment amounts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-500 pb-4">
            User journey map
          </h1>
          <p className="text-gray-500">
            The goal is to create a user-centered design, provide a seamless
            user experience. The thought process involves incorporating security
            measures such as multi-factor authentication and clear communication
            about privacy and data protection.
          </p>
        </div>
        <div className="flex p-8">
          <div className="flex flex-col pr-4">
            <div className="flex flex-col pb-4">
              <h1 className="text-black font-bold">Persona: Atul</h1>
              <span>Goal: A fast and easy way to pay suppliers</span>
            </div>
            <table class="table-fixed border border-collapse border-black w-full">
              <thead>
                <tr>
                  <th class="w-1/6 border border-black p-4">Action</th>
                  <th class="w-1/6 border border-black p-4 bg-blue-400">
                    Select a payment app
                  </th>
                  <th class="w-1/6 border border-black p-4 bg-blue-400">
                    Browse the features
                  </th>
                  <th class="w-1/6 border border-black p-4 bg-blue-400">
                    Decide on a transaction
                  </th>
                  <th class="w-1/6 border border-black p-4 bg-blue-400">
                    Complete a transaction
                  </th>
                  <th class="w-1/6 border border-black p-4 bg-blue-400">
                    Receive advice
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="w-1/6 border border-black p-4 font-bold">
                    Task List
                  </td>
                  <td class="w-2/6 border border-black p-4">
                    <div className=" flex flex-col text-gray-500">
                      <span className="pb-2">Tasks</span>
                      <span>A. Decide on a payment method</span>
                      <span>
                        B. Search for payment apps via the stores or browser
                      </span>
                      <span>
                        C. Check security review and select a payment app
                      </span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4">
                    <div className=" flex flex-col text-gray-500">
                      <span className="pb-2">Tasks</span>
                      <span className="mt-12">
                        A. Browse online or the stores
                      </span>
                      <span>
                        B. Download the application via the stores/access online
                      </span>
                      <span>C. View features</span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4">
                    <div className=" flex flex-col text-gray-500">
                      <span className="pb-2">Tasks</span>
                      <span className="mt-12">
                        A. Provide payment information
                      </span>
                      <span>B. Choose transaction type</span>
                      <span>C. Submit beneficiary details</span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4">
                    {" "}
                    <div className=" flex flex-col text-gray-500">
                      <span className="pb-2">Tasks</span>
                      <span className="mt-16">A. View Charges/fees</span>
                      <span className="mb-10">B. Confirm payment details</span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4">
                    <div className=" flex flex-col text-gray-500">
                      <span className="pb-2">Tasks</span>
                      <span className="mt-20">A. View payment status</span>
                      <span>B. Notification of the status of the payment</span>
                      <span>C. View payment device</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="w-1/6 border border-black p-4 font-bold">
                    Emotions
                  </td>
                  <td class="w-2/6 border border-black p-4 text-gray-500">
                    <div>
                      <span>Overwhelmed by number of payment options</span>
                      <span>Excited to find one they like</span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4 text-gray-500">
                    <div>
                      <span>
                        Annoyed at large amount of texts with tiny font sizes
                        and limited visuals{" "}
                      </span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4 text-gray-500">
                    <div>
                      <span>
                        Dissatisfied with scrolling to find appropriate function
                      </span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4 text-gray-500">
                    <div>
                      <span>
                        Fraustrated at having to complete many fields/forms and
                        provide lots of information
                      </span>
                    </div>
                  </td>
                  <td class="w-2/6 border border-black p-4 text-gray-500">
                    <div>
                      <span>Happy to recieve payment</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="w-2/6 border border-black p-4 font-bold">
                    Improvement Opportunities
                  </td>
                  <td class="w-1/6 border border-black p-4 text-gray-500">
                    {" "}
                    <div className="flex flex-col">
                      <span>
                        Create a dedicated payment app that caters for Atul's
                        need.
                      </span>
                      <span>Introduce biometric verification</span>
                    </div>
                  </td>
                  <td class="w-1/6 border border-black p-4 text-gray-500">
                    <div className="flex flex-col">
                      <span>Provide search filters</span>
                      <span>Structure the transactions</span>
                      <span>Optimize app for screen reader technologies</span>
                    </div>
                  </td>
                  <td class="w-1/6 border border-black p-4 text-gray-500">
                    <div className="flex flex-col">
                      <span>Provide a simple payment flow</span>
                    </div>
                  </td>
                  <td class="w-1/6 border border-black p-4 text-gray-500">
                    {" "}
                    <div className="flex flex-col">
                      <span>
                        Provide an option to review submitted information
                      </span>
                    </div>
                  </td>
                  <td class="w-1/6 border border-black p-4 text-gray-500">
                    {" "}
                    <div className="flex flex-col">
                      <span>Include a loyalty program</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-blue-600 py-20 items-center justify-center">
          Starting the design
        </h1>
        <div className="flex flex-row">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">
              Paper wireframes
            </h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              Users desired a design with personalised information and list of
              features and their functionalities.
            </p>
          </div>
          <div className="w-2/3">
            <img src={HandDrawn} alt="sec" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-row">
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold text-gray-500 pb-20">
              Digital wireframes
            </h2>
            <p className="text-justify text-lg leading-relaxed py-12">
              [Users desired an overview of their balances and financial tips]
            </p>
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <div className="flex flex-row w-80 mt-80 gap-4">
              <span className="text-gray-500">
                Users desired a quick access to the frequently used menus
              </span>
              <BsArrowRight size={60} className="text-yellow-500" />
            </div>
            <img src={Digital} alt="sec" className="w-80 h-100" />
            <div className="flex flex-row w-80 mb-80 gap-4">
              <BsArrowLeft size={60} className="text-yellow-500" />
              <span className="text-gray-500">
                Tips on savings and managing finances to empower users to take
                charge of their finances{" "}
              </span>
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
              The user access the menu from the homepage. A list of functions
              are displayed providing the user the option to select from the
              menu. The user selects the payment option and follow through the
              steps to pay.
            </p>
            <br />
            <p>Please find link below</p>
            <a
              href="https://www.figma.com/file/Rwk9ag9JbIW
            QryxEt2dayb/CalBank-App-Redesign?typ
            e=design&node-id=82%3A95&mode=desi
            gn&t=8DPupzc6j381ayoB-1"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.figma.com/file/Rwk9ag9JbIW
              QryxEt2dayb/CalBank-App-Redesign?typ
              e=design&node-id=82%3A95&mode=desi gn&t=8DPupzc6j381ayoB-1
            </a>
          </div>
          <div className="w-2/3 flex items-center justify-center">
            <img src={Prototype} alt="sec" />
          </div>
        </div>
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
                  Quick access to the menu
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  2
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Menu of functionalities
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  3
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  View charges and fees
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
                  Group similar functions together
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  2
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Reword texts for users to easily understand
                </span>
              </div>
              <div className="flex flex-row gap-4 bg-gray-100 px-8 py-4">
                <div className="flex bg-orange-400 w-10 h-10 items-center justify-center rounded-full text-white text-xl">
                  3
                </div>
                <span className="flex items-center text-gray-500 pr-20">
                  Incorporate high contrast colour in the design
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
              <div>
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-4">
                  <img src={Digital} alt="sec" className="pt-8 w-2/3" />
                  <BsArrowRight size={60} className="text-yellow-500 mt-80" />
                </div>
              </div>
              <div>
                <span className="text-custom-blue">After usability study</span>
                <img src={HeroImage2} alt="sec" className="pt-8 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-1/3 pr-8">
          <h2 className="text-4xl font-bold text-gray-500 pb-20">Mockups</h2>
          <p className="text-justify text-lg leading-relaxed py-12">
            [The text and headers had the same visual colours. Users did not
            know where to place emphasis. The text was grayed out. Also the cue
            to cancel an action did not meet the color contrast accessibility
            guidelines.]
          </p>
        </div>
        <div className="w-2/3">
          <div className="flex flex-row ml-8">
            <div>
              <span className="">Before usability study</span>
              <div className="flex flex-row gap-4">
                <img src={Before} alt="sec" className="pt-8 w-2/3" />
                <BsArrowRight size={60} className="text-yellow-500 mt-80" />
              </div>
            </div>
            <div>
              <span className="text-custom-blue">After usability study</span>
              <img src={After} alt="sec" className="pt-8 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-4xl font-bold text-gray-500 pb-4">Mockups</h2>
        <div className="flex flex-wrap">
          <img src={HeroImage1} alt="sec" className="w-1/4  p-2" />
          <img src={HeroImage3} alt="sec" className="w-1/4  p-2" />
          <img src={Form} alt="sec" className="w-1/4  p-2" />
          <img src={Confirm} alt="sec" className="w-1/4  p-2" />
        </div>
      </div>

      <div className="flex flex-row pt-20">
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
            <div>
              <span className="">Before usability study</span>
              <div className="flex flex-row gap-4">
                <img src={Digital} alt="sec" className="pt-8 w-2/3" />
                <BsArrowRight size={60} className="text-yellow-500 mt-80" />
              </div>
            </div>
            <div>
              <span className="text-custom-blue">After usability study</span>
              <img src={HeroImage2} alt="sec" className="pt-8 w-2/3" />
            </div>
          </div>
        </div>
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
              Continuous user testing and feedback to identify areas for
              improvement and refine
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-lg leading-relaxed">
              Introduce more financial resources beneficial to the users{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="bg-gray-500 w-10 h-10 text-white flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <p className="text-lg leading-relaxed">
              Conduct research on how successful the app is in reaching the goal
              to make secure payments.
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

export default FirstProjectPage;
