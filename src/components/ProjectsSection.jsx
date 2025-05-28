import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ isDarkMode, projects, onProjectClick, useScrollAnimation }) {
  const [projectsRef, projectsIsVisible] = useScrollAnimation();

  const sectionBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const headingColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`py-16 md:py-24 p-4 transition-opacity duration-700 ${projectsIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sectionBgClass}`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${headingColorClass}`}>My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isVisible={projectsIsVisible}
              delay={index * 150}
              onClick={() => onProjectClick(project)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;