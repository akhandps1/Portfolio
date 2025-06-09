import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useCallback } from 'react';

const ProjectsSection = ({ isDarkMode, projects, onProjectClick }) => {
  const debouncedOnProjectClick = useCallback(
    (project) => {
      let timeoutId;
      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          onProjectClick(project);
        }, 300); 
      };
    },
    [onProjectClick]
  );

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Gradient Background Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-light/10 via-secondary-light/5 to-transparent dark:from-accent-dark/10 dark:via-secondary-dark/5 dark:to-transparent"
          animate={{
            background: isDarkMode
              ? ['linear-gradient(135deg, rgba(100, 50, 200, 0.1), rgba(0, 0, 0, 0.05), transparent)',
                 'linear-gradient(135deg, rgba(100, 50, 200, 0.15), rgba(0, 0, 0, 0.1), transparent)']
              : ['linear-gradient(135deg, rgba(255, 100, 100, 0.1), rgba(255, 255, 255, 0.05), transparent)',
                 'linear-gradient(135deg, rgba(255, 100, 100, 0.15), rgba(255, 255, 255, 0.1), transparent)'],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Floating Orbs with Enhanced Animation */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-44 h-44 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark rounded-full opacity-15 filter blur-3xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -25, 25, 0],
            scale: [1, 1.2, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/5 w-60 h-60 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-full opacity-10 filter blur-3xl"
          animate={{
            x: [-25, 25, -25, 0],
            y: [15, -15, 15, 0],
            scale: [1, 1.3, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
        {/* Subtle Particle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: isDarkMode
              ? ['radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)']
              : ['radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)'],
          }}
          transition={{ duration: 9, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundSize: '45px 45px',
            opacity: 0.3,
          }}
        />
      </div>

      {/* Existing Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="My Projects" subtitle="Showcasing my recent work." isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-slate-900/90 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={debouncedOnProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }} 
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-accent-light dark:text-accent-dark">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 h-16 overflow-hidden">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase mb-1 text-slate-500 dark:text-slate-400">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-secondary-light dark:text-secondary-dark"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} 
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded text-xs bg-slate-200 dark:bg-slate-700 text-secondary-light dark:text-secondary-dark">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    debouncedOnProjectClick(project)();
                  }}
                  className="w-full text-sm font-medium py-2 px-4 rounded-md bg-accent-light/20 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark active:bg-accent-light/30 dark:active:bg-accent-dark/30 transition-colors flex items-center justify-center touch-none select-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ touchAction: 'manipulation' }} 
                >
                  View Details <ArrowUpRight size={16} className="ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;