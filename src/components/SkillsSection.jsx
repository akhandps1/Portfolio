import { motion } from 'framer-motion';
import { Code, Briefcase, Server, Settings } from 'lucide-react';
import SectionTitle from './SectionTitle';

const SkillsSection = ({ isDarkMode }) => {
  const skillsData = [
    {
      category: "Languages & Core",
      icon: <Code size={32} className="text-accent-light dark:text-accent-dark" />,
      items: ["JavaScript","HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries",
      icon: <Briefcase size={32} className="text-secondary-light dark:text-secondary-dark" />,
      items: ["React","Tailwind CSS", "Material UI", "Framer Motion"]
    },
    {
      category: "Backend & Databases",
      icon: <Server size={32} className="text-teal-600 dark:text-teal-400" />,
      items: ["Node.js", "Express.js", "Firebase", "MongoDB", "SupaBase"]
    },
    {
      category: "Tools & Platforms",
      icon: <Settings size={32} className="text-purple-600 dark:text-purple-400" />,
      items: ["Git & GitHub", "Vite", "Jest", "Docker", "Postman", "Figma"]
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="My Skills" subtitle="Technologies I specialize in." isDarkMode={isDarkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="glass-effect p-6 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {skillCategory.icon}
                <h3 className="text-xl font-semibold ml-3 text-slate-800 dark:text-slate-100">{skillCategory.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <motion.li
                    key={item}
                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-200 dark:bg-slate-700 text-accent-light dark:text-accent-dark"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;