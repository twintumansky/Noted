import { forwardRef } from "react";
import "../App.css";

const NotesSection = forwardRef((props, ref) => {
  return (
    <div className="notesSection-container" ref={ref}>
      <nav className="navbar">
        <h1>noted</h1>
        <div className="nav-items">
          <ul>
            <li><button>Home</button></li>
            <li><button>Notes</button></li>
            <li><button>Saved</button></li>
            <li><button>Collection</button></li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        <aside className="sidebar">
          <h2>Folders</h2>
          <ul>
            <li>Personal</li>
            <li>Work</li>
            <li>Ideas</li>
          </ul>
        </aside>
        <main className="note-area">
          <h2>Welcome to Noted</h2>
          <p>This is where you can add, edit, and manage your notes.</p>
          {/* Add your note-taking UI components here */}
        </main>
      </div>
    </div>
  );
});

NotesSection.displayName = "NotesSection";
export default NotesSection;