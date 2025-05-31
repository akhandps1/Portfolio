import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = ({ isDarkMode }) => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 text-center bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">
        © {year} Akhand. All rights reserved.
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
        Built with <span className="text-red-500">♥</span> using React & Tailwind CSS.
      </p>
      <motion.button
        onClick={() => scrollToSection('hero')}
        className="mt-4 mx-auto p-2 rounded-full text-slate-500 dark:text-slate-400 hover:text-accent-light dark:hover:text-accent-dark bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={20} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;