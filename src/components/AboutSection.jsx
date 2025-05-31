import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const AboutSection = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="My journey as a frontend developer" isDarkMode={isDarkMode} />
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
                src="src/assets/profile.jpg"
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
              Hello! I'm Akhand.
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              I'm a passionate Frontend Developer specializing in creating intuitive and visually stunning web applications. My journey began with a love for blending design and code, which has evolved into expertise in modern frameworks like React and Next.js.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              I excel at turning complex challenges into elegant solutions, leveraging <span className="text-secondary-light dark:text-secondary-dark">React, TypeScript, and Tailwind CSS</span> to build performant and accessible interfaces. I'm constantly exploring new tools and trends to stay at the forefront of web development.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Outside of coding, I enjoy contributing to open-source projects, experimenting with UI/UX design, and sipping coffee while ideating my next big project.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;