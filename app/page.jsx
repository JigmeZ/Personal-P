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
          <div className="text-center xl:text-left flex flex-col items-center xl:items-start order-none xl:order-1">
            <h1 className="h1">Hi There!</h1>
            <h2 className="h2">
              <span className="text-green-500">&lt;I am Tashi Penjor/&gt;</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-center xl:text-left">
              I am a{" "}
              <span className="text-green-500">Software Engineering</span>{" "}
              student that welcomes
              <span> challenges and architect solutions.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-8 xl:mb-0">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  className="text-sm py-2 px-4 bg-opacity-50 bg-black-500 border border-green-500 
                hover:border-green-500 active:bg-green-500 transition-all duration-300"
                >
                  <span>View CV</span>
                  <FiDownload className="text-xl ml-2" />
                </Button>
              </a>
              <Social
                containerStyles="flex gap-6 mt-4 sm:mt-0"
                iconStyles="w-7 h-7 border border-green-500 rounded-full flex
                justify-center items-center text-white text-base hover:bg-green
                hover:text-primary hover:transition-all duration-500"
              />
              <Stats className="mt-4 sm:mt-0" />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 flex justify-center xl:justify-end -mt-20">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;