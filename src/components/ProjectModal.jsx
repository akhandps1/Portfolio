import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose, isDarkMode }) => {
  if (!project) return null;

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []); 

  
  const handleClose = () => {
    document.body.style.overflow = 'unset'; 
    onClose(); 
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[1000] backdrop-blur-sm"
          onClick={handleClose} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-effect rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={handleClose} 
              className="absolute top-4 right-4 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-accent-light dark:hover:text-accent-dark hover:bg-slate-200 dark:hover:bg-slate-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-accent-light dark:text-accent-dark">{project.title}</h2>
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase mb-2 text-slate-500 dark:text-slate-400">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-200 dark:bg-slate-700 text-secondary-light dark:text-secondary-dark"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase mb-2 text-slate-500 dark:text-slate-400">Full Description:</h4>
              <p className="text-base text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{project.fullDescription}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-slate-200 dark:bg-slate-700 text-accent-light dark:text-accent-dark"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-slate-200 dark:bg-slate-700 text-accent-light dark:text-accent-dark"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub Repo <Github size={16} className="ml-2" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;