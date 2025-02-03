import { useEffect, useState } from 'react';

const ThemeTransition = ({ isDark }) => {
  const [isExpanding, setIsExpanding] = useState(false);

  useEffect(() => {
    setIsExpanding(true);
    const timer = setTimeout(() => {
      setIsExpanding(false);
    }, 600); // Match this with CSS transition duration

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <div className="theme-transition-overlay">
      <div 
        className={`theme-circle ${isDark ? 'dark' : 'light'} ${isExpanding ? 'expanding' : ''}`}
      />
    </div>
  );
};

export default ThemeTransition; 