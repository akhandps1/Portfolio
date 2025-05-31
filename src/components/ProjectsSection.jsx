import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ProjectsSection = ({ isDarkMode, projects, onProjectClick }) => {
  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Projects" subtitle="Showcasing my recent work." isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => onProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
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
                  onClick={(e) => { e.stopPropagation(); onProjectClick(project); }}
                  className="w-full text-sm font-medium py-2 px-4 rounded-md bg-accent-light/20 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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