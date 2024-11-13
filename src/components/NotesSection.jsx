/* eslint-disable react/prop-types */
import { useState, useEffect, forwardRef } from "react";
import { Add01Icon, Delete02Icon } from "hugeicons-react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import NotesCard from "./NotesCard";
import "../App.css";

const NotesSection = forwardRef((props, ref) => {
  //State for saving notes and retreiving them from localStorage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [cardPopover, setCardPopover] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [notesTitle, setNotesTitle] = useState("");
  const [notesContent, setNotesContent] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleClick() {
    const createdAt = new Date();
    setNotes((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        title: "",
        content: "Click to add content...",
        createdAt,
      },
    ]);
  }

  function handleCardClick(id, title, content) {
    setCurrentNoteId(id);
    setNotesTitle(title);
    setNotesContent(content);
    setCardPopover(true);
  }

  function handleClosePopover() {
    // Save the current note's content before closing
    setNotes((prevCards) =>
      prevCards.map((cards) =>
        cards.id === currentNoteId
          ? { ...cards, title: notesTitle, content: notesContent }
          : cards
      )
    );
  }

  function handleDeleteNote() {
    setNotes((prevCards) =>
      prevCards.filter((card) => card.id !== currentNoteId)
    );
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]); 
      localStorage.removeItem("notes");
    }
  }

  function formatDate(date) {
    const day = date.getDate();
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month}, ${day}, ${year}`;
  }

  return (
    <div
      className={
        props.darkMode
          ? "notesSection-container dark"
          : "notesSection-container"
      }
      ref={ref}
    >
      <Sidebar />
      <div className={props.darkMode ? "main-content dark" : "main-content"}>
        <NavBar buttonDarkMode={props.clickDarkMode} />
        <main className="note-area">
          {notes.length > 0 || (
            <p>This is where you can manage your notes...</p>
          )}
          <div className="add-notes-button">
            <button onClick={handleClick}>
              <Add01Icon />
            </button>
          </div>
          <div className="clear-all-button">
            <button onClick={handleClearAll}>
              <Delete02Icon />
            </button>
          </div>
          {notes.length > 0 && (
            <div className="card-container">
              {notes.map((notes) => (
                <div
                  key={notes.id}
                  className="card-element"
                  onClick={() =>
                    handleCardClick(notes.id, notes.title, notes.content)
                  }
                >
                  <div className="card-element-content">{notes.content}</div>
                  <div className="card-element-date">
                    {formatDate(new Date(notes.createdAt))}
                  </div>
                  <div className="hover-card-content">
                    <p>{notes.content || "Click to add content..."}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {cardPopover && (
        <NotesCard
          title={notesTitle}
          content={notesContent}
          onClose={() => {
            handleClosePopover();
            setCardPopover(false);
          }}
          handleTitleClick={(e) => setNotesTitle(e.target.value)}
          handleContentClick={(e) => setNotesContent(e.target.value)}
          onDelete={() => {
            handleDeleteNote();
            setCardPopover(false);
          }}
        />
      )}
    </div>
  );
});

NotesSection.displayName = "NotesSection";
export default NotesSection;