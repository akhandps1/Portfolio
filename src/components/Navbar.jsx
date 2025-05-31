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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        className={`md:hidden glass-effect shadow-lg ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        initial={false}
        animate={{ translateY: isMenuOpen ? 0 : '-100%', opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;