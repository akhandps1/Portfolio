// components/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';

const Chatbot = ({ isOpen, onClose, isDarkMode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial welcome message from the bot
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ text: "Hello! I'm here to help you learn about [Your Name]'s portfolio. Ask me anything!", sender: 'bot' }]);
      }, 500);
    }
  }, [isOpen]);

  const chatbotClasses = isDarkMode
    ? 'bg-gray-800 text-gray-100 border border-gray-700'
    : 'bg-white text-gray-800 border border-gray-300';

  const inputClasses = isDarkMode
    ? 'bg-gray-700 text-gray-100 placeholder-gray-400'
    : 'bg-gray-100 text-gray-800 placeholder-gray-500';

  const buttonClasses = isDarkMode
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-blue-500 hover:bg-blue-600 text-white';

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (userMessage) {
      const newMessages = [...messages, { text: userMessage, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate a bot response based on user input
      setTimeout(() => {
        const botResponse = getBotResponse(userMessage.toLowerCase());
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
      }, 700); // Simulate typing delay
    }
  };

  // --- Bot Response Logic ---
  const getBotResponse = (query) => {
    // You can make these responses more dynamic or pull from a configuration
    const contactEmail = "your.email@example.com"; // Replace with your actual email
    const githubLink = "https://github.com/your-github"; // Replace with your actual GitHub
    const linkedinLink = "https://linkedin.com/in/your-linkedin"; // Replace with your actual LinkedIn
    const resumeLink = "/path/to/your/resume.pdf"; // Replace with the actual path to your resume in your public folder

    if (query.includes("top projects") || query.includes("best projects") || query.includes("main projects")) {
      return (
        <span>
          Sure! Some of my top projects include:
          <ul className="list-disc list-inside mt-2">
            <li>**E-commerce Store**: A full-featured online shop with React.</li>
            <li>**Task Management App**: A MERN stack app with real-time updates.</li>
            <li>**Personal Blog**: A Next.js blog with markdown support.</li>
          </ul>
          You can find more details in the projects section above!
        </span>
      );
    } else if (query.includes("frontend technologies") || query.includes("front-end") || query.includes("ui tech")) {
      return "I primarily use **React** for building user interfaces, often paired with **Tailwind CSS** for styling, and sometimes **Next.js** for server-side rendering and static site generation.";
    } else if (query.includes("download resume") || query.includes("get resume") || query.includes("my resume") || query.includes("cv")) {
      return (
        <span>
          Absolutely! You can download my resume directly from this link: <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Download Resume</a>.
        </span>
      );
    } else if (query.includes("contact") || query.includes("reach you") || query.includes("get in touch")) {
      return (
        <span>
          You can reach me via email at <a href={`mailto:${contactEmail}`} className="text-blue-400 hover:underline">{contactEmail}</a>.
          You can also connect with me on <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a> or check out my work on <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>.
        </span>
      );
    } else if (query.includes("hello") || query.includes("hi")) {
        return "Hello there! How can I assist you today?";
    } else if (query.includes("thank you") || query.includes("thanks")) {
        return "You're welcome! Feel free to ask if you have more questions.";
    } else {
      return "I'm sorry, I don't quite understand that question. You can try asking about my projects, technologies, resume, or how to contact me!";
    }
  };
  // --- End Bot Response Logic ---

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 w-80 h-96 shadow-lg rounded-lg flex flex-col z-50 ${chatbotClasses}`}>
      <div className={`p-4 border-b rounded-t-lg flex justify-between items-center ${isDarkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-gray-100'}`}>
        <h3 className="font-semibold">Portfolio Assistant</h3>
        <button onClick={onClose} className={`text-xl font-bold ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
          &times;
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.length === 0 && (
          <p className="text-center text-sm text-gray-500">Type a message to start chatting!</p>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === 'user'
                ? 'ml-auto bg-blue-500 text-white'
                : `${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mr-auto`
            }`}
          >
            {/* Render HTML content if the message is a JSX element */}
            {typeof msg.text === 'string' ? msg.text : msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* For auto-scrolling */}
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me a question..."
          className={`flex-1 p-2 rounded-l-lg focus:outline-none ${inputClasses}`}
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-r-lg font-semibold ${buttonClasses}`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;