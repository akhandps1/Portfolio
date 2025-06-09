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
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with seamless product browsing, cart functionality, and secure authentication.",
      fullDescription: "Built a responsive e-commerce platform with a sleek UI, featuring dynamic product listings, a persistent shopping cart, and Firebase-based user authentication. Optimized for performance and accessibility across devices.\n\nKey Features:\n- User authentication\n- Product search and filters\n- Cart and checkout flow\n- Mock Stripe payment integration\n- Admin dashboard (conceptual)",
      technologies: ["React", "Redux", "Tailwind CSS", "Firebase", "Stripe (mock)", "Node.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "TaskSync Pro",
      description: "A collaborative task management app with drag-and-drop and real-time updates.",
      fullDescription: "Developed a full-stack task management app with intuitive drag-and-drop task organization, real-time updates via WebSockets, and personalized dashboards. Backend powered by Node.js and MongoDB.\n\nHighlights:\n- Drag-and-drop interface\n- Real-time collaboration\n- Custom task boards\n- Priority and due date management",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
      liveLink: "#",
      githubLink: "#"
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