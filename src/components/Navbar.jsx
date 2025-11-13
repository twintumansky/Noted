import { useContext } from "react";
import { ThemeContext } from './context/ThemeContext';
import PropTypes from 'prop-types';
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, Delete02Icon, Settings01Icon, Calendar03Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import '../App.css'

function Navbar({addButton, deleteButton})  {
  const { toggleDarkMode }  = useContext(ThemeContext);

    return (
      <div className="navbar">
        <div className='navbar-buttons'>
          <button className='nav-button' onClick={addButton}>
            <HugeiconsIcon
              icon={Add01Icon}
              size={20}
              strokeWidth={2}
            />
          </button>
          <button className='nav-button' onClick={deleteButton}>
          <HugeiconsIcon
              icon={Delete02Icon}
              size={20}
              strokeWidth={2}
            />
          </button>
          <button className='nav-button'>
          <HugeiconsIcon
              icon={Settings01Icon}
              size={20}
              strokeWidth={2}
            />
          </button>
          <button className='nav-button' >
          <HugeiconsIcon
              icon={Calendar03Icon}
              size={20}
              strokeWidth={2}
            />
          </button>
          <button className='nav-button' onClick={toggleDarkMode}>
          <HugeiconsIcon
              icon={Sun03Icon}
              size={20}
              strokeWidth={2}
            />
          </button>
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