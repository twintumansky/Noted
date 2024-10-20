import { RefreshIcon, Settings01Icon, Calendar03Icon } from 'hugeicons-react';
import '../App.css'

function Navbar()  {
    return (
      <div className="navbar">
        <input type={"text"} placeholder='search in your notes...'/>
        <div className='navbar-buttons'>
          <button><RefreshIcon size={20}/></button>
          <button><Settings01Icon size={20}/></button>
          <button><Calendar03Icon size={20}/></button>
        </div>
      </div>
    );
}

export default Navbar