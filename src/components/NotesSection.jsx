import Sidebar from './Sidebar'
import NavBar from './Navbar'
import { Plus } from "@phosphor-icons/react";
import { forwardRef } from "react";
import "../App.css";

const NotesSection = forwardRef((props, ref) => {
  return (
    <div className="notesSection-container" ref={ref}>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <main className="note-area">
          <h2>Welcome to Noted</h2>
          <p>This is where you can add, edit, and manage your notes.</p>
          <div className='add-notes-button'>
            <button><Plus /></button>
          </div>
        </main>
      </div>
    </div>
  );
});

NotesSection.displayName = "NotesSection";
export default NotesSection;
