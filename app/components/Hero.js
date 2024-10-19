import Image from "next/image";
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 bg-black w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-blue-300 text-5xl font-bold py-2">
                Hello, Im Sonali, 
            </h4>
            <h2 className="text-center text-aqua text-4xl py-5 font-bold">
            Welcome to My Portfolio Website !!
            </h2>
          </div>
          <p className="text-center text-red-200 text-pretty text-bold text-2xl">
            
            <button className="mx-3 w-30 flex-wrap font-bold text-blue-950 h-12 rounded-lg px-3 bg-red-300">Resume</button>
            <button className="mx-3 w-30 flex-wrap font-bold text-blue-950 h-12 rounded-lg px-3 bg-red-300">GitHub</button>
          </p>
        </div>
        {/* <div className="flex-1">
          <Image src="/Images/port.png"
               alt="Hello.svg"
               width={400}
               height={300}
               className="w-full h-full bg-cover"/>
        </div> */}
      </section>
    );
  }
