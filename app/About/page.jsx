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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// ---------------- Data ----------------

const achievement = {
  title: "My Achievements",
  Description:
    "A collection of my achievements, showcasing my dedication and accomplishments in various fields over the past two years.",
  achievementList: [
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
        "Led a team to recreate core HoYoLAB features using React and Vite. Implemented reusable components, managed state, established GitFlow, and deployed the project on Render.com.",
    },
    {
      title: "Successfully Connected SQL with Fitness Web App",
      date: "Feb 2025 – July 2025",
      description:
        "Integrated SQL database connectivity with a web application called JPP Fitness, enabling dynamic data storage and retrieval for user and workout information.",
    },
    {
      title: "Dzongkha Spell Checker Project",
      date: "July 2024 – Dec 2024",
      description:
        "Developed a Dzongkha spell checker using Python and a Dzongkha dictionary, enabling users to detect and correct spelling errors in Dzongkha text.",
    },
    {
      title: "Cloned Bhutan Times Using Figma (Learning Purpose)",
      date: "2024",
      description:
        "Successfully cloned the Bhutan Times website using Figma for learning purposes.",
      link: "https://www.figma.com/design/xmPUbM1779mRA9AWAum88C/group-3-PA?node-id=0-1&t=7ubZxThJDM1Ci7vN-1",
    },
  ],
};

const skills = {
  title: "My skills",
  Description:
    "The skills I’ve learned, ranging from technical expertise to soft skills, showcasing my growth and adaptability over this period",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "Html",
      link: "https://www.w3schools.com/html/",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      link: "https://www.w3schools.com/css/",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
      link: "https://www.w3schools.com/js/",
    },
    { icon: <FaNodeJs />, name: "Node.js", link: "https://nodejs.org/en" },
    { icon: <FaReact />, name: "React.js", link: "https://react.dev/" },
    {
      icon: <FaDatabase />,
      name: "Database",
      link: "https://www.geeksforgeeks.org/what-is-database/",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      link: "https://www.figma.com/downloads/",
    },
    { icon: <FaDocker />, name: "Docker", link: "https://www.docker.com/" },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
      link: "https://tailwindcss.com/",
    },
    { icon: <SiNextdotjs />, name: "Next.js", link: "https://nextjs.org/" },
    { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/" },
    { icon: <SiPrisma />, name: "Prisma", link: "https://www.prisma.io/" },
  ],
};

