import { useContext } from "react";
import PropTypes from "prop-types";
import TypingAnimation from "../components/animations/TypingAnimation";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "../App.css";


export default function Intro({ onArrowClick }) {
  const { darkMode } = useContext(ThemeContext);
  const mainText = "noted...";
  const subText = [
    "< A TRULY MINIMAL NOTE TAKING APP >",
    "< CAPTURE YOUR THOUGHTS >",
    "< ORGANIZE YOUR IDEAS >",
  ];
  
  //added handleArrowClick function for animation
  const handleArrowClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    onArrowClick();
    // Navigate programmatically after animation
    setTimeout(() => {
      window.location.href = '/main';
    }, 600); // Match this with your transition duration
  };

  return (
    <>
      <div className={darkMode ? "introduction dark" : "introduction"}>
        <div className="typewriter">
          <h1>
            <TypingAnimation
              text={[mainText]}
              loop={1}
              typeSpeed={160}
              deleteSpeed={0}
              delaySpeed={5000}
            />
          </h1>
          <p>
            <TypingAnimation
              text={subText}
              loop={Infinity}
              typeSpeed={100}
              delaySpeed={1000}
            />
          </p>
        </div>
        {/* Arrow Button */}
        <div className="arrow-container">
          <Link 
            className={darkMode ? "arrow dark" : "arrow"} 
            to="/main"
            onClick={handleArrowClick} //added eventlistener to handle arrow click
          >
            &#x25BE;
          </Link>
        </div>
      </div>
    </>
  );
}

Intro.propTypes = {
  onArrowClick: PropTypes.func.isRequired, // Can be anything renderable by React (strings, numbers, elements, arrays, fragments)
};
