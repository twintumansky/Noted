import PropTypes from 'prop-types';
import TypingAnimation from './TypingAnimation';
import '../App.css'

export default function Intro({darkMode, scrollEvent}) {
  
  const mainText = "noted...";
  const subText = ["< A TRULY MINIMAL NOTE TAKING APP >",
                   "< CAPTURE YOUR THOUGHTS >",
                   "< ORGANIZE YOUR IDEAS >"];
  
  return (

    <>
      <div className={darkMode?"introduction darkmode": "introduction"}>
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
        {/* Slide-down Arrow Button */}
        <div className="arrow-container" onClick={scrollEvent}>
          <span className="arrow">&#x25BE;</span>
        </div>
      </div>
    </>
  );
}

Intro.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  scrollEvent: PropTypes.func.isRequired
};