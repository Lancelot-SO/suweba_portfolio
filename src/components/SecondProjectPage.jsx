import React from "react";
import hero from "../assets/Project/Project overview.png";
import persona1 from "../assets/Project/pexel2.jpg";
import persona2 from "../assets/Project/pexel6.jpg";
import analysis from "../assets/Project/Competitve Audit.png";
import ideation from "../assets/Project/Ideation.jpeg";
import wireframe from "../assets/Project/DigitalWireFrame.png";
import Prototype from "../assets/Project/Low fi Prototype.png";
import before from "../assets/Project/Before Usability Tutorial .png";
import success from "../assets/Learning Platform/success.png";
import tutorial from "../assets/Learning Platform/Tutorial.png";
import Discover from "../assets/Learning Platform/Discover.png";
import Discover1 from "../assets/Project/Before Discover.png";
import hifi from "../assets/Project/Hifi prototype.png";
import mobile from "../assets/Project/mobile_screen.png";
import tablet from "../assets/Project/Responsive Tablet .png";
import desktop from "../assets/Project/Responsiv -Desk_Laptop.png";
import Sidemap from "../assets/Project/Sitemap - Learning App.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import enroll from "../assets/Learning Platform/Enroll.png";

const SecondProjectPage = () => {
  return (
    <div className="w-full py-4 px-12">
      <h1 className="text-4xl font-bold text-text-color py-20">
        Design A Way To Help Tutor Teenagers In Financial Skills{" "}
      </h1>
      <h1 className="flex items-center text-text-color justify-center pb-4 text-3xl">
        Project Overview
      </h1>

      <div className=" flex flex-col  justify-center items-center">
        <div className="pr-8 flex">
          <div>
            <div>
              <h2 className="pb-4 text-xl text-text-color font-bold">
                The product:
              </h2>
              <p className="pb-4 text-justify text-lg leading-relaxed text-text-color">
                The product is a design solution aimed to empower teenagers with
                essential financial knowledge and skills that will help them
                make informed and responsible financial decisions.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-text-color  pb-4">
                    <b className="text-xl">Project duration:</b> June - July
                    2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex m-0 p-0">
            <img src={hero} alt="sec" className="pt-8 w-3/3" />
          </div>
        </div>
      </div>

      <div className="flex pt-20">
        <div className="w-1/2 pr-8">
          <p className="text-xl text-text-color font-bold pt-4">The problem:</p>
          <br />
          <p className="text-text-color text-justify text-lg leading-relaxed">
            The existing learning application do not have a solution
            specifically designed to teach teenagers financial literacy. The
            existing applications have modules and subjects across many fields
            and no tailor made content to encourage teenagers learn and
            understand financial skills.
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-text-color font-bold pt-4 text-xl">The goal:</p>
          <br />
          <p className="text-text-color text-justify text-lg leading-relaxed">
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
          <p className="text-text-color font-bold pt-4 text-xl">My role:</p>
          <br />
          <p className="text-justify text-lg leading-relaxed text-text-color">
            UX designer and UX researcher,
          </p>
        </div>
        <div className="w-1/2">
          <p className="text-text-color font-bold pt-4 text-xl">
            Responsibilities:
          </p>
          <br />
          <p className="text-justify text-lg leading-relaxed">
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
        <h1 className="flex text-4xl font-bold text-text-color py-12 items-center justify-center">
          Understanding the User
        </h1>
        <div>
          <h2 className="text-3xl flex items-center justify-center pt-4 pb-4">
            User Research: Summary
          </h2>
          <div className="">
            <div className="">
              <p className="text-text-color text-justify text-lg leading-relaxed  py-12 px-12">
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
          <h1 className="text-2xl flex flex-row gap-4 text-text-color pt-4 pb-16">
            Persona: <span className="text-text-color font-bold">Amawen</span>
          </h1>
          <span className="text-text-color font-bold text-xl">
            Problem statement:
          </span>
          <p className="text-justify text-md leading-relaxed pt-4 text-text-color">
            Amawen is a high school student who needs to learn financial skills
            to manage his allowances because the available programs makes it
            difficult for him to learn.
          </p>
        </div>
        <div class="w-2/3 p-4 flex flex-row">
          <div className="w-1/3 flex flex-col">
            <img src={persona1} alt="ps" className="w-80 h-60  p-2" />
            <span className="mb-8 ml-20 font-bold text-text-color">Amawen</span>
            <table class="ml-8 w-1/2 table-auto">
              <tr>
                <td class="font-bold pr-4">Age:</td>
                <td className="text-text-color">23</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Education:</td>
                <td className="text-text-color">College</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Hometown:</td>
                <td className="text-text-color">Accra, Gh.</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Family:</td>
                <td className="text-text-color">Single</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Occupation:</td>
                <td className="text-text-color">Tailor</td>
              </tr>
            </table>
          </div>
          <div className="w-2/3 flex flex-col">
            <span class="text-xl italic  ml-16 flex items-center text-text-color">
              “Changing the narrative through fashion”
            </span>
            <div className="flex flex-row gap-4 mt-20 ml-12">
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
            <div class="border border-text-color mx-auto my-8 ml-4">
              <p className="p-4 text-text-color">
                Amawen is a 17 year old high school student. They live with
                their parents and two siblings. Their parents have a busy
                schedule and barely make time to teach financial literacy.
                Amawen wants to understand how to manage finances and gain
                financial independence as they plan for college.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-20">
        <div className="w-1/3 pr-8">
          <h1 className="text-2xl flex flex-row gap-4 text-text-color pt-4 pb-16">
            Persona: <span className="text-text-color font-bold">Apuingle</span>
          </h1>
          <span className="text-text-color font-bold text-xl">
            Problem statement:
          </span>
          <p className="text-justify text-md leading-relaxed pt-4 text-text-color">
            Apuingle is high school graduate with dyslexia who needs to have
            personal tuition on financial skills because her current learning
            environment is not personalized.
          </p>
        </div>
        <div class="w-2/3 p-4 flex flex-row">
          <div className="w-1/3 flex flex-col">
            <img src={persona2} alt="ps" className="w-80 h-60 p-2" />
            <span className="mb-8 ml-20 font-bold text-text-color">
              Apuingle
            </span>
            <table class="ml-8 w-1/2 table-auto">
              <tr>
                <td class="font-bold pr-4">Age:</td>
                <td className="text-text-color">16</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Education:</td>
                <td className="text-text-color">High School</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Hometown:</td>
                <td className="text-text-color">Dubai</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Family:</td>
                <td className="text-text-color">Single</td>
              </tr>
              <tr>
                <td class="font-bold pr-4">Occupation:</td>
                <td className="text-text-color">Student</td>
              </tr>
            </table>
          </div>
          <div className="w-2/3 flex flex-col">
            <span class="text-xl italic  ml-16 flex items-center text-text-color">
              “Changing the narrative through fashion.”
            </span>
            <div className="flex flex-row gap-4 mt-12 ml-12">
              <div>
                <span className="text-text-color font-bold">Goals:</span>
                <ul className="list-disc ml-8 text-text-color">
                  <li>Learn how to manage money effectively.</li>
                  <li>Plan and save for the future.</li>
                  <li>To become financial independent.</li>
                  <li>To be a successful entrepreneur.</li>
                </ul>
              </div>
              <div>
                <span className="text-text-color font-bold">Frustrations</span>
                <ul className="list-disc ml-8 text-text-color">
                  <li>
                    Frustrated that they are challenged in reading materials.
                  </li>
                  <li>Difficulty in understanding financial jargon.</li>
                </ul>
              </div>
            </div>
            <div class="border border-text-color mx-auto my-8 ml-4">
              <p className="p-4 text-text-color">
                Apuingle is a 16 year old high school graduate with dyslexia.
                They recently migrated to Gh and lives with their parents and 4
                siblings. Their parents are supportive and understanding of the
                learning difference. Apuingle has basic financial knowledge and
                is determined to learn. Apuingle wants to learn in a supportive
                environment where are learning difference is accommodate. They
                are concerned that they may not get a tailor made content and
                not enough support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="pr-8">
          <h1 className="text-text-color text-3xl flex flex-row gap-4 items-center justify-center pt-16 pb-4">
            Competitive Audit
          </h1>
          <p className="text-text-color text-justify text-md leading-relaxed pt-4 pb-4">
            Users wanted wanted a dedicated learning platform targeted at
            teenagers and tailored to teach financial skills. Users wanted the
            course to be taught in simple manner for them to understand. Users
            also wanted to enroll on courses taught by instructors who could
            simplify the content.
          </p>
        </div>
        <div class="p-4">
          <img src={analysis} alt="ps" className="w-full" />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="pr-8">
          <h1 className="text-text-color text-3xl flex flex-row gap-4 items-center justify-center pt-16 pb-4">
            Ideation
          </h1>
          <p className="text-text-color text-justify text-md leading-relaxed pt-4 pb-4">
            This shows the basic structure and highlights the intended use of
            the application. All subjects are accessed freely with no cost. The
            application shows the subjects under financial skills a learner can
            enroll on. The second image shows the progress of each module taken
            and the 3rd screen provides an overview of the course instructors.
            Instructor reviews will motivate users to enroll.
          </p>
        </div>
        <div class="p-4 flex items-center justify-center">
          <img src={ideation} alt="ps" />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color  items-center justify-center">
          Starting the design
        </h1>
        <div className="flex flex-col pt-20">
          <div className="flex flex-col">
            <div className="pr-8">
              <h2 className="text-3xl flex items-center justify-center text-text-color">
                Digital wireframes
              </h2>
              <p className="text-justify text-lg text-text-color leading-relaxed pt-6 pb-8">
                Users desired an overview of the subjects and the instructors
                teaching the subjects.
              </p>
            </div>
            <div className=" flex items-center justify-center">
              <div className="flex flex-row w-80 mb-80">
                <span className="text-text-color">
                  Tips on the various finance subjects a learner can enroll on{" "}
                </span>
                <BsArrowRight size={80} className="text-text-color" />
              </div>
              <img
                src={wireframe}
                alt="sec"
                className="w-80 h-100 border border-text-color"
              />
              <div className="flex flex-row w-80 mt-40 ">
                <BsArrowLeft size={160} className="text-text-color" />
                <span className="text-text-color">
                  Information on the instructors to provide learners with a
                  information to make a decision before enrolling on a course{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-col">
          <div className=" pr-8">
            <h2 className="text-3xl text-text-color pb-8 flex items-center justify-center">
              Low-fidelity Prototype
            </h2>
            <p className="text-text-color text-justify text-lg leading-relaxed pb-6">
              The user access the homepage. The user is guided on the selection
              of subjects based on the user’s interest. A list of subjects are
              displayed providing the user the option to select from. The user
              selects the preferred course and follows through the steps to
              enroll. Please find link below.
            </p>
            <br />
            <div className="flex items-center justify-center">
              <img src={Prototype} alt="sec" className="w-3/3 h-2/3" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl flex items-center justify-center text-text-color pt-4 pb-4">
          Usability Study: Findings
        </h1>
        <span className="flex mb-12 text-text-color">
          Insert a one to two sentence introduction to the findings shared
          below.
        </span>

        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className="text-text-color w-16 h-16 font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>
            <span className="text-xl text-text-color font-bold flex ml-16 mb-8">
              Finding
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Users wanted interactive learning that would incorporate games,
              quizzes and discussions to reinforce learning.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-text-color w-16 h-16 font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>
            <span className="text-xl text-text-color font-bold flex ml-16 mb-8">
              Finding
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Users wanted a tracking system that would enable them see their
              progress and achievements.{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-text-color w-16 h-16 font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <span className="text-xl text-text-color font-bold flex ml-16 mb-8">
              Finding
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Users wanted clear language and jargon free content.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color py-20 items-center justify-center">
          Refining the design
        </h1>
        <div className="flex flex-col">
          <div className="pr-8">
            <h2 className="text-3xl text-text-color pb-8 items-center justify-center flex">
              Mockups
            </h2>
            <p className="text-text-color text-justify text-lg leading-relaxed py-12">
              The text and headers had the same visual colours. Users did not
              know where to place emphasis. The text was grayed out. Also the
              cue to cancel an action did not meet the color contrast
              accessibility guidelines.
            </p>
          </div>
          <div className="ml-24">
            <div className="flex flex-row ml-8">
              <div className=" w-1/2 ">
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-16">
                  <img src={before} alt="sec" className="pt-8 w-2/3" />
                  <BsArrowRight size={60} className="text-text-color mt-80" />
                </div>
              </div>
              <div className=" w-1/2 flex flex-col">
                <span className="text-text-color pl-4 pt-2">
                  After usability study
                </span>
                <img src={enroll} alt="sec" className="pt-16 w-2/3" />
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
              The text and headers had the same visual colours. Users did not
              know where to place emphasis. The text was grayed out. Also the
              cue to cancel an action did not meet the color contrast
              accessibility guidelines.
            </p>
          </div>
          <div className="ml-24">
            <div className="flex flex-row ml-8">
              <div className=" w-1/2">
                <span className="">Before usability study</span>
                <div className="flex flex-row gap-16">
                  <img src={Discover1} alt="sec" className="pt-8 w-2/3" />
                  <BsArrowRight size={60} className="text-text-color mt-80" />
                </div>
              </div>
              <div className=" w-1/2 flex flex-col">
                <span className="text-text-color pl-4 pt-2">
                  After usability study
                </span>
                <img src={Discover} alt="sec" className="pt-16 w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h2 className="text-3xl text-text-color pb-8 flex items-center justify-center">
          Mockups
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-wrap">
            <img src={Discover} alt="sec" className="w-1/2  p-2" />
            <img src={enroll} alt="sec" className="w-1/2  p-2" />
          </div>
          <div className="flex flex-wrap">
            <img src={success} alt="sec" className="w-1/2  p-2" />
            <img src={tutorial} alt="sec" className="w-1/2  p-2" />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <div className="flex flex-col">
          <div className=" pr-8">
            <h2 className="text-3xl flex items-center justify-center text-text-color pb-8">
              High-fidelity Prototype
            </h2>
            <p className="text-text-color text-justify text-lg leading-relaxed py-4">
              The high fidelity prototype followed the same user flow as the low
              fidelity prototype including design changes made after the
              usability studies.
            </p>
            <br />
            <div className=" flex items-center justify-center">
              <img src={hifi} alt="sec" className="mb-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl flex items-center justify-center text-text-color pt-4 pb-16">
          Accessibility Considerations
        </h1>

        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className=" w-16 h-16 font-bold text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Clear labels for interactive elements that can be read by screen
              readers.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-16 h-16 font-bold text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Adjustable font size. Users can adjust the font size .{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-16 h-16 font-bold text-text-color flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Initial focus of the home screen on personalized recommendations
              help define the primary task or action for the user.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color py-8 items-center justify-center">
          Responsive Design
        </h1>
        <div className="flex flex-col">
          <div className="pr-8">
            <h1 className="text-3xl flex items-center justify-center flex-row gap-4 font-bold text-text-color pt-4 pb-8">
              Sitemap
            </h1>
            <p className="text-text-color text-justify text-md leading-relaxed pt-4">
              The sitemap was designed with user feedback in mind. The goal was
              to create a clear and organized information architecture to
              improve user navigation and a positive learning experience for
              users.
            </p>
          </div>
          <div class="p-4">
            <img src={Sidemap} alt="ps" className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-row pt-20">
          <div>
            <span className="ml-8 text-text-color">Mobile App</span>
            <img src={mobile} alt="mob" />
          </div>
          <div>
            <span className="ml-32 text-text-color">Tablet</span>
            <img src={tablet} alt="mob" />
          </div>
        </div>
        <div>
          <span className="ml-8 flex items-center justify-center mt-4 text-text-color">
            Web App
          </span>
          <img src={desktop} alt="mob" />
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="flex text-4xl font-bold text-text-color py-12 items-center justify-center">
          Refining the design
        </h1>
        <h2 className="text-3xl flex items-center justify-center text-text-color">
          Takeaways
        </h2>

        <div className="flex pt-12">
          <div className="w-1/2 pr-8">
            <p className="text-text-color font-bold pt-4">Impact:</p>
            <br />
            <p className="text-text-color  text-justify text-lg leading-relaxed">
              Users shared that the app could motivate users to learn and apply
              financial skills. One quote from a peer was “ “learning financial
              skills via the app is like having a personal finance tutor on the
              go helping me make smart financial decisions.
            </p>
          </div>
          <div className="w-1/2">
            <p className="text-text-color font-bold pt-4">What I learned:</p>
            <br />
            <p className="text-text-color  text-justify text-lg leading-relaxed">
              I learned that even though the problem i was trying to solve was
              big one, going through the entire design process and aligning with
              specific user needs helped me come up with innovative solutions
              that were both feasible and useful.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-20">
        <h1 className="text-3xl flex items-center justify-center text-text-color pt-4 pb-12">
          Next steps{" "}
        </h1>
        <div className="flex flex-row ml-20 gap-16">
          <div className="flex flex-col">
            <span className=" w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              1
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Continuous user testing and feedback to identify areas for
              improvement and refine.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              2
            </span>

            <p className="text-text-color text-lg leading-relaxed">
              Add more financial educational resources and complimentary topics.{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="w-10 h-10 text-text-color font-bold flex items-center justify-center rounded-full mb-4 text-2xl ml-16">
              3
            </span>
            <p className="text-text-color text-lg leading-relaxed">
              Conduct research on how successful the app is in reaching the goal
              to learn financial skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondProjectPage;
