import { ArrowsClockwise, Gear, CalendarDot } from "@phosphor-icons/react";
import '../App.css'

function Navbar()  {
    return (
      <div className="navbar">
        <input type={"text"} />
        <div className='navbar-buttons'>
          <button><ArrowsClockwise size={24}/></button>
          <button><Gear size={24}/></button>
          <button><CalendarDot size={24}/></button>
        </div>
      </div>
    );
}

export default Navbar