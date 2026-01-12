import { useContext } from "react";
import PropTypes from "prop-types";
import TypingAnimation from "../components/animations/TypingAnimation";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";


export default function Intro({ onArrowClick }) {
  const { darkMode } = useContext(ThemeContext);
  const mainText = "noted...";
  const subText = [
    "< A TRULY MINIMAL NOTE TAKING APP >",
    "< CAPTURE YOUR THOUGHTS >",
    "< ORGANIZE YOUR IDEAS >",
  ];
  const navigate = useNavigate();
  
  
  const handleArrowClick = (e) => {
    e.preventDefault(); 
    onArrowClick();
    
    // setTimeout(() => {
    //   window.location.href = '/main';
    // }, 600); 
    navigate('/main');
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
        
        <div className="arrow-container">
          <Link 
            className={darkMode ? "arrow dark" : "arrow"} 
            to="/main"
            onClick={handleArrowClick} 
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
