import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import SectionTitle from './SectionTitle';

const ContactSection = ({ isDarkMode }) => {
  const CONTACT_EMAIL = "akhandps2007@gmail.com";
  const CONTACT_PHONE_NUMBER = "+91-9555228781";
  const SOCIAL_LINKS = [
    { name: "GitHub", icon: Github, url: "https://github.com/akhandps1",
      color: "hover:text-slate-700 dark:hover:text-slate-300" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/akhandps1/",
      color: "hover:text-accent-light dark:hover:text-accent-dark" },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      console.log("Form data submitted:", formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Let's create something extraordinary together." isDarkMode={isDarkMode} />
        <div className="glass-effect p-6 sm:p-8 md:p-12 rounded-xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Contact Information</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm always open to new projects, collaborations, or opportunities in web development.
            Feel free to reach out via email, LinkedIn, or GitHub — I'd love to connect! </p>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center text-slate-700 dark:text-slate-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={24} className="mr-3 text-accent-light dark:text-accent-dark group-hover:scale-110" />
                <span>{CONTACT_EMAIL}</span>
              </motion.a>
              <motion.a
                href={`tel:${CONTACT_PHONE_NUMBER}`}
                className="flex items-center text-slate-700 dark:text-slate-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={24} className="mr-3 text-accent-light dark:text-accent-dark group-hover:scale-110" />
                <span>{CONTACT_PHONE_NUMBER}</span>
              </motion.a>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-slate-700 dark:text-slate-200">Connect with me:</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map(link => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full text-slate-500 dark:text-slate-400 ${link.color}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-md font-semibold text-white bg-secondary-light dark:bg-secondary-dark hover:bg-opacity-90 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message <MessageSquare size={20} className="ml-2" /></>
                  )}
                </button>
              </motion.div>
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p
                    className="text-sm text-green-500 dark:text-green-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    className="text-sm text-red-500 dark:text-red-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Something went wrong. Please try again or contact me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;