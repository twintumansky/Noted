import TypingAnimation from './components/TypingAnimation';
import './App.css'

export default function App() {
  const mainText = "noted...";
  const subText = ["< A TRULY MINIMAL NOTE TAKING APP >","< CAPTURE YOUR THOUGHTS >","< ORGANIZE YOUR IDEAS >"];

  return (
    <div className='container'>
      <div className='typewriter'>
        <h1 style={{fontSize:'3rem', color:'black'}}>
          < TypingAnimation
            text={[mainText]}
            loop={1}
            typeSpeed={140}
            deleteSpeed={0}
            delaySpeed={5000}
          />
        </h1><br></br>
        <p style={{fontSize:'1rem', minHeight: '2rem', color:'#444343'}}>
          < TypingAnimation
            text={subText}
            loop={Infinity}
            typeSpeed={100}
            delaySpeed={1000}
          />
        </p>
      </div>
    </div>
  )
}
 