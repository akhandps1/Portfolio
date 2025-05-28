import React from 'react';

function SkillCard({ icon, name, isVisible, delay, isDarkMode }) {
  const cardBgClass = isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const iconColorClass = isDarkMode ? 'text-indigo-400' : 'text-blue-500';
  const textColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';
  const hoverBorderClass = isDarkMode ? 'hover:border-indigo-500' : 'hover:border-blue-500';

  return (
    <div
      className={`relative p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 flex flex-col items-center justify-center border ${cardBgClass}
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 ${hoverBorderClass}`}></div>
      <svg
        className={`w-14 h-14 mb-4 transform hover:scale-110 transition-transform duration-200 ${iconColorClass}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon} />
      </svg>
      <h3 className={`text-xl font-semibold ${textColorClass}`}>{name}</h3>
    </div>
  );
}

export default SkillCard;