import { useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
import PropTypes from 'prop-types';
import { Add01Icon, Delete02Icon, Settings01Icon, Calendar03Icon, Sun03Icon } from 'hugeicons-react';
import '../App.css'

function Navbar({buttonDarkMode, addButton, deleteButton})  {
  const { toggleDarkMode }  = useContext(ThemeContext);

    return (
      <div className="navbar">
        <div className='navbar-buttons'>
          <button className='nav-button' onClick={addButton}><Add01Icon size={20}/></button>
          <button className='nav-button' onClick={deleteButton}><Delete02Icon size={20}/></button>
          <button className='nav-button'><Settings01Icon size={20}/></button>
          <button className='nav-button' ><Calendar03Icon size={20}/></button>
          <button className='nav-button' onClick={toggleDarkMode}><Sun03Icon size={20}/></button>
        </div>
      </div>
    );
}

Navbar.propTypes = {
  buttonDarkMode: PropTypes.func.isRequired,
  addButton: PropTypes.func.isRequired,
  deleteButton: PropTypes.func.isRequired,
}
export default Navbar