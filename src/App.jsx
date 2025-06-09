import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactMeButton from './components/ContactMeButton';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projectsData = [
    {
      title: "Bachat Buddy",
      description: "A web app to track income and expenses, categorize transactions, set budgets, and visualize spending patterns.",
      fullDescription: "Developed a responsive financial management web app with a user-friendly interface, enabling users to track, categorize, and manage transactions. Features include filtering, sorting, and visualizing expenses with a pie chart. Data persists via local storage, with a simulated backend using JSONPlaceholder.\n\nKey Features:\n- Add, edit, and delete transactions\n- Filter by type or category\n- Sort by amount\n- Pie chart for expense visualization\n- Local storage for data persistence\n- Simulated CRUD operations with JSONPlaceholder",
      technologies: ["React", "Chart.js", "JavaScript", "HTML", "CSS", "JSONPlaceholder"],
      liveLink: "https://bachat-buddy.vercel.app/",
      githubLink: "https://github.com/akhandps1/Bachat-Buddy.git"
      },
      {
        title: "Mera Learning Adda",
        description: "A web app for tracking learning goals, resources, and progress with study session logging and visualization.",
        fullDescription: "Developed a responsive learning management web app to help users track self-directed learning. Users can manage topics, log study sessions, set skill levels, and visualize progress with a bar chart. Data persists via local storage, with a simulated backend using JSONPlaceholder.\n\nKey Features:\n- Add, edit, and delete learning topics\n- Track study hours and completion percentage\n- Filter by category or skill level\n- Sort by progress or hours studied\n- Bar chart for hours studied per category\n- Local storage for data persistence\n- Simulated CRUD operations with JSONPlaceholder",
        technologies: ["React", "Chart.js", "JavaScript", "HTML", "CSS", "JSONPlaceholder"],
        liveLink: "https://mera-learning-adda.vercel.app/",
        githubLink: "https://github.com/akhandps1/Mera-Learning-Adda.git"
     },
    {
      title: "E-commerce Platform-coming-soon",
      description: "A modern e-commerce solution with seamless product browsing, cart functionality, and secure authentication.",
      fullDescription: "Built a responsive e-commerce platform with a sleek UI, featuring dynamic product listings, a persistent shopping cart, and Firebase-based user authentication. Optimized for performance and accessibility across devices.\n\nKey Features:\n- User authentication\n- Product search and filters\n- Cart and checkout flow\n- Mock Stripe payment integration\n- Admin dashboard (conceptual)",
      technologies: ["React", "Redux", "Tailwind CSS", "Firebase", "Stripe (mock)", "Node.js"],
      liveLink: "https://mera-learning-adda.vercel.app/",
      githubLink: "https://github.com/akhandps1/Mera-Learning-Adda.git"
    },

   
  ];

  return (
    <div className="min-h-screen font-inter relative overflow-x-hidden">
      <CustomCursor isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection isDarkMode={isDarkMode} />
            <AboutSection isDarkMode={isDarkMode} />
            <SkillsSection isDarkMode={isDarkMode} />
            <ProjectsSection
              isDarkMode={isDarkMode}
              projects={projectsData}
              onProjectClick={handleProjectClick}
            />
            <ContactSection isDarkMode={isDarkMode} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer isDarkMode={isDarkMode} />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} isDarkMode={isDarkMode} />
      <ContactMeButton
        isDarkMode={isDarkMode}
        email="youremail@example.com"
        subject="Portfolio Inquiry"
        phoneNumber="+1234567890"
      />
    </div>
  );
}

export default App;