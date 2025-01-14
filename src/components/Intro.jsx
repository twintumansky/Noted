import { useContext } from "react";
import TypingAnimation from "./TypingAnimation";
import { ThemeContext } from "./context/ThemeContext";
import { Link } from "react-router-dom";
import "../App.css";


export default function Intro() {
  const { darkMode } = useContext(ThemeContext);
  const mainText = "noted...";
  const subText = [
    "< A TRULY MINIMAL NOTE TAKING APP >",
    "< CAPTURE YOUR THOUGHTS >",
    "< ORGANIZE YOUR IDEAS >",
  ];

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
          <Link className={darkMode ? "arrow dark" : "arrow"} to="/main">
            &#x25BE;
          </Link>
        </div>
      </div>
    </>
  );
}
