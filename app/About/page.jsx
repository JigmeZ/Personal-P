"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
} from "react-icons/si";

const achievemnt = {
  title: "My Achievements",
  Description:
    "A collection of my achievements, showcasing my dedication and accomplishments in various fields over the past two years.",
  achievemntList: [
    {
      title: "Vice President, Changjiji Youth Center (CYC)",
      date: "Jan 2023 – Dec 2024",
      description:
        "Led and coordinated community outreach and youth engagement activities impacting over 100 local youths. Organized educational events, mentored junior members, and strengthened leadership and team management skills.",
    },
    {
      title: "Personal Portfolio Website Project",
      date: "July 2024 – Dec 2024",
      description:
        "Created and maintained a responsive personal portfolio website using HTML, CSS, and JavaScript. Published on GitHub Pages, managed the full project lifecycle, and showcased personal branding and technical abilities.",
    },
    {
      title: "Team Lead – HoYoLAB Clone Group Project",
      date: "Feb 2025 – July 2025",
      description:
        "Led a team of 3 to recreate core HoYoLAB features using React and Vite. Implemented reusable components, managed state, established GitFlow, and deployed the project on Render.com.",
    },
  ],
};
const skills = {
  title: "My skills",
  Description:
    "The skills I’ve learned, ranging from technical expertise to soft skills, showcasing my growth and adaptability over this period",
  skilllist: [
    {
      icon: (
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHtml5 />
        </a>
      ),
      name: "Html",
    },
    {
      icon: (
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCss3Alt />
        </a>
      ),
      name: "CSS",
    },
    {
      icon: (
        <a
          href="https://www.w3schools.com/js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaJs />
        </a>
      ),
      name: "Javascript",
    },
    {
      icon: (
        <a
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaNodeJs />
        </a>
      ),
      name: "Node.js",
    },
    {
      icon: (
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact />
        </a>
      ),
      name: "React.js",
    },
    {
      icon: (
        <a
          href="https://www.geeksforgeeks.org/what-is-database/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDatabase />
        </a>
      ),
      name: "Database",
    },
    {
      icon: (
        <a
          href="https://www.figma.com/downloads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
        </a>
      ),
      name: "Figma",
    },
    {
      icon: (
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDocker />
        </a>
      ),
      name: "Docker",
    },
    {
      icon: (
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTailwindcss />
        </a>
      ),
      name: "Tailwind.css",
    },
    {
      icon: (
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiNextdotjs />
        </a>
      ),
      name: "Next.js",
    },
    {
      icon: (
        <a
          href="https://www.postman.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPostman />
        </a>
      ),
      name: "Postman",
    },
    {
      icon: (
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPrisma />
        </a>
      ),
      name: "Prisma",
    },
  ],
};
const about = {
  title: "About me",
  Description: (
    <>
      <p>
        Discover more about my background, passions, and the principles that
        guide me. Here, I share my journey, interests, aspirations, and the
        experiences that have shaped my identity.
      </p>
      <p className="para1">
        I am a committed, results-oriented, and enthusiastic individual with a
        solid academic foundation and broad professional experience. My genuine
        passion for software engineering, combined with a proven ability to
        learn and adapt swiftly, drives me to contribute my diverse skill set
        and collaborative approach to a dynamic software engineering program at
        the College of Science and Technology.
      </p>
      <p className="para2">
        From the moment I created my first &quot;Hello World&quot; program, I
        was captivated by the world of coding. As I explored software
        development further, I became fascinated by how code can provide elegant
        solutions to complex challenges. It feels like being a digital creator,
        crafting solutions from imagination.
      </p>
    </>
  ),
  info: [
    {
      filedName: "Name",
      filedValue: "Jigme Ngawang Chogyal",
    },
    {
      filedName: "Studies",
      filedValue: "Bachelor of Engineering in Software Engineering",
    },
    {
      filedName: "Collage",
      filedValue: "College of Science and Technology",
    },
    {
      filedName: "Address",
      filedValue: "Thimphu, Bhutan",
    },
    {
      filedName: "Phone Number",
      filedValue: "+97517992006",
    },
    {
      filedName: "Email",
      filedValue: "02240344.cst@rub.edu.bt",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-6 sm:py-10 md:py-12 xl:py-0 px-2 sm:px-4"
    >
      <div className="container mx-auto px-2 sm:px-4">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-8 md:gap-12 xl:gap-[60px]"
        >
          <TabsList className="flex flex-row xl:flex-col w-full max-w-full xl:max-w-[380px] mx-auto xl:mx-0 gap-2 xl:gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="achievemnt">Achievement</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-6 md:gap-[30px]">
                <div className="flex flex-col gap-4 md:gap-[30px] text-center xl:text-left">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {skills.title}
                  </h1>
                  <p className="max-w-full md:max-w-[600px] text-white/60 mx-auto xl:mx-0 text-base md:text-lg">
                    {skills.Description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[70px] md:h-[100px] rounded-xl flex justify-center items-center group">
                              <div className="text-3xl md:text-5xl group-hover:text-purple-900 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6 md:gap-[24px]">
                <h3 className="text-xl md:text-2xl font-bold text-purple-900">
                  {about.title}
                </h3>
                <div className="max-w-full md:max-w-[600px] mx-auto xl:mx-0 text-sm md:text-base text-white/60 font-normal leading-snug font-sans">
                  {about.Description}
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 max-w-full md:max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-2 border-l-4 border-purple-900 pl-3"
                      >
                        <span className="text-purple-900 font-semibold text-xs md:text-sm">
                          {item.filedName}
                        </span>
                        <span className="text-xs md:text-sm text-white/80">
                          {item.filedValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="achievemnt"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6 md:gap-[30px]">
                <h3 className="text-2xl md:text-4xl font-bold">
                  {achievemnt.title}
                </h3>
                <p className="max-w-full md:max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                  {achievemnt.Description}
                </p>
                <ul className="flex flex-col gap-4 md:gap-6 max-w-full md:max-w-[620px] mx-auto xl:mx-0">
                  {achievemnt.achievemntList.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center md:items-start gap-1 md:gap-2 border-l-4 border-purple-900 pl-3 md:pl-4"
                    >
                      <span className="text-base md:text-lg font-semibold text-purple-900">
                        {item.title}
                      </span>
                      <span className="text-xs md:text-sm text-white/60">
                        {item.date}
                      </span>
                      <span className="text-sm md:text-base">
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
