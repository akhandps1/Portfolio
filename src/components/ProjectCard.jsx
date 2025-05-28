import React from 'react';

function ProjectCard({ project, isVisible, delay, onClick, isDarkMode }) {
  const cardBgClass = isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const titleColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';
  const descriptionColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const hoverBorderClass = isDarkMode ? 'hover:border-indigo-500' : 'hover:border-blue-500';
  const buttonClass = isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white';

  return (
    <div
      className={`relative p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-103 flex flex-col border cursor-pointer ${cardBgClass}
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 ${hoverBorderClass}`}></div>
      <h3 className={`text-2xl font-bold mb-3 ${titleColorClass}`}>{project.title}</h3>
      <p className={`mb-4 flex-grow ${descriptionColorClass}`}>{project.description}</p>
      <button
        className={`inline-block px-6 py-2 rounded-lg text-md font-semibold shadow-md transition-colors duration-300 self-start transform hover:scale-105 ${buttonClass}`}
        onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
        View Details
      </button>
    </div>
  );
}

export default ProjectCard;