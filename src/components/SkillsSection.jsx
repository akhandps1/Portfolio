import React from 'react';
import SkillCard from './SkillCard';

function SkillsSection({ isDarkMode, useScrollAnimation }) {
  const [skillsRef, skillsIsVisible] = useScrollAnimation();

  const sectionBgClass = isDarkMode ? 'bg-gray-950' : 'bg-gray-100';
  const headingColorClass = isDarkMode ? 'text-gray-50' : 'text-gray-900';

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`py-16 md:py-24 p-4 transition-opacity duration-700 ${skillsIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${sectionBgClass}`}
    >
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${headingColorClass}`}>My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        <SkillCard icon="M0 16L4 0H12L16 16Z" name="HTML" isVisible={skillsIsVisible} delay={0} isDarkMode={isDarkMode} />
<SkillCard icon="M8 0 L0 4 L0 12 L8 16 L16 12 L16 4 Z" name="CSS" isVisible={skillsIsVisible} delay={100} isDarkMode={isDarkMode} />
<SkillCard icon="M0 0 L16 8 L0 16 Z" name="JavaScript" isVisible={skillsIsVisible} delay={200} isDarkMode={isDarkMode} />
<SkillCard icon="M8 0 L15 4 L15 12 L8 16 L1 12 L1 4 Z" name="React" isVisible={skillsIsVisible} delay={300} isDarkMode={isDarkMode} />
<SkillCard icon="M8 0 L16 8 L8 16 L0 8 Z" name="Git" isVisible={skillsIsVisible} delay={400} isDarkMode={isDarkMode} />
<SkillCard icon="M14 4 H8 V0 H0 V16 H8 V12 H14 Z" name="C" isVisible={skillsIsVisible} delay={500} isDarkMode={isDarkMode} />
<SkillCard icon="M8 0 L10 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6 6 Z" name="C++" isVisible={skillsIsVisible} delay={600} isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;