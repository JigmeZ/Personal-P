"use client";
import React from "react";
import CountUp from "react-countup";

const statsData = [
  {
    num: 357,
    text: "Code Commited",
  },
  {
    num: 12,
    text: "Software Used",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[88vm] mx-auto xl:max-w-none justify-center xl:justify-end">
          {statsData.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-end"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-4xl font-bold text-purple-950 "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
