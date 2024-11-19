import PropTypes from 'prop-types';
import { RefreshIcon, Settings01Icon, Calendar03Icon, Sun03Icon } from 'hugeicons-react';
import '../App.css'

function Navbar({buttonDarkMode})  {

    return (
      <div className="navbar">
        <div className='navbar-buttons'>
          <button className='nav-button'><RefreshIcon size={20}/></button>
          <button className='nav-button'><Settings01Icon size={20}/></button>
          <button className='nav-button' ><Calendar03Icon size={20}/></button>
          <button className='nav-button selected' onClick={buttonDarkMode}><Sun03Icon size={20}/></button>
        </div>
      </div>
    );
}

Navbar.propTypes = {
  buttonDarkMode: PropTypes.func.isRequired,
}
export default Navbar