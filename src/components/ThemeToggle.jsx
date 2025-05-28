import React from 'react';

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.325 3.325l-.707.707M6.379 6.379l-.707-.707m12.728 0l-.707.707M6.379 17.621l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> // Sun icon
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg> // Moon icon
      )}
    </button>
  );
}

export default ThemeToggle;