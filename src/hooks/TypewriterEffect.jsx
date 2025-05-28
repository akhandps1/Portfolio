import React, { useEffect, useState } from 'react';

function TypewriterEffect({ text, delay = 100, infinite = false, textColorClass = 'text-gray-300' }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (infinite) {
      // Optional: reset for infinite loop if needed, but typically not for a short hero text
      // setCurrentIndex(0);
      // setCurrentText('');
    }
  }, [currentIndex, delay, text, infinite]);

  return <span className={textColorClass}>{currentText}</span>;
}

export default TypewriterEffect;