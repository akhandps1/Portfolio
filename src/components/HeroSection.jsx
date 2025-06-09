import { motion } from 'framer-motion';
import { Briefcase, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const HeroSection = ({ isDarkMode }) => {
  const [subtitle, setSubtitle] = useState('');
  const subtitles = ["MERN Stack Developer", "React.js Enthusiast", "Full-Stack Web Developer", "API & UI Builder"];
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const delayBetweenWords = 1500;

    const handleTyping = () => {
      const currentWord = subtitles[subtitleIndex];
      if (isDeleting) {
        setSubtitle(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
        }
      } else {
        setSubtitle(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, subtitleIndex]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
          className="absolute top-1/5 left-1/5 w-48 h-48 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark rounded-full opacity-15 filter blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/5 right-1/5 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-full opacity-10 filter blur-3xl"
          animate={{
            x: [-30, 30, -30, 0],
            y: [20, -20, 20, 0],
            scale: [1, 1.4, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Subtle Particle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: isDarkMode
              ? ['radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)']
              : ['radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)'],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }}
        />
      </div>

      {/* Existing Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark">Akhand</span>.
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-600 dark:text-slate-300 mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-accent-light dark:from-secondary-dark dark:to-accent-dark">{subtitle}</span>
          <span className="animate-ping">|</span>
        </motion.p>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Building full-stack web applications using React and Node.js with clean design and smooth performance.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-lg font-semibold text-white bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work <Briefcase size={20} className="ml-2 group-hover:animate-bounce" />
          </motion.button>
          <motion.a
            href="akhandps1.github.io/resume-/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume <Download size={20} className="ml-2 group-hover:animate-pulse" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;