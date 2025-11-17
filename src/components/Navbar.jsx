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
          <button 
            className='nav-button' 
            onClick={addButton} 
            data-tooltip="Create a new note" 
            aria-label="Create a new note"
          >
            <HugeiconsIcon
              icon={Add01Icon}
              size={20}
              strokeWidth={1.5}
            />
          </button>
          <button 
            className='nav-button' 
            onClick={deleteButton}
            data-tooltip="Delete all notes" 
            aria-label="Delete all notes"
          >
          <HugeiconsIcon
              icon={Delete02Icon}
              size={20}
              strokeWidth={1.5}
            />
          </button>
          <button 
            className='nav-button'
            data-tooltip="Settings" 
            aria-label="Settings"
          >
          <HugeiconsIcon
              icon={Settings01Icon}
              size={20}
              strokeWidth={1.5}
            />
          </button>
          <button 
            className='nav-button'
            data-tooltip="Calendar"
            aria-label="Calendar" 
          >
          <HugeiconsIcon
              icon={Calendar03Icon}
              size={20}
              strokeWidth={1.5}
            />
          </button>
          <button 
            className='nav-button' 
            onClick={toggleDarkMode}
            data-tooltip="Toggle theme"
            aria-label="Toggle theme"
          >
          <HugeiconsIcon
              icon={Sun03Icon}
              size={20}
              strokeWidth={1.5}
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