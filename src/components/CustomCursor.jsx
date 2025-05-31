import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ isDarkMode }) => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: posX, clientY: posY } = e;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 200, fill: 'forwards' });
      }
    };

    const hideCursor = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '0';
      if (cursorOutlineRef.current) cursorOutlineRef.current.style.opacity = '0';
    };

    const showCursor = () => {
      if (cursorDotRef.current) cursorDotRef.current.style.opacity = '1';
      if (cursorOutlineRef.current) cursorOutlineRef.current.style.opacity = '1';
    };

    if (!('ontouchstart' in window)) {
      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', hideCursor);
      document.addEventListener('mouseenter', showCursor);
    }

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorDotRef}
        className={`fixed w-3 h-3 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 ${isDarkMode ? 'bg-accent-dark' : 'bg-accent-light'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        ref={cursorOutlineRef}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 border-2 ${isDarkMode ? 'border-secondary-dark' : 'border-secondary-light'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;