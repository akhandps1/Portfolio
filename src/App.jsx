import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor'; 
import Chatbot from './components/Chatbot'; // Import the new Chatbot component
import useScrollAnimation from './hooks/useScrollAnimation'; 

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isChatbotOpen, setIsChatbotOpen] = useState(false); // State for chatbot visibility

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen(prev => !prev);
  };

  // Define your project data here or import from a separate data file
  const projectsData = [
    {
      title: "E-commerce Store",
      description: "A responsive e-commerce platform built with React, featuring product listings, shopping cart, and user authentication.",
      fullDescription: "Developed a full-featured e-commerce application with a modern UI. Implemented product Browse, detailed product pages, a persistent shopping cart, and user authentication using Firebase. Focused on performance optimization and responsive design across all devices.",
      technologies: ["React", "Redux", "Tailwind CSS", "Firebase", "Stripe (mock)"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with drag-and-drop functionality and real-time updates.",
      fullDescription: "Created a robust task management solution enabling users to organize tasks, set priorities, and track progress. Features include drag-and-drop task reordering, real-time synchronization, and user-specific dashboards. Backend built with Node.js and Express, using MongoDB for data storage.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Personal Blog",
      description: "A minimalist blog platform designed for content creators, with markdown support and commenting features.",
      fullDescription: "Designed and developed a personal blogging platform with a focus on clean aesthetics and ease of use. Supports markdown for rich text editing, user comments, and category filtering. Optimized for SEO and fast loading times.",
      technologies: ["Next.js", "Markdown", "GraphQL (Apollo Client)", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard fetching real-time weather data from an API, with location search.",
      fullDescription: "Built a dynamic weather application that provides current weather conditions and forecasts. Integrates with OpenWeatherMap API, allowing users to search by city or use their current location. Features include animated weather icons and a clean, intuitive interface.",
      technologies: ["React", "Axios", "OpenWeatherMap API", "CSS Modules"],
      liveLink: "#",
      githubLink: "#"
    },
  ];

  const mainBgClass = isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-800';

  return (
    <div className={`min-h-screen font-inter relative overflow-hidden ${mainBgClass}`}>
      <CustomCursor isDarkMode={isDarkMode} />

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="pt-20 md:pt-24">
        <HeroSection isDarkMode={isDarkMode} useScrollAnimation={useScrollAnimation} />
        <AboutSection isDarkMode={isDarkMode} useScrollAnimation={useScrollAnimation} />
        <SkillsSection isDarkMode={isDarkMode} useScrollAnimation={useScrollAnimation} />
        <ProjectsSection
          isDarkMode={isDarkMode}
          projects={projectsData}
          onProjectClick={handleProjectClick}
          useScrollAnimation={useScrollAnimation}
        />
        <ContactSection isDarkMode={isDarkMode} useScrollAnimation={useScrollAnimation} />
      </main>

      <Footer isDarkMode={isDarkMode} />

      <ProjectModal project={selectedProject} onClose={handleCloseModal} isDarkMode={isDarkMode} />

      {/* Chatbot Button */}
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg z-50
          ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chatbot Component */}
      <Chatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;