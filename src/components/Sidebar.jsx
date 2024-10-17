import {Files, Bookmarks, Trash, PencilSimple} from "@phosphor-icons/react";
import '../App.css';

function Sidebar() {
    return (
      <div className='sidebar'>
        <button><Files size={24} /></button>
        <button><PencilSimple size={24} /></button>
        <button><Bookmarks size={24} /></button>
        <button><Trash size={24} /></button>
      </div>
    );
}

export default Sidebar;