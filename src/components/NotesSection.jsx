import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./Navbar";
import NotesCard from "./NotesCard";
import NotesTagList from "./NotesTagList";
import Notes from "./Notes";

function NotesSection() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [notesTitle, setNotesTitle] = useState("");
  const [notesContent, setNotesContent] = useState("");
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [cardPopover, setCardPopover] = useState(false);
  const [starredNotes, setStarredNotes] = useState([]);
  const [starred, setStarred] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem("mode");
    return mode ? JSON.parse(mode) : false;
  });
  const noteAreaRef = useRef(null);
  const lastNotesLengthRef = useRef(notes.length);
  const location = useLocation();

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const starNote = notes.filter((note) => note.starred);
    setStarredNotes(starNote);
  }, [notes]);

  // Scroll effect only when new notes are added
  useEffect(() => {
    if (notes.length > lastNotesLengthRef.current) {
      const timer = setTimeout(() => {
        const noteArea = noteAreaRef.current;
        const lastCard = noteArea?.querySelector(
          ".card-container > *:last-child"
        );
        if (noteArea && lastCard) {
          const containerHeight = noteArea.clientHeight;
          const lastCardBottom = lastCard.offsetTop + lastCard.offsetHeight;
          const scrollOffset = lastCardBottom - containerHeight + 100; // Add padding at bottom

          noteArea.scrollTo({
            top: scrollOffset,
            behavior: "smooth",
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    lastNotesLengthRef.current = notes.length;
  }, [notes]);

  function handleClick() {
    const newNote = {
      id: Date.now(),
      title: "Add title",
      content: "Add content",
      createdAt: new Date(),
      starred: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]);
    }
  }

  function handleCardClick(id, title, content) {
    setCurrentNoteId(id);
    setNotesTitle(title);
    setNotesContent(content);
    const note = notes.find((note) => note.id === id);
    setStarred(note?.starred || false);
    setCardPopover(true);
  }

  function handleClosePopover() {
    setNotes((prevCards) =>
      prevCards.map((cards) =>
        cards.id === currentNoteId
          ? { ...cards, title: notesTitle, content: notesContent }
          : cards
      )
    );
  }

  function handleStarredNotes() {
    const newStarred = !starred;
    setStarred(newStarred);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === currentNoteId ? { ...note, starred: newStarred } : note
      )
    );

    if (newStarred) {
      setStarredNotes((prevState) => [...prevState, currentNoteId]);
    } else {
      setStarredNotes((prevState) =>
        prevState.filter((id) => id !== currentNoteId)
      );
    }
  }

  function handleDeleteNote() {
    setNotes((prevCards) =>
      prevCards.filter((card) => card.id !== currentNoteId)
    );
  }

  const getDisplayedNotes = () => {
    const path = location.pathname;
    if (path === "/main/starred") {
      return starredNotes;
    }
    if (path === "/main/deleted") {
      return [];
    }
    return notes;
  };
  const displayedNotes = getDisplayedNotes();

  return (
    <div
      className={
        darkMode ? "notesSection-container dark" : "notesSection-container"
      }
    >
      <>
        <NavBar
          buttonDarkMode={toggleDarkMode}
          addButton={handleClick}
          deleteButton={handleClearAll}
        />
        <div ref={noteAreaRef} className="note-area">
          <NotesTagList starredNotes={starredNotes} />
          {displayedNotes.length === 0 ? (
            <p>No notes to display in this section...</p>
          ) : (
            <>
              <div className="card-container">
                {displayedNotes.map((note) => (
                  <Notes
                    key={note.id}
                    mode={darkMode}
                    notes={note}
                    onCardClick={(id, title, content) =>
                      handleCardClick(id, title, content)
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </>
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
          onSave={() => {
            handleStarredNotes();
          }}
          star={
            notes.find((note) => note.id === currentNoteId)?.starred || false
          }
        />
      )}
    </div>
  );
}

export default NotesSection;
