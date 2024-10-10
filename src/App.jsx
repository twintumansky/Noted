import { useRef } from 'react';
import TypingAnimation from './components/TypingAnimation';
import NotesSection from './components/NotesSection';
import './App.css'

export default function App() {
  const mainText = "noted...";
  const subText = ["< A TRULY MINIMAL NOTE TAKING APP >","< CAPTURE YOUR THOUGHTS >","< ORGANIZE YOUR IDEAS >"];
  
  // Ref to the main UI section
  const notesSection = useRef(null);

  // Function to scroll to main UI
  const scrollToMainUI = () => {
    notesSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Introduction Section */}
      <div className="introduction">
        <div className="typewriter">
          <h1 style={{ fontSize: "3rem", color: "black" }}>
            <TypingAnimation
              text={[mainText]}
              loop={1}
              typeSpeed={140}
              deleteSpeed={0}
              delaySpeed={5000}
            />
          </h1>
          <br></br>
          <p style={{ fontSize: "1rem", minHeight: "2rem", color: "#444343" }}>
            <TypingAnimation
              text={subText}
              loop={Infinity}
              typeSpeed={100}
              delaySpeed={1000}
            />
          </p>
        </div>
        {/* Slide-down Arrow Button */}
        <div className="arrow-container" onClick={scrollToMainUI}>
          <span className="arrow">&#x25BE;</span>
        </div>
      </div>

      <NotesSection ref={notesSection}/>
    </div>
  );
}
 