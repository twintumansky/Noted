import PropTypes from 'prop-types';
import { RefreshIcon, Settings01Icon, Calendar03Icon, Sun03Icon } from 'hugeicons-react';
import '../App.css'

function Navbar({buttonDarkMode})  {

    return (
      <div className="navbar">
        <input type={"text"} placeholder='search in your notes...'/>
        <div className='navbar-buttons'>
          <button><RefreshIcon size={20}/></button>
          <button><Settings01Icon size={20}/></button>
          <button><Calendar03Icon size={20}/></button>
          <button onClick={buttonDarkMode}><Sun03Icon size={20}/></button>
        </div>
      </div>
    );
}

Navbar.propTypes = {
  buttonDarkMode: PropTypes.func.isRequired,
}
export default Navbar