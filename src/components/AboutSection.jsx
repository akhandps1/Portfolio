import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const AboutSection = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
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
          className="absolute inset-0 bg-gradient-to-tl from-accent-light/10 via-secondary-light/5 to-transparent dark:from-accent-dark/10 dark:via-secondary-dark/5 dark:to-transparent"
          animate={{
            background: isDarkMode
              ? ['linear-gradient(315deg, rgba(100, 50, 200, 0.1), rgba(0, 0, 0, 0.05), transparent)',
                 'linear-gradient(315deg, rgba(100, 50, 200, 0.15), rgba(0, 0, 0, 0.1), transparent)']
              : ['linear-gradient(315deg, rgba(255, 100, 100, 0.1), rgba(255, 255, 255, 0.05), transparent)',
                 'linear-gradient(315deg, rgba(255, 100, 100, 0.15), rgba(255, 255, 255, 0.1), transparent)'],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Floating Orbs with Enhanced Animation */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-40 h-40 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark rounded-full opacity-15 filter blur-3xl"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.2, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-full opacity-10 filter blur-3xl"
          animate={{
            x: [-20, 20, -20, 0],
            y: [15, -15, 15, 0],
            scale: [1, 1.3, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        {/* Subtle Particle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: isDarkMode
              ? ['radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)']
              : ['radial-gradient(circle at 30% 30%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)',
                 'radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.05) 2px, transparent 2px)'],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundSize: '40px 40px',
            opacity: 0.25,
          }}
        />
      </div>

      {/* Existing Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="🚀 About Me" subtitle="My journey as a MERN developer" isDarkMode={isDarkMode} />
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <motion.div
            className="w-full lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-effect rounded-xl shadow-2xl overflow-hidden p-1.5">
              <img
                src="https://i.postimg.cc/B6RnqcwR/profile.jpg"
                alt="Your Name"
                className="w-full h-auto rounded-lg object-cover"
                onError={(e) => { e.target.src = `https://placehold.co/400x400/${isDarkMode ? '1E293B/94A3B8' : 'F1F5F9/64748B'}?text=Error&font=Inter`; }}
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-2/3 glass-effect p-6 sm:p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">
            Hi, I'm Akhand.
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            I love building web applications using MongoDB, Express.js, React.js, and Node.js. I'm skilled in creating responsive user interfaces with React and Tailwind CSS, and building REST APIs using Node.js and Express.            </p>
            
            <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm always learning new technologies and improving my coding skills to build better, faster, and user-friendly web apps.            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;