import React from "react";
import HeroImage1 from "../assets/Mobile Banking/Mock 2 Homepage.png";
import HeroImage2 from "../assets/project2/Mock 3 Menu.png";
import HeroImage3 from "../assets/Mobile Banking/Mock 1 Settings.png";
import Persona from "../assets/project2/p.jpg";
import Digital from "../assets/project2/digitalframe.png";
import Prototype from "../assets/project2/prototype.png";
import HandDrawn from "../assets/project2/handdrawn.jpg";
import Before from "../assets/project2/before.png";
import After from "../assets/Mobile Banking/Mock 4 Form.png";
import Confirm from "../assets/Mobile Banking/Mock 6 Confirmation Screen.png";
import Form from "../assets/Mobile Banking/Mock 5 Completed Form.png";
import Highfi from "../assets/Mobile Banking/Hifi prototype.png";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const FirstProjectPage = () => {
  return (
    <div className="w-full px-4 py-4 lg:px-12">
      {/* Add padding-top to create space below the NavBar */}
      <h1 className="text-4xl font-bold text-text-color py-20">
        Redesigning A Payment Application for a seamless User Experience
      </h1>
      <div class="flex flex-col justify-center items-center">
        <div class="w-full pr-8 flex">
          <div>
            <h1 class="flex justify-center items-center pb-4 text-3xl text-text-color">
              Project Overview
            </h1>
            <div>
              <h2 class="pb-4 text-xl text-text-color font-bold">
                Banking App
              </h2>
              <p class="pb-4 text-justify text-lg leading-relaxed">
                It is a payment application that allows users to make secure
                transactions, manage finances, and track payment history. The
                main focus is to create a seamless, intuitive, and efficient
                payment flow while ensuring security and user satisfaction.
              </p>
              <span class="text-text-color">
                <b className="text-xl">Project duration:</b> November 2022 -
                June 2023.
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <div class="flex px-24 flex-col lg:flex-row">
            <img
              src={HeroImage1}
              alt="sec"
              class="pt-8 lg:w-screen lg:h-screen w-full h-full"
            />
            <img
              src={HeroImage2}
              alt="sec"
              class="pt-8 lg:w-screen lg:h-screen w-full h-full"
            />
            <img
              src={HeroImage3}
              alt="sec"
              class="pt-8 lg:w-screen lg:h-screen w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col pt-20">
        <div className="lg:w-1/2 w-full pr-8">
          <p className="text-text-color font-bold pt-4 text-xl">The problem:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed text-text-color">
            The existing payment application lacks a user-friendly interface and
            easy payment flow. Users face difficulties in navigating through the
            application. This leads to frustration, and potentially lost
            business opportunities.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-text-color font-bold pt-4 text-xl">The goal:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed text-text-color">
            The goal is to redesign the payment application to provide a
            seamless user experience that simplifies the payment process,
            improve navigation and enhance the user experience.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col pt-20">
        <div className="lg:w-1/2 pr-8">
          <p className="text-text-color font-bold pt-4 text-xl">My role:</p>
          <br />
          <p className="text-justify text-text-color text-lg leading-relaxed">
            UX designer and UX researcher,
          </p>
        </div>
        <div className="lg:w-1/2">
          <p className="text-text-color font-bold pt-4 text-xl">
            Responsibilities:
          </p>
          <br />
          <p className="text-justify text-text-color text-lg leading-relaxed px-2 lg:px-0">
            <ul className="list-disc text-text-color">
              <li>
                Designed the visual elements of the interface, including
                layouts, color schemes, typography, icons, and interactive
                elements.
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
                Iterated design ideas and incorporated feedback from
                stakeholders.
              </li>
              <li>
                Designed with accessibility in mind to make the interface usable
                for people with disabilities.
              </li>
              <li>
                Ensured compliance with accessibility standards and guidelines.
              </li>
              <li>
                Worked closely with cross-functional teams to ensure the design
                aligned with project goals.
              </li>
            </ul>
          </p>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color pb-12 pt-20 items-center justify-center">
          Understanding the User
        </h1>
        <div>
          <h2 className="text-3xl s text-text-color flex items-center justify-center pt-4">
            User Research: Summary
          </h2>
          <div className="">
            <div className="px-4">
              <p className="px-4 text-justify text-lg leading-relaxed text-text-color py-4 sm:px-12">
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
        <h1 className="text-3xl flex items-center justify-center  text-text-color pt-4 pb-16">
          User Research: Pain Points
        </h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col">
            <span className="font-bold w-10 h-10 text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-28 lg:ml-8">
              1
            </span>
            <p className="text-xl ml-28 lg:ml-8 leading-relaxed pb-4 text-text-color font-bold">
              Pain point
            </p>
            <p className="text-xl leading-relaxed text-text-color">
              Security concerns on robust encryption mesures, storage of payment
              data.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold w-10 h-10 text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-28 lg:ml-8">
              2
            </span>
            <p className="text-xl leading-relaxed ml-28 lg:ml-8 pb-4 text-text-color font-bold">
              Pain point
            </p>
            <p className="text-lg leading-relaxed text-text-color">
              Navigation challenges - Users desired a payment application with
              easy navigation , input payment information.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold w-10 h-10 text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-28 lg:ml-8">
              3
            </span>
            <p className="text-xl leading-relaxed pb-4 text-text-color ml-28 lg:ml-8 font-bold">
              Pain point
            </p>
            <p className="text-lg leading-relaxed text-text-color">
              Users value quick access to customer support within the app. They
              seek live chat options, in-app help guides, and easily accessible
              contact information.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold w-10 h-10 text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-28 lg:ml-8">
              4
            </span>
            <p className="text-xl text-justify text-md leading-relaxed pb-4 text-text-color font-bold ml-28 lg:ml-8">
              Pain point
            </p>
            <p className="text-justify text-md leading-relaxed text-text-color">
              Users highlighted the importance of an organized and detailed
              transaction history. They want to easily search, filter, and
              export their transaction data.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row pt-20">
        <div className="lg:w-1/3 w-full pr-8">
          <h1 className="text-2xl flex flex-row gap-4 text-text-color pt-4 pb-16">
            Persona: <span className="text-text-color font-bold">Atul</span>
          </h1>
          <span className="text-text-color font-bold text-xl">
            Problem statement:
          </span>
          <p className="text-justify text-md leading-relaxed pt-4 text-text-color">
            Atul is a busy seamstress who needs ways to simply and quickly send
            to her supplier because visiting her financial institution is time
            consuming for her. Atul is skeptical in using payment apps because
            she is concerned about the security of these apps.
          </p>
        </div>
        <div class="lg:w-2/3 w-full p-4">
          <div class="flex items-start flex-col">
            <div className="flex flex-col">
              <div class="mr-4 flex flex-col lg:flex-row items-center">
                <div className="p-1">
                  <img src={Persona} alt="sec" className=" lg:w-40 lg:h-30" />
                </div>
                <span class="italic mt-12 lg:ml-16 flex items-center text-text-color">
                  “Changing the narrative through fashion.”
                </span>
              </div>
              <table class="mt-4 lg:ml-16">
                <tr>
                  <td class="font-bold">Age:</td>
                  <td className="text-text-color">23</td>
                </tr>
                <tr>
                  <td class="font-bold">Education:</td>
                  <td className="text-text-color">College</td>
                </tr>
                <tr>
                  <td class="font-bold">Hometown:</td>
                  <td className="text-text-color">Accra, Gh.</td>
                </tr>
                <tr>
                  <td class="font-bold">Family:</td>
                  <td className="text-text-color">Single</td>
                </tr>
                <tr>
                  <td class="font-bold">Occupation:</td>
                  <td className="text-text-color">Tailor</td>
                </tr>
              </table>
            </div>

            <div className="flex lg:flex-row flex-col gap-4">
              <div>
                <span className="text-text-color font-bold">Goals:</span>
                <ul className="list-disc ml-8 text-text-color">
                  <li>Instantly send funds.</li>
                  <li>
                    To use an app which is secure and protects customer data.
                  </li>
                  <li>Use an app which is easy to navigate.</li>
                </ul>
              </div>
              <div>
                <span className="text-text-color font-bold">Frustrations</span>
                <ul className="list-disc ml-8 text-text-color">
                  <li>Restrictions on transfer/payment amounts.</li>
                  <li>Concerned about high charges/fees.</li>
                  <li>
                    Worried about weak security associated with payment apps.
                  </li>
                </ul>
              </div>
            </div>
            <div class="border border-text-color mx-auto my-8 lg:ml-4">
              <p className="p-4 text-text-color">
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
          <h1 className="flex items-center justify-center text-3xl text-text-color pb-8">
            User journey map
          </h1>
          <p className="text-text-color">
            The goal is to create a user-centered design, provide a seamless
            user experience. The thought process involves incorporating security
            measures such as multi-factor authentication and clear communication
            about privacy and data protection.
          </p>
        </div>
        <div className="flex p-8">
          <div className="flex flex-col pr-4">
            <div className="flex flex-col pb-4">
              <h1 className="text-text-color">
                Persona: <b>Atul</b>
              </h1>
              <span className="text-text-color">
                Goal: A fast and easy way to pay suppliers
              </span>
            </div>
            <div className="hidden lg:block">
              <table class="table-fixed border border-collapse border-black lg:w-full  ">
                <thead>
                  <tr>
                    <th class="w-1/6 border border-black p-4">Action</th>
                    <th class="w-1/6 border border-black p-4 text-text-color">
                      Select a payment app
                    </th>
                    <th class="w-1/6 border border-black p-4 text-text-color">
                      Browse the features
                    </th>
                    <th class="w-1/6 border border-black p-4 text-text-color">
                      Decide on a transaction
                    </th>
                    <th class="w-1/6 border border-black p-4 text-text-color">
                      Complete a transaction
                    </th>
                    <th class="w-1/6 border border-black p-4 text-text-color">
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
                      <div className=" flex flex-col text-text-color">
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
                      <div className=" flex flex-col text-text-color">
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
                      <div className=" flex flex-col text-text-color">
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
                      <div className=" flex flex-col text-text-color">
                        <span className="pb-2">Tasks</span>
                        <span className="mt-16">A. View Charges/fees</span>
                        <span className="mb-10">
                          B. Confirm payment details
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4">
                      <div className=" flex flex-col text-text-color">
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
                    <td class="w-2/6 border border-black p-4 text-text-color">
                      <div>
                        <span>Overwhelmed by number of payment options</span>
                        <span>Excited to find one they like</span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4 text-text-color">
                      <div>
                        <span>
                          Annoyed at large amount of texts with tiny font sizes
                          and limited visuals{" "}
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4 text-text-color">
                      <div>
                        <span>
                          Dissatisfied with scrolling to find appropriate
                          function
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4 text-text-color">
                      <div>
                        <span>
                          Fraustrated at having to complete many fields/forms
                          and provide lots of information
                        </span>
                      </div>
                    </td>
                    <td class="w-2/6 border border-black p-4 text-text-color">
                      <div>
                        <span>Happy to recieve payment</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-2/6 border border-black p-4 font-bold">
                      Improvement Opportunities
                    </td>
                    <td class="w-1/6 border border-black p-4 text-text-color">
                      {" "}
                      <div className="flex flex-col">
                        <span>
                          Create a dedicated payment app that caters for Atul's
                          need.
                        </span>
                        <span>Introduce biometric verification</span>
                      </div>
                    </td>
                    <td class="w-1/6 border border-black p-4 text-text-color">
                      <div className="flex flex-col">
                        <span>Provide search filters</span>
                        <span>Structure the transactions</span>
                        <span>Optimize app for screen reader technologies</span>
                      </div>
                    </td>
                    <td class="w-1/6 border border-black p-4 text-text-color">
                      <div className="flex flex-col">
                        <span>Provide a simple payment flow</span>
                      </div>
                    </td>
                    <td class="w-1/6 border border-black p-4 text-text-color">
                      {" "}
                      <div className="flex flex-col">
                        <span>
                          Provide an option to review submitted information
                        </span>
                      </div>
                    </td>
                    <td class="w-1/6 border border-black p-4 text-text-color">
                      {" "}
                      <div className="flex flex-col">
                        <span>Include a loyalty program</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color py-20 items-center justify-center">
          Starting the design
        </h1>
        <div className="flex flex-col">
          <div className=" pr-8">
            <h2 className="text-3xl flex items-center justify-center text-text-color pb-2">
              Paper wireframes
            </h2>
            <p className="text-justify text-lg leading-relaxed text-text-color py-12">
              Users desired a design with personalised information and list of
              features and their functionalities.
            </p>
          </div>
          <div className="lg:ml-32 pr-4 lg:pr-0">
            <img src={HandDrawn} alt="sec" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-col">
          <div className="pr-8">
            <h2 className="flex items-center justify-center text-3xl text-text-color pb-2">
              Digital wireframes
            </h2>
            <p className="text-justify text-text-color text-lg leading-relaxed pt-12 pb-8">
              Users desired an overview of their balances and financial tips.
            </p>
          </div>
          <div className=" flex items-center justify-center">
            <div className="text-text-color flex-row text-center sm:text-left hidden sm:flex w-80 mt-80">
              <span className="flex items-center justify-center text-text-color">
                Users desired a quick access to the frequently used menus.
              </span>
              <BsArrowRight
                size={80}
                className="text-text-color inline-block mt-2"
              />
            </div>
            <img
              src={Digital}
              alt="sec"
              className="lg:w-80 lg:h-100 border-text-color"
            />
            <div className="text-text-color flex-row text-center sm:text-left hidden sm:flex w-80 mb-80">
              <BsArrowLeft
                size={100}
                className="text-text-color inline-block mb-2"
              />
              <span className="text-text-color flex items-center justify-center">
                Tips on savings and managing finances to empower users to take
                charge of their finances.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-col">
          <div className=" pr-8">
            <h2 className="text-3xl text-text-color flex items-center justify-center pb-8">
              Low-fidelity prototype
            </h2>
            <p className="text-text-color text-justify text-lg leading-relaxed py-4">
              The user access the menu from the homepage. A list of functions
              are displayed providing the user the option to select from the
              menu. The user selects the payment option and follow through the
              steps to pay.
            </p>

            <div className="flex items-center justify-center">
              <img src={Prototype} alt="sec" />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-12">
        <div className="pr-8 pb-8">
          <h2 className="text-3xl text-text-color flex items-center justify-center ">
            Usability Study : Findings
          </h2>
          <p className="text-justify text-lg leading-relaxed py-12 text-text-color">
            Write a short introduction to the usability studies you conducted
            and your findings.
          </p>
        </div>
        <div className=" flex items-center justify-center pt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <h2 className="text-xl pb-4 font-bold text-text-color">
                Round 1 findings
              </h2>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex  w-10 h-10 items-center ml-20 lg:ml-0 justify-center rounded-full text-text-color font-bold text-2xl">
                  1
                </div>
                <span className="flex items-center text-text-color pr-20">
                  Quick access to the menu.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex  w-10 h-10 ml-20 lg:ml-0 items-center justify-center rounded-full text-text-color font-bold text-2xl">
                  2
                </div>
                <span className="flex items-center text-text-color pr-20">
                  Menu of functionalities.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex  w-10 h-10 ml-20 lg:ml-0 items-center justify-center rounded-full text-text-color font-bold text-2xl">
                  3
                </div>
                <span className="flex items-center text-text-color pr-20">
                  View charges and fees.
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-xl text-text-color pb-4 font-bold">
                Round 2 findings
              </h2>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex ml-20 lg:ml-0 w-10 h-10 items-center justify-center rounded-full text-text-color font-bold text-2xl">
                  1
                </div>
                <span className="flex items-center text-text-color pr-20">
                  Group similar functions together.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex ml-20 lg:ml-0 w-10 h-10 items-center justify-center rounded-full text-text-color font-bold text-2xl">
                  2
                </div>
                <span className="flex items-center text-text-color pr-20">
                  Reword texts for users to easily understand.
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4  px-8 py-4">
                <div className="flex ml-20 lg:ml-0 w-10 h-10 items-center justify-center rounded-full text-text-color font-bold text-2xl">
                  3
                </div>
                <span className="flex items-center text-text-color pr-20">
                  Incorporate high contrast colour in the design.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color py-20 items-center justify-center">
          Refining the design
        </h1>
        <div className="flex flex-col pb-20">
          <div className="pr-8">
            <h2 className="text-3xl  text-text-color pb-8 items-center justify-center flex">
              Mockups
            </h2>
            <p className="text-justify text-text-color text-lg leading-relaxed pt-4 pb-8">
              Users perceived the groupings of the services to perform similar
              functions. This was considered and the services were grouped into
              two categories to simplify the complexity of grouping all the
              services together.
            </p>
          </div>
          <div className="mr-4 lg:ml-24">
            <div className="flex flex-col lg:flex-row ml-8">
              <div>
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-4">
                  <img
                    src={Digital}
                    alt="sec"
                    className="pt-8 w-3/3 lg:w-2/3"
                  />
                  <BsArrowRight size={60} className="text-text-color mt-80" />
                </div>
              </div>
              <div>
                <span className="text-text-color flex pl-4 mt-4 lg:mt-0">
                  After usability study
                </span>
                <img
                  src={HeroImage2}
                  alt="sec"
                  className="pt-8 lg:pt-16 lg:w-2/3 w-3/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="pr-8">
          <h2 className="text-3xl text-text-color pb-8 items-center justify-center flex">
            Mockups
          </h2>
          <p className="text-text-color text-justify text-lg leading-relaxed py-12">
            The text and headers had the same visual colours. Users did not know
            where to place emphasis. The text was grayed out. Also the cue to
            cancel an action did not meet the color contrast accessibility
            guidelines.
          </p>
        </div>
        <div className="mr-4 lg:ml-24">
          <div className="flex flex-col lg:flex-row ml-8">
            <div>
              <span className="">Before usability study</span>
              <div className="flex flex-row gap-4">
                <img src={Before} alt="sec" className="pt-8 w-3/3 lg:w-2/3" />
                <BsArrowRight size={60} className="text-text-color mt-80" />
              </div>
            </div>
            <div>
              <span className="text-text-color flex pl-4 mt-4 lg:mt-0">
                After usability study
              </span>
              <img
                src={After}
                alt="sec"
                className="pt-8 lg:pt-16 lg:w-2/3 w-3/3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-3xl text-text-color pb-8 flex items-center justify-center">
          Mockups
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-wrap">
            <img src={HeroImage1} alt="sec" className="w-1/2  p-2" />
            <img src={HeroImage3} alt="sec" className="w-1/2  p-2" />
          </div>
          <div className="flex flex-wrap ">
            <img src={Form} alt="sec" className="w-1/2  p-2" />
            <img src={Confirm} alt="sec" className="w-1/2  p-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-col">
          <div className=" pr-8">
            <h2 className="text-3xl text-text-color flex items-center justify-center pb-8">
              High-fidelity prototype
            </h2>
            <p className="text-text-color text-justify text-lg leading-relaxed py-4">
              The high fidelity prototype followed the same user flow as the low
              fidelity prototype including design changes made after the
              usability studies. View the link below.
            </p>

            <div className="flex items-center justify-center">
              <img src={Highfi} alt="sec" className="mb-8 h-36" />
            </div>
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-12">
        <h1 className="text-3xl flex items-center justify-center text-text-color pt-4 pb-16 ml-8 lg:ml-0">
          Accessibility Considerations{" "}
        </h1>
        <div className="flex flex-col lg:flex-row ml-4 lg:ml-20 gap-16">
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              1
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Contrast and Color Color contrast was applied between the texts
              and background elements.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              2
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Adjustable font size. Users can adjust the font size.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              3
            </span>
            <p className="text-text-color text-lg leading-relaxed">
              Touch Target size Interactive elements have adequate size so users
              with motor impairments can easily tap.
            </p>
          </div>
        </div>
      </div>

      <div className="flex pt-20 flex-col">
        <h1 className="flex text-4xl font-bold text-text-color py-20 items-center justify-center">
          Going forward
        </h1>
        <span className="text-3xl text-text-color flex items-center justify-center pb-20">
          Takeaways
        </span>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 pr-8">
            <br />
            <p className="text-text-color text-justify text-lg leading-relaxed">
              <b className="text-xl">Impact:</b>Users shared that the app design
              was clean, intuitive and user friendly. One quote from a peer was
              “navigating this app is so easy i do not need to figure out how to
              navigate as a first time user.
            </p>
          </div>
          <div className="lg:w-1/2">
            <br />
            <p className="text-text-color text-justify text-lg leading-relaxed">
              <b className="text-xl">What I learned:</b>I learned that even
              though the problem i was trying to solve was big one, going
              through the entire design process and aligning with specific user
              needs helped me come up with innovative solutions that were both
              feasible and useful.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl text-text-color flex items-center justify-center pt-4 pb-16">
          Next steps{" "}
        </h1>
        <div className="flex flex-col lg:flex-row ml-12 lg:ml-20 gap-16">
          <div className="flex flex-col">
            <span className=" w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              1
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Continuous user testing and feedback to identify areas for
              improvement and refine.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              2
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Introduce more financial resources beneficial to the users.{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-24 lg:ml-16">
              3
            </span>
            <p className="text-text-color text-lg leading-relaxed">
              Conduct research on how successful the app is in reaching the goal
              to make secure payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProjectPage;
