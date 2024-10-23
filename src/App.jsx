import { useState } from 'react'
import { useRef } from 'react';
import Intro from './components/Intro';
import NotesSection from './components/NotesSection';
import './App.css'

export default function App() {
  
  const [darkmode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  // Ref to the main UI section
  const notesSection = useRef(null);
  // Function to scroll to main UI
  const scrollToMainUI = () => {
    if (notesSection.current) 
      {
        notesSection.current.scrollIntoView({ behavior: 'smooth' });
        // Use setTimeout to ensure the scroll happens before adding the class
        setTimeout(() => {
            notesSection.current.classList.add('visible');
        }, 300); // Match this duration with your CSS transition duration
      }  
  };

  return (
    
    <div className="container">
      <Intro 
        darkMode={darkmode}
        scrollEvent={scrollToMainUI}       
      />
      <NotesSection 
        darkMode={darkmode}
        clickDarkMode={toggleDarkMode}
        ref={notesSection} />
    </div>
  );
}
