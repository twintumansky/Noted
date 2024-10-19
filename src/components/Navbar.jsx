import { RefreshIcon, Settings01Icon, Calendar03Icon } from 'hugeicons-react';
import '../App.css'

function Navbar()  {
    return (
      <div className="navbar">
        <input type={"text"} />
        <div className='navbar-buttons'>
          <button><RefreshIcon size={24}/></button>
          <button><Settings01Icon size={24}/></button>
          <button><Calendar03Icon size={24}/></button>
        </div>
      </div>
    );
}

export default Navbar