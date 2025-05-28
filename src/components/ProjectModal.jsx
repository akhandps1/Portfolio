import React from 'react';

function ProjectModal({ project, onClose, isDarkMode }) {
  if (!project) return null;

  const modalBgClass = isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200';
  const titleColorClass = isDarkMode ? 'text-indigo-400' : 'text-blue-600';
  const textColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const closeButtonColorClass = isDarkMode ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900';
  const techTagBgClass = isDarkMode ? 'bg-indigo-700 text-indigo-100' : 'bg-blue-200 text-blue-800';
  const primaryButtonClass = isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white';
  const secondaryButtonClass = isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-100' : 'bg-gray-300 hover:bg-gray-400 text-gray-800';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className={`rounded-xl shadow-2xl p-6 md:p-8 max-w-2xl w-full relative border ${modalBgClass} animate-slide-up-fade-in`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-3xl font-bold transition-colors duration-200 ${closeButtonColorClass}`}
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className={`text-3xl font-bold mb-4 ${titleColorClass}`}>{project.title}</h3>
        <p className={`text-lg mb-6 ${textColorClass}`}>{project.fullDescription || project.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies && project.technologies.map((tech, index) => (
            <span key={index} className={`text-sm px-3 py-1 rounded-full ${techTagBgClass}`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-2 rounded-lg text-md font-semibold shadow-md transition-colors duration-300 transform hover:scale-105 ${primaryButtonClass}`}
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-6 py-2 rounded-lg text-md font-semibold shadow-md transition-colors duration-300 transform hover:scale-105 ${secondaryButtonClass}`}
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;