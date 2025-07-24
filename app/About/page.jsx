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
      description: (
        <>
          Successfully cloned the Bhutan Times website using Figma for learning
          purposes.{" "}
          <a
            href="https://www.figma.com/design/xmPUbM1779mRA9AWAum88C/group-3-PA?node-id=0-1&t=7ubZxThJDM1Ci7vN-1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-400 hover:text-purple-600"
          >
            Figma Project
          </a>
        </>
      ),
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
      <p>
        Technology has always intrigued me because of its power to transform
        ideas into reality. Whether it&#39;s developing a web application that
        streamlines daily tasks or designing algorithms that solve complex
        challenges, I find fulfillment in building solutions that matter.
      </p>
      <p>
        Beyond my academic journey, I actively engage in projects and activities
        that expand my perspective. Working on collaborative coding assignments,
        participating in hackathons, and exploring personal side projects have
        strengthened my problem-solving skills and taught me the value of
        teamwork, resilience, and continuous learning.
      </p>
      <p>
        Looking forward, I aspire to become a software engineer who not only
        writes efficient code but also understands user needs deeply to create
        impactful digital experiences. I am determined to keep learning,
        refining my craft, and contributing to meaningful innovations that
        empower communities and shape a better future.
      </p>
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
        {/* Loader Start */}
        <div className="loader">
          <div className="wrapper">
            <div className="catContainer">
              {/* Cat from the back, tail wiggling */}
              <svg className="tail" viewBox="0 0 30 80">
                <path
                  d="M15 10 Q10 40 20 70"
                  stroke="#fff"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="catbody" viewBox="0 0 80 80">
                {/* Back of the cat: body, legs, ears */}
                {/* Body */}
                <ellipse cx="40" cy="50" rx="28" ry="24" fill="#fff" />
                {/* Left leg */}
                <ellipse cx="28" cy="72" rx="7" ry="6" fill="#fff" />
                {/* Right leg */}
                <ellipse cx="52" cy="72" rx="7" ry="6" fill="#fff" />
                {/* Left ear */}
                <polygon points="22,32 32,18 36,38" fill="#fff" />
                {/* Right ear */}
                <polygon points="58,18 68,32 44,38" fill="#fff" />
                {/* Butt spot */}
                <ellipse cx="40" cy="62" rx="3" ry="2" fill="#e0e0e0" />
              </svg>
              <div className="text">
                <span className="zzz">z</span>
                <span className="bigzzz">Z</span>
                <span className="zzz">z</span>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          /* From Uiverse.io by vinodjangid07 */
          .loader {
            width: fit-content;
            height: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .wrapper {
            width: fit-content;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .catContainer {
            width: 120px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: relative;
          }
          .catbody {
            width: 100px;
            height: 80px;
            z-index: 2;
            position: relative;
          }
          .tail {
            position: absolute;
            width: 30px;
            height: 56px;
            top: 57px;
            left: 34px;
            z-index: 1;
            animation: tail-wiggle 0.7s ease-in-out infinite alternate;
            transform-origin: 15px 10px;
          }
          @keyframes tail-wiggle {
            0% {
              transform: rotateZ(30deg);
            }
            100% {
              transform: rotateZ(-30deg);
            }
          }
          .wall {
            width: 300px;
          }
          .text {
            display: flex;
            flex-direction: column;
            width: 50px;
            position: absolute;
            margin: 0px 0px 100px 120px;
          }
          .zzz {
            color: #fff;
            font-weight: 700;
            font-size: 15px;
            animation: zzz 2s linear infinite;
          }
          .bigzzz {
            color: #fff;
            font-weight: 700;
            font-size: 25px;
            margin-left: 10px;
            animation: zzz 2.3s linear infinite;
          }
          @keyframes zzz {
            0% {
              color: transparent;
            }
            50% {
              color: #fff;
            }
            100% {
              color: transparent;
            }
          }
        `}</style>
        {/* Loader End */}

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
                  {/* Changed font for paragraphs */}
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
