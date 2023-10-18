import React from "react";
import HeroImage from "../assets/img/Homepage.png";
import Persona from "../assets/hero.jpg";
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
        <div className="flex flex-row pt-20">
          <div className="w-1/3 pr-8">
            <h1 className="text-2xl flex flex-row gap-4 font-bold text-gray-500 pt-4 pb-16">
              Persona: <span className="text-black">Atul</span>
            </h1>
            <span className="text-red-500">Problem statement:</span>
            <p className="text-justify text-md leading-relaxed pt-4 text-gray-500">
              Atul is a busy seamstress who needs ways to simply and quickly
              send to her supplier because visiting her financial institution is
              time consuming for her. Atul is skeptical in using payment apps
              because she is concerned about the security of these apps.
            </p>
          </div>
          <div class="w-2/3 p-4">
            <div class="flex items-start flex-col">
              <div className="flex flex-col">
                <div class="mr-4 flex items-center">
                  <div className="border-4 border-yellow-500 p-2">
                    <img src={Persona} alt="sec" className=" w-40 h-30" />
                  </div>
                  <span class="mt-12 ml-16 flex items-center text-gray-500">
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
                  Atul is a 23 year old tailor who has dyslexia and lives with
                  her mum. She sews ready made garments and buys items from
                  different sellers to accessorize. Atul constantly needs to
                  quickly make payments to secure her desired items. Due to her
                  busy schedule, she is concerned with going to her financial
                  institution to make payments. She is also worried about high
                  fees and charges associated with funds transfer and worried
                  using a payment app may result in security and data breach and
                  a limit on the payment amounts.
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
              user experience. The thought process involves incorporating
              security measures such as multi-factor authentication and clear
              communication about privacy and data protection.
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
                          B. Download the application via the stores/access
                          online
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
                        <span className="mb-10">
                          B. Confirm payment details
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4">
                      <div className=" flex flex-col text-gray-500">
                        <span className="pb-2">Tasks</span>
                        <span className="mt-20">A. View payment status</span>
                        <span>
                          B. Notification of the status of the payment
                        </span>
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
                          Dissatisfied with scrolling to find appropriate
                          function
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4 text-gray-500">
                      <div>
                        <span>
                          Fraustrated at having to complete many fields/forms
                          and provide lots of information
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
      </div>
    </div>
  );
};

export default FirstProjectPage;
