import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, isDarkMode }) => (
  <motion.div
    className="text-center mb-12 md:mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className={`text-3xl sm:text-4xl font-bold mb-2 text-accent-light dark:text-accent-dark`}>
      {title}
    </h2>
    <p className={`text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto`}>
      {subtitle}
    </p>
    <div className={`w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark`}></div>
  </motion.div>
);

export default SectionTitle;