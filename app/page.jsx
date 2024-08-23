import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/social";
import Photo from "@/components/Photo";


const Home = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between xl:pt-8 xl:pb-24">
          <div className="xl:text-left">
            <h1 className="h1">Hi There!</h1>
            <h2 className="h2">
              <span className="text-green-500">&lt;I am Tashi Penjor/&gt;</span>
            </h2>
            <p className="max-w-[500px] mb-9">
              I am a{" "}
              <span className="text-green-500">Software Engineering</span>{" "}
              student that welcomes
              <span> challenges and architect solutions.</span>
            </p>
            <div className="flex items-center gap-2 mb-8 xl:mb-0">
              <Button
                className="text-sm py-2 px-4 bg-opacity-50 bg-black-500 border border-green-500 
                hover:border-green-500 active:bg-green-500 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl ml-2" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-7 h-7 border border-green-500 rounded-full flex
                justify-center items-center text-white text-base hover:bg-green
                hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-[-100px] order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
