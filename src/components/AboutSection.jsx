import React from 'react';
import NavLink from './NavLink'; // Assuming you have NavLink and ThemeToggle
import ThemeToggle from './ThemeToggle';
// import { motion } from 'framer-motion'; // For more advanced animations if you want to use it

function AboutSection({ isDarkMode, useScrollAnimation }) {
  const [aboutRef, aboutIsVisible] = useScrollAnimation();

  const sectionBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const headingColorClass = isDarkMode ? 'text-indigo-400' : 'text-blue-600'; // More vibrant heading
  const textColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const highlightColorClass = isDarkMode ? 'text-indigo-300' : 'text-blue-500'; // For highlighted text

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`py-16 md:py-24 p-4 transition-opacity duration-700 ${aboutIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sectionBgClass}`}
    >
      <div className="container mx-auto text-center max-w-4xl"> {/* Increased max-width for better readability */}
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-8 ${headingColorClass} tracking-tight`}>
          A Bit About Me:
        </h2>
        <p className={`text-lg md:text-xl leading-relaxed mb-6 ${textColorClass}`}>
          Hello! I'm <strong className={highlightColorClass}>Akhand Pratap Singh</strong>, a highly enthusiastic and dedicated Frontend Developer from India, eager to transform innovative ideas into seamless and captivating web experiences. My journey into web development started with a genuine fascination for how digital interfaces come to life, quickly evolving into a passion for crafting user-centric designs and robust code.
        </p>
        <p className={`text-lg md:text-xl leading-relaxed mb-6 ${textColorClass}`}>
          As a fresher in the professional landscape, I bring a fresh perspective backed by a <strong className={highlightColorClass}>solid foundation</strong> in modern web technologies including **HTML5, CSS3, JavaScript (ES6+), and React.js**. My hands-on approach has led me to build several impactful projects, demonstrating my ability to create responsive, interactive, and visually appealing web applications from concept to deployment.
        </p>
        <p className={`text-lg md:text-xl leading-relaxed ${textColorClass}`}>
          I thrive on learning and continuously hone my skills, always exploring the latest trends and best practices in UI/UX and frontend performance. I'm proficient with essential developer tools like **Git, VS Code, and Chrome DevTools**, and I truly believe in the power of collaborative problem-solving. My goal is to join a dynamic team where I can contribute my evolving expertise, embrace new challenges, and grow into a top-tier developer, creating digital solutions that truly resonate with users.
        </p>

        {/* Optional: Add a call to action or a small decorative element */}
        {/* You could add a button here to "View My Projects" or "Download Resume" */}
      </div>
    </section>
  );
}

export default AboutSection;