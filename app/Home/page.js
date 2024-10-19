"use client";
import React, { useState } from "react";
// import form from "./Formdata";
import User from "../Context";
import ParticlesComponent from "../components/particles";
import Submit from "../components/Submit";

const Question = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
}) => (
  <div className="flex flex-col mb-8">
    <label className=" text-black text-lg sm:text-2xl lg:text-[30px] font-bold mb-4">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-4 border bg-white text-black border-gray-300 rounded-lg text-lg w-full placeholder:text-white"
    />
  </div>
);

export default function Home() {
  const [formdata, setdata] = useState({
    name: "",
    contact: "",
    email: "",
    github: "",
    resume: "",
    techstack: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const questions = [
    {
      label: "Enter Your Name:",
      name: "name",
      type: "text",
      placeholder: "Ex: Sonali Lipsa Patra",
    },

    {
      label: "Enter Your Contact:",
      name: "contact",
      type: "number",
      placeholder: "Ex: 1234567890",
    },
    {
      label: "Enter Your Email-Id:",
      name: "email",
      type: "email",
      placeholder: "sona@gmail.com",
    },
    {
      label: "Enter Your GitHub Link:",
      name: "github",
      type: "link",
      placeholder: "https://github.com/profile",
    },
    {
      label: "Enter Your Resume Link:",
      name: "resume",
      type: "link",
      placeholder: "https://resume.com",
    },
    {
      label: "Enter Your Tech Stack:",
      name: "techstack",
      type: "text",
      placeholder: "Ex: React, Node.js, Javascript, CPP",
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    const currentQuestionName = questions[currentStep].name;
    const currentValue = formdata[currentQuestionName].trim();

    if (formdata[currentQuestionName].trim() === "") {
      alert("This field is required");
      return;
    }

    if (currentQuestionName === "contact" && currentValue.length !== 10) {
      alert("Invalid number! Please enter a valid contact number.");
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form data:", formdata);
      //   form.name = formdata.name;
      //   form.contact = formdata.contact;
      //   form.email = formdata.email;
      //   form.github = formdata.github;
      //   form.resume = formdata.resume;
      //   form.techstack = formdata.techstack;
      // alert("Form submitted!");
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <User.Provider value={formdata}>
      <div className="w-full h-screen flex items-center justify-center flex-col text-center p-6 ">
      <ParticlesComponent  />
        <div className="w-full md:w-3/4 lg:w-2/4 h-auto transition-transform duration-300 transform hover:scale-10 hover:shadow-lg bg-black border-[0.2rem] flex flex-col justify-center items-center p-10 bg-gradient-to-r from-purple-500 to-pink-500 text-black">
          <form onSubmit={handleNext} className="w-full">
            <Question
              label={questions[currentStep].label}
              name={questions[currentStep].name}
              value={formdata[questions[currentStep].name]}
              onChange={handleChange}
              type={questions[currentStep].type}
            />
            <div className="mt-6 flex items-center space-x-8 justify-center">
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="bg-gradient-to-r border-black border-4 from-blue-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-black font-bold py-3 px-6 mt-5 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  PREVIOUS
                </button>
              )}
              {currentStep >= questions.length - 1 ? (
                <Submit />
              ) : (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-200 border-black border-4 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 text-black font-bold py-3 px-6 mt-5 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  NEXT
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </User.Provider>
  );
}