const about = {
  title: "About me",
  Description: (
    <>
      <p className="text-center text-white/80 text-sm mb-4">
        I am a passionate developer who loves building beautiful interfaces,
        robust backends, and exploring the world of cyber security. I enjoy
        learning new technologies and solving real-world problems through code.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
        {/* Frontend Developer Card */}
        <div className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-purple-600/90 to-purple-900/90 rounded-xl p-4 shadow-md border border-purple-700 mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1 shadow">
              <span role="img" aria-label="frontend" className="text-xl">
                👾
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1 tracking-wide">
              Frontend Dev
            </h3>
            <p className="text-purple-100 text-center text-xs mb-2">
              Clean code, user-focused design, responsive & accessible UI.
            </p>
            <div className="mb-1">
              <span className="font-semibold text-yellow-200 text-xs">
                Design:
              </span>
              <span className="text-yellow-100 text-xs"> UX, UI, Web</span>
            </div>
            <div>
              <span className="font-semibold text-yellow-200 text-xs">
                Tools:
              </span>
              <span className="text-purple-100 text-xs">
                {" "}
                Figma, React, Next.js
              </span>
            </div>
          </div>
        </div>
        {/* Backend Developer Card */}
        <div className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-blue-600/90 to-blue-900/90 rounded-xl p-4 shadow-md border border-blue-700 mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1 shadow">
              <span role="img" aria-label="backend" className="text-xl">
                💻
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1 tracking-wide">
              Backend Dev
            </h3>
            <p className="text-blue-100 text-center text-xs mb-2">
              APIs, databases, secure & scalable server logic.
            </p>
            <div className="mb-1">
              <span className="font-semibold text-yellow-200 text-xs">
                Lang:
              </span>
              <span className="text-yellow-100 text-xs"> Node.js, Python</span>
            </div>
            <div>
              <span className="font-semibold text-yellow-200 text-xs">
                Tools:
              </span>
              <span className="text-blue-100 text-xs">
                {" "}
                PostgreSQL, Postman
              </span>
            </div>
          </div>
        </div>
        {/* Cyber Security Card */}
        <div className="flex-1 min-w-[220px] max-w-xs bg-gradient-to-br from-green-600/90 to-green-900/90 rounded-xl p-4 shadow-md border border-green-700 mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1 shadow">
              <span role="img" aria-label="cybersecurity" className="text-xl">
                🛡️
              </span>
            </div>
            <h3 className="text-base font-bold text-white mb-1 tracking-wide">
              Cyber Security
            </h3>
            <p className="text-green-100 text-center text-xs mb-2">
              Ethical hacking, CTFs, digital safety awareness.
            </p>
            <div className="mb-1">
              <span className="font-semibold text-yellow-200 text-xs">
                Focus:
              </span>
              <span className="text-yellow-100 text-xs">
                {" "}
                Network, Vuln. Assess.
              </span>
            </div>
            <div>
              <span className="font-semibold text-yellow-200 text-xs">
                Tools:
              </span>
              <span className="text-green-100 text-xs"> Kali, Nmap, THM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
  info: [
    { filedName: "Name", filedValue: "Jigme Ngawang Chogyal" },
    {
      filedName: "Studies",
      filedValue: "Bachelor of Engineering in Software Engineering",
    },
    { filedName: "Collage", filedValue: "College of Science and Technology" },
    { filedName: "Address", filedValue: "Thimphu, Bhutan" },
    { filedName: "Phone Number", filedValue: "+97517992006" },
    { filedName: "Email", filedValue: "02240344.cst@rub.edu.bt" },
  ],
};

// ---------------- Component ----------------

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
            <TabsTrigger value="achievement">Achievement</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Skills Tab */}
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
                  {skills.skilllist.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[70px] md:h-[100px] rounded-xl flex justify-center items-center group">
                            <div className="text-3xl md:text-5xl group-hover:text-purple-900 transition-all duration-300">
                              <a
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {skill.icon}
                              </a>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6 md:gap-[30px]">
                <h3 className="text-2xl md:text-4xl font-bold text-purple-900">
                  {about.title}
                </h3>
                <div className="max-w-full md:max-w-[600px] mx-auto xl:mx-0 text-sm md:text-base text-white/60 font-normal leading-relaxed space-y-4">
                  <div className="space-y-4 font-serif">
                    {about.Description}
                  </div>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4 max-w-full md:max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-2 border-l-4 border-purple-900 pl-3 md:pl-4"
                    >
                      <span className="text-purple-900 font-semibold text-sm md:text-base">
                        {item.filedName}
                      </span>
                      <span className="text-sm md:text-base text-white/80">
                        {item.filedValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Achievement Tab */}
            <TabsContent
              value="achievement"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6 md:gap-[30px]">
                <h3 className="text-2xl md:text-4xl font-bold">
                  {achievement.title}
                </h3>
                <p className="max-w-full md:max-w-[600px] text-white/60 mx-auto xl:mx-0 text-sm md:text-base">
                  {achievement.Description}
                </p>
                <ul className="flex flex-col gap-4 md:gap-6 max-w-full md:max-w-[620px] mx-auto xl:mx-0">
                  {achievement.achievementList.map((item, index) => (
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
                      <span className="text-sm md:text-base text-white/80">
                        {item.description}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 underline text-purple-400 hover:text-purple-600"
                          >
                            [View Project]
                          </a>
                        )}
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
