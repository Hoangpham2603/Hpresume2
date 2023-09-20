import { useState } from "react";
import Image from "next/image";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";

import { SiAdobephotoshop, SiTypescript, SiTailwindcss } from "react-icons/si";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// import CV from "../../public/CV.pdf";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//CV
//counter
import CountUp from "react-countup";
import PDFViewer from "../../components/PDFViewer";

const pdfUrl = "./CV.pdf";
//  data
const aboutData = [
  {
    title: "skills",
    key: "skills",
    info: [
      {
        title: "Web Development",
        key: "web-development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiTypescript key="typescript" />,
          <SiTailwindcss key="tailwindcss" />,
        ],
      },
      {
        title: "UI/UX Design",
        key: "ui-ux-design",
        icons: [<SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: "experience",
    key: "experience",
    info: [
      {
        title: "Be my first",
        key: "be-my-first",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "My CV",
    key: "cv",
    info: [
      {
        title: "Hire me?",
        key: "hire-me",
        view: "View CV",
        link: pdfUrl,
        download: "Download CV",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [viewCV, setViewCV] = useState(false);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full w-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent/80">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            {" "}
            Highly motivated, self-starting developer seeking to launch a career
            building web applications and services. Familiar with development
            and deployment process for many web-based technologies.
          </motion.p>

          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0"
          >
            <div className="flex flex-1 xl:gap-x-6 justify-center items-center">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent/80 mb-2">
                  +<CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-center md:text-center">
                  Motivation
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent/80 mb-2">
                  + <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-center md:text-center sm:text-center">
                  Strength
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent/80 mb-2">
                  + <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-center md:text-center">
                  Willing to suffer
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-10"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-5 items-center">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                  className={` ${
                    index === itemIndex &&
                    "text-accent/80 after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  key={item.key}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 xl:items-center xl:items-start mt-5">
            {aboutData[index].info.map((item) => {
              return (
                <div
                  key={item.key}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center"
                >
                  {/* Title */}
                  <div className=" py-3 font-light mb-2 md:mb-0 text-center ">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  {item.title === "Hire me?" && (
                    <a
                      onClick={() => {
                        window.open(item.link, "_blank");
                      }}
                      className="bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent-dark transition duration-300"
                    >
                      View CV
                    </a>
                  )}

                  <div className="flex gap-x-4">
                    {/* icon */}
                    {item.icons?.map((icon) => {
                      return (
                        <div key={icon.key} className="text-2xl">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
