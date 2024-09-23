import { Typewriter } from 'react-simple-typewriter';
import './App.css'

export default function App() {
  const text = "noted...";

  return (
    <div className='container'>
      <div className='typewriter'>
        <h1 style={{fontsize:'4rem'}}>
          <Typewriter 
           words={[text]}
           loop={1} // Number of times to loop the text
          //  cursor
          //  cursorStyle='|' // You can customize the cursor style here
           typeSpeed={140} // Speed of typing
           deleteSpeed={50} // Speed of deleting (if needed)
           delaySpeed={1000} // Delay before starting to type again (in ms)
           />
        </h1>
      </div>
    </div>
  )
}
 