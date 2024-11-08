import { useState, useRef } from 'react'
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
      notesSection.current.scrollIntoView({ behavior: 'smooth' }); //For smooth scroll into NotesSection      
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
