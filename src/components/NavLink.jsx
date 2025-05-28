import React from 'react';

function NavLink({ href, children, isDarkMode }) {
  return (
    <a
      href={href}
      className={`font-medium text-lg transition-colors duration-200 transform hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-700 hover:text-blue-600'}`}
    >
      {children}
    </a>
  );
}

export default NavLink;