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
  const subtitles = ["Frontend Developer", "React Enthusiast", "UI/UX Advocate", "Creative Coder"];
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
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark rounded-full opacity-20 filter blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
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
          Crafting pixel-perfect, interactive, and accessible web experiences with modern technologies.
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
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV <Download size={20} className="ml-2 group-hover:animate-pulse" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;