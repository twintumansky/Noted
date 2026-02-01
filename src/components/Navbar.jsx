import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import PropTypes from 'prop-types';
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, Delete02Icon, Settings01Icon, Calendar03Icon, Sun03Icon } from '@hugeicons/core-free-icons';
import '../App.css'

function Navbar({addButton, deleteButton})  {
  const { toggleDarkMode }  = useContext(ThemeContext);

    return (
      <div className="h-12 w-full fixed top-0 z-10 flex items-center justify-between bg-transparent px-4 py-2 border-b-[0.5px] border-b-[#cbcaca] border-solid">
        <div className="absolute top-1/2 right-8 translate-x-0 -translate-y-1/2 flex justify-even gap-y-0 gap-x-8 transition-transform duration-[0.3s] ease-[ease]">
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
            data-tooltip="Theme"
            aria-label="Theme"
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