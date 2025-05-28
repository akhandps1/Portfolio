import React from 'react';

function ContactSection({ isDarkMode, useScrollAnimation }) {
  const [contactRef, contactIsVisible] = useScrollAnimation();

  const sectionBgClass = isDarkMode ? 'bg-gray-950' : 'bg-gray-100';
  const headingColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';
  const textColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const primaryButtonClass = isDarkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-blue-600 text-white hover:bg-blue-700';
  const secondaryButtonClass = isDarkMode ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' : 'bg-gray-300 text-gray-800 hover:bg-gray-400';

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`py-16 md:py-24 p-4 transition-opacity duration-700 ${contactIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sectionBgClass}`}
    >
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${headingColorClass}`}>Get in Touch</h2>
        <p className={`text-lg mb-8 ${textColorClass}`}>
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="mailto:akhand.pratap.singh@example.com"
            className={`w-full md:w-auto px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-colors duration-300 transform hover:scale-105 ${primaryButtonClass}`}
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/akhandpratapsingh" // Replace with actual LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full md:w-auto px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-colors duration-300 transform hover:scale-105 ${secondaryButtonClass}`}
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/akhandpratapsingh" // Replace with actual GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full md:w-auto px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-colors duration-300 transform hover:scale-105 ${secondaryButtonClass}`}
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;