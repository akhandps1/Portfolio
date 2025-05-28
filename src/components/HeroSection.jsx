import React from 'react';
import TypewriterEffect from './TypewriterEffect';

function HeroSection({ isDarkMode, useScrollAnimation }) {
  const [homeRef, homeIsVisible] = useScrollAnimation(0.5);

  const heroBgClass = isDarkMode ? 'bg-gradient-to-br from-gray-950 to-zinc-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100';
  const imgBorderClass = isDarkMode ? 'border-4 border-indigo-600' : 'border-4 border-blue-400';
  const titleColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';
  const accentColorClass = isDarkMode ? 'text-indigo-400' : 'text-blue-600';
  const buttonClass = isDarkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-blue-600 text-white hover:bg-blue-700';
  const typewriterColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <section
      id="home"
      ref={homeRef}
      className={`relative h-screen flex items-center justify-center p-4 transition-opacity duration-1000 ${homeIsVisible ? 'opacity-100' : 'opacity-0'} ${heroBgClass}`}
    >
      <div className="text-center max-w-4xl mx-auto">
        <img
          src={isDarkMode ? "https://placehold.co/200x200/4F46E5/FFFFFF?text=APS" : "https://placehold.co/200x200/A78BFA/FFFFFF?text=APS"}
          alt="Akhand Pratap Singh"
          className={`rounded-full w-48 h-48 mx-auto mb-6 object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out ${homeIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${imgBorderClass}`}
          onError={(e) => { e.target.onerror = null; e.target.src=isDarkMode ? "https://placehold.co/200x200/4F46E5/FFFFFF?text=APS" : "https://placehold.co/200x200/A78BFA/FFFFFF?text=APS"; }}
        />
        <h1
          className={`text-5xl md:text-7xl font-extrabold leading-tight mb-4 transition-all duration-700 delay-200 ${homeIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${titleColorClass}`}>
          Hi, I'm <span className={`${accentColorClass}`}>Akhand Pratap Singh</span>
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 transition-all duration-700 delay-400 ${homeIsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <TypewriterEffect text="An aspiring Frontend Developer eager to build and learn." delay={50} textColorClass={typewriterColorClass} />
        </p>
        <a
          href="#projects"
          className={`inline-block px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${homeIsVisible ? 'translate-y-0 opacity-100 delay-600' : 'translate-y-10 opacity-0'} ${buttonClass}`}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default HeroSection;