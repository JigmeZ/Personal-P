"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse xl:flex-row justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-none xl:order-1 w-full xl:w-auto">
            {/* Loader Animation from Uiverse.io */}
            <div className="flex justify-center items-center mb-6">
              <div className="loader" />
              <style jsx>{`
                .loader {
                  width: 45px;
                  height: 40px;
                  background: linear-gradient(
                      #0000 calc(1 * 100% / 6),
                      #fff 0 calc(3 * 100% / 6),
                      #0000 0
                    ),
                    linear-gradient(
                      #0000 calc(2 * 100% / 6),
                      #fff 0 calc(4 * 100% / 6),
                      #0000 0
                    ),
                    linear-gradient(
                      #0000 calc(3 * 100% / 6),
                      #fff 0 calc(5 * 100% / 6),
                      #0000 0
                    );
                  background-size: 10px 400%;
                  background-repeat: no-repeat;
                  animation: matrix 1s infinite linear;
                }
                @keyframes matrix {
                  0% {
                    background-position: 0% 100%, 50% 100%, 100% 100%;
                  }
                  100% {
                    background-position: 0% 0%, 50% 0%, 100% 0%;
                  }
                }
              `}</style>
            </div>

            <h1 className="h1">HELLO THERE</h1>
            <h2 className="h2">
              <span className="text-purple-900">
                &lt;I am Jigme Ngawang Chogyal/&gt;
              </span>
            </h2>
            <p className="max-w-[500px] mb-9 text-center xl:text-left">
              I am a{" "}
              <span className="text-purple-900">
                Software Engineering student
              </span>
              {" that welcomes challenges and architects solutions."}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 mb-6 xl:mb-0 w-full xl:w-auto">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  className="text-sm py-2 px-4 bg-opacity-50 bg-black-500 border border-purple-950 
                 hover:border-purple-950 active:bg-purple-950 transition-all duration-300"
                >
                  <span>View CV</span>
                  <FiDownload className="text-xl ml-2" />
                </Button>
              </a>

              <Social
                containerStyles="flex gap-6 mt-4 sm:mt-0"
                iconStyles="w-7 h-7 border border-purple-900 rounded-full flex
                justify-center items-center text-white text-base hover:bg-green
                hover:text-primary hover:transition-all duration-500"
              />

              {/* Hide stats on mobile, show inline for sm+ */}
              <div className="hidden sm:block">
                <Stats className="mt-4 sm:mt-0" />
              </div>
              {/* Show stats below on mobile */}
              <div className="block sm:hidden w-full mt-4">
                <Stats />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center xl:justify-end -mt-10 sm:-mt-20 w-full xl:w-auto">
            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] xl:absolute xl:left-32 xl:top-44 xl:w-[260px] xl:h-[260px] 2xl:left-40 2xl:top-56 2xl:w-[320px] 2xl:h-[320px] flex items-center justify-center z-10">
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
