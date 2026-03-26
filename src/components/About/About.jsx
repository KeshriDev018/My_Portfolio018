import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profile2.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const scrollToWork = () => {
    const section = document.getElementById("work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home">
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-0"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-x-12 lg:gap-x-20">
          {/* Left Side */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
              Ankit Keshri
            </h2>
            {/* Skills Heading with Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  "Fullstack Developer",
                  "Backend Engineer",
                  "Problem Solver",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>
            {/* About Me Paragraph */}
            <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
              I'm Ankit Keshri — a Full Stack Developer building scalable,
              production-grade web applications with the MERN stack. I
              specialize in designing REST APIs, secure authentication, and
              role-based architectures. My expertise spans backend systems,
              database design, and modern practices like MVC, microservices, and
              CI/CD. Currently expanding my knowledge in system design and cloud
              architecture while shipping real-world projects. My goal: create
              functional, scalable, and impactful solutions.
            </p>
            {/* Resume Button */}
            <div className="flex flex-col md:flex-row items-center gap-4 mt-5">
              <a
                href="https://drive.google.com/file/d/1xeL_A0CxidzB6bPGISeGSYvNoiG7wy1B/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 whitespace-nowrap flex items-center justify-center h-12"
                style={{
                  background: "linear-gradient(90deg, #8245ec, #a855f7)",
                  boxShadow:
                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                Download Resume
              </a>

              <button
                onClick={scrollToWork}
                className="text-white py-3 px-6 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 whitespace-nowrap flex items-center justify-center h-12"
                style={{
                  background: "linear-gradient(90deg, #a855f7, #8245ec)",
                  boxShadow:
                    "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
                }}
              >
                View My Work
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Ankit Keshri"
                className="w-full h-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
