import {File02Icon, PencilEdit01Icon, AllBookmarkIcon, Delete02Icon } from 'hugeicons-react';
import '../App.css';

function Sidebar() {
    return (
      <div className='sidebar'>
        <button><File02Icon size={24} /></button>
        <button><PencilEdit01Icon size={24} /></button>
        <button><AllBookmarkIcon size={24} /></button>
        <button><Delete02Icon size={24} /></button>
      </div>
    );
}

export default Sidebar;