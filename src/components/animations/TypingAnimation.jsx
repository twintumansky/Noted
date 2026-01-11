import { Typewriter } from 'react-simple-typewriter';
import PropTypes from 'prop-types';

export default function TypingAnimation(props){
    return (
        <Typewriter
        words={props.text}
        loop={props.loop} // Number of times to loop the text
        //  cursor
        //  cursorStyle='|' // You can customize the cursor style here
        typeSpeed={props.typeSpeed} // Speed of typing
        deleteSpeed={props.deleteSpeed}
        delaySpeed={props.delaySpeed} // Delay before starting to type again (in ms)
      />
    )
}

TypingAnimation.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    loop: PropTypes.number,
    typeSpeed: PropTypes.number,
    deleteSpeed: PropTypes.number,    
    delaySpeed: PropTypes.number
}