"use client";
import React, { useState, useContext } from "react";
import User from "../Context";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Link from "next/link";
import Hero from "../components/Hero";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../components/Navbar";

export default function Resume() {
  const [loader, setloader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector("#pdf");

    setloader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("landscape", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setloader(false);
      doc.save("resume.pdf");
    });
  };

  const formdata = useContext(User);
  return (
    <div id="pdf" className="h-full bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <div className="flex justify-center items-center p-3">
        <button
          className="w-34 px-3 font-bold text-red-500 h-8 rounded-md bg-white text-black"
          onClick={downloadPDF}
          disabled={!(loader === false)}
        >
          {loader ? <span>Downloading</span> : <span>Download CV</span>}
        </button>
      </div>
    </div>
  );
}
