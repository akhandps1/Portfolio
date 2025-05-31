import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, X } from 'lucide-react';

const ContactMeButton = ({ isDarkMode, email, subject, phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col items-center space-y-3 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shadow-lg text-accent-light dark:text-accent-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href={`tel:${phoneNumber}`}
                className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shadow-lg text-accent-light dark:text-accent-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone size={24} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white flex items-center justify-center shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactMeButton;