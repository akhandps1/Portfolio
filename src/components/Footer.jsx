import React from 'react';

function Footer({ isDarkMode }) {
  const footerBgClass = isDarkMode ? 'bg-gray-900 text-gray-400 border-t border-gray-800' : 'bg-gray-200 text-gray-600 border-t border-gray-300';
  const linkColorClass = isDarkMode ? 'text-indigo-400' : 'text-blue-600';

  return (
    <footer className={`py-8 text-center text-sm transition-colors duration-300 ${footerBgClass}`}>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Akhand Pratap Singh. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </div>
      <p className="mt-1">
        <a href="https://github.com/akhandpratapsingh" target="_blank" rel="noopener noreferrer" className={`${linkColorClass} hover:underline`}>
          Designed & Developed by Akhand Pratap Singh
        </a>
      </p>
    </footer>
  );
}

export default Footer;