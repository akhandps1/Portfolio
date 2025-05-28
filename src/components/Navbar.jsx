import React from 'react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav className={`fixed w-full z-40 bg-opacity-90 backdrop-blur-md shadow-xl p-4 md:p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white border-b border-gray-200'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className={`text-2xl font-bold transition-colors duration-200 ${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-blue-600 hover:text-blue-700'}`}>
          Akhand Pratap Singh
        </a>
        <div className="flex items-center space-x-4 md:space-x-8">
          <NavLink href="#home" isDarkMode={isDarkMode}>Home</NavLink>
          <NavLink href="#about" isDarkMode={isDarkMode}>About</NavLink>
          <NavLink href="#skills" isDarkMode={isDarkMode}>Skills</NavLink>
          <NavLink href="#projects" isDarkMode={isDarkMode}>Projects</NavLink>
          <NavLink href="#contact" isDarkMode={isDarkMode}>Contact</NavLink>
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;