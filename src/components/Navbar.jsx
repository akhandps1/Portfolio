import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 shadow-lg'
          : 'bg-white/50 dark:bg-slate-900/50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Gradient Background Layer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-light/10 to-secondary-light/10 dark:from-accent-dark/10 dark:to-secondary-dark/10"
          animate={{
            background: isDarkMode
              ? ['linear-gradient(90deg, rgba(100, 50, 200, 0.1), rgba(100, 50, 200, 0.05))',
                 'linear-gradient(90deg, rgba(100, 50, 200, 0.15), rgba(100, 50, 200, 0.1))']
              : ['linear-gradient(90deg, rgba(255, 100, 100, 0.1), rgba(255, 100, 100, 0.05))',
                 'linear-gradient(90deg, rgba(255, 100, 100, 0.15), rgba(255, 100, 100, 0.1))'],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark rounded-full opacity-10 filter blur-2xl"
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
            scale: [1, 1.1, 1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-full opacity-08 filter blur-2xl"
          animate={{
            x: [-5, 5, -5, 0],
            y: [5, -5, 5, 0],
            scale: [1, 1.15, 1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        {/* Subtle Particle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: isDarkMode
              ? ['radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                 'radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.03) 1px, transparent 1px)']
              : ['radial-gradient(circle at 10% 10%, rgba(0, 0, 0, 0.03) 1px, transparent 1px)',
                 'radial-gradient(circle at 90% 90%, rgba(0, 0, 0, 0.03) 1px, transparent 1px)'],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundSize: '30px 30px',
            opacity: 0.15,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="text-2xl font-bold text-accent-dark dark:text-accent-light"
            whileHover={{ scale: 1.05 }}
          >
            Akhand Pratap Singh
          </motion.a>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                className="font-medium text-slate-700 dark:text-slate-200 hover:text-accent-dark dark:hover:text-accent-light transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-accent-dark dark:hover:text-accent-light"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-200"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div
        className={`md:hidden bg-white/90 dark:bg-slate-900/90 shadow-lg w-full absolute left-0 top-full ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        initial={false}
        animate={{ translateY: isMenuOpen ? 0 : '-100%', opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="space-y-1">
            {navLinks.map(link => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent-dark dark:hover:text-accent-light"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;