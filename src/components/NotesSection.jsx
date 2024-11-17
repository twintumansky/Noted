import { useState, useEffect } from "react";
import { Add01Icon, Delete02Icon } from "hugeicons-react";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";
import NotesCard from "./NotesCard";
import "../App.css";

const NotesSection = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [cardPopover, setCardPopover] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [notesTitle, setNotesTitle] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [lastNoteColor, setLastNoteColor] = useState(null);
  const [currentNoteColor, setCurrentNoteColor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const colors = [
    "#b8cedc", //sky
    "#caaf9e", //dark-beige
    "#b2bf88", //apple-green
    "#fed78e", //yellow
    "#c2b2e6", //purple
    "#d5cec5", //light-beige
    "#b0d2c1", //cyan-green
    "#fec18f", //orange
  ];
  const getRandomColors = () => {
    const availableColors = colors.filter((color) => color !== lastNoteColor);
    const getColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    setLastNoteColor(getColor);
    return getColor;
  };

  function handleClick() {
    const randomColor = getRandomColors();
    const createdAt = new Date();
    setNotes((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        title: "",
        content: "Click to add content...",
        createdAt,
        color: randomColor,
      },
    ]);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]);
      localStorage.removeItem("notes");
    }
  }

  function handleCardClick(id, title, content, color) {
    setCurrentNoteId(id);
    setNotesTitle(title);
    setNotesContent(content);
    setCurrentNoteColor(color);
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

  function formatDate(date) {
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${month}, ${day}, ${year}`;
  }

  return (
    <div
      className={
        darkMode ? "notesSection-container dark" : "notesSection-container"
      }
    >
      <Sidebar />
      <>
        <NavBar buttonDarkMode={toggleDarkMode} />
        <main className="note-area">
          {notes.length > 0 ? null : (
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
                    handleCardClick(
                      notes.id,
                      notes.title,
                      notes.content,
                      notes.color
                    )
                  }
                  style={{ backgroundColor: notes.color }}
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
      </>

      {cardPopover && (
        <NotesCard
          title={notesTitle}
          content={notesContent}
          bgColor={currentNoteColor}
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
};

NotesSection.displayName = "NotesSection";
export default NotesSection;
