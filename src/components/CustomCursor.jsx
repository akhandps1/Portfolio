import React, { useEffect, useRef, useState } from 'react';

function CustomCursor({ isDarkMode }) {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorActualX = 0, cursorActualY = 0;

    const animateCursor = () => {
      cursorActualX += (mouseX - cursorActualX) * 0.1;
      cursorActualY += (mouseY - cursorActualY) * 0.1;

      cursor.style.left = `${cursorActualX}px`;
      cursor.style.top = `${cursorActualY}px`;

      requestAnimationFrame(animateCursor);
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setCursorX(e.clientX); // Update state for immediate visual effect
      setCursorY(e.clientY); // Update state for immediate visual effect
    };

    window.addEventListener('mousemove', moveCursor);
    animateCursor(); // Start the animation loop

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []); // Empty dependency array means this runs once on mount

  const cursorColorClass = isDarkMode ? 'bg-indigo-400' : 'bg-blue-600';

  return (
    <div
      ref={cursorRef}
      className={`fixed z-50 pointer-events-none w-6 h-6 rounded-full mix-blend-screen opacity-75 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out shadow-lg ${cursorColorClass}`}
      style={{ left: cursorX, top: cursorY }}
    ></div>
  );
}

export default CustomCursor;