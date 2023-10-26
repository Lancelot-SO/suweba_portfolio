import project2 from "./assets/8.jpeg";
import project1 from "./assets/4.jpeg";
import project4 from "./assets/10.jpeg";
import homepage from "./assets/img/Homepage.png";
import rectangle from "./assets/img/Rectangle.png";
import rectangle1 from "./assets/img/Rectangle-1.png";
import rectangle2 from "./assets/img/Rectangle-2.png";
import rectangle3 from "./assets/img/Rectangle-3.png";
import rectangle4 from "./assets/img/Rectangle-4.png";
import rectangle5 from "./assets/img/Rectangle-5.png";
import homepage2 from "./assets/img/Homepage2.png";
import menu from "./assets/img/Menu.png";
import profile from "./assets/img/Profile2.png";
import transfer from "./assets/img/Transfer.png";
import transfer1 from "./assets/img/Transfer1.png";
import notification from "./assets/img/Notification.png";
// upload all the images where and change them in the projectData array
// by changing the project2, project1, project4 to thename of the image i upload

export const projectsData = [
  {
    id: "1",
    src: homepage,
    src1: rectangle,
    src2: rectangle1,
    src3: rectangle2,
    src4: rectangle3,
    src5: rectangle4,
    src6: rectangle5,
    href: "/secondprojectpage",
    title: "Teen Finance Tutor",
    description: "Description of Project 1.",
  },
  {
    id: "2",
    src: homepage2,
    src1: profile,
    src2: menu,
    src3: transfer,
    src4: transfer1,
    src5: notification,
    src6: transfer,
    href: "/firstprojectpage",
    title: "Mobile Banking App",
    description: "Description of Project 2.",
  },
  {
    id: "3",
    src: rectangle2,
    src2: project2,
    src3: project4,
    src4: project1,
    href: "/thirdprojectpage",
    title: "Project 3",
    description: "Description of Project 3.",
  },
];
