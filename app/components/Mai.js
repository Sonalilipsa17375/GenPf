"use client";
import React from "react";
import Image from "next/image";
import ParticlesComponent from "./particles";
// import { motion } from "framer-motion";
import GetStarted from "./GetStarted";

const Main= () => {
  const imageCycle = {
    animate: {
      y: [0, -500],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  const imageCyclerev = {
    animate: {
      x: [0, 300],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center py-12 justify-center lg:flex-row sm:flex-col md:flex-col text-left p-6 space-y-6">
      {/* Background Particles */}
      <ParticlesComponent  />

      {/* Main Content Section */}
      <div className="w-full lg:w-1/2 sm:w-full md:w-full transition-transform duration-300 transform hover:scale-10 hover:shadow-lg text-white font-bold py-3 px-12 h-full flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red leading-tight">
          Create Your First Professional <br /> Portfolio Website
        </h1>
        <h4 className="text-xl sm:text-2xl md:text-3xl text-yellow-100 font-semibold">
          Showcase your work with an online portfolio
        </h4>
        <GetStarted />
      </div>

      {/* Image Gallery Section */}
      {/* <div className="hidden lg:flex w-full lg:w-2/3 flex-wrap justify-center items-center space-x-5">
        <motion.div className="relative" {...imageCyclerev}>
          <Image
            src="/Images/design.jpg"
            alt="Portfolio Collage Main"
            width={300}
            height={150}
            className="rounded-lg shadow-lg"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.6)',
            }}
          />
        </motion.div>

        <motion.div className="flex flex-col space-y-10" {...imageCycle}>
          <Image
            src="/Images/design-2.jpg"
            alt="Portfolio Collage 1"
            width={200}
            height={250}
            className="rounded-lg shadow-md"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.6)',
            }}
          />
          <Image
            src="/Images/design-4.jpg"
            alt="Portfolio Collage 2"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.6)',
            }}
          />
          <Image
            src="/Images/design-5.jpg"
            alt="Portfolio Collage 3"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.6)',
            }}
          />
          <Image
            src="/Images/design-6.jpg"
            alt="Portfolio Collage 4"
            width={200}
            height={150}
            className="rounded-lg shadow-md"
            style={{
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.6)',
            }}
          />
        </motion.div>
      </div> */}
    </div>
  );
};

export default Main;
