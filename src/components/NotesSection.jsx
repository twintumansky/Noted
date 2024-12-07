import { useState, useEffect, useRef } from "react";
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

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Scroll effect only when new notes are added
  useEffect(() => {
    if (notes.length > lastNotesLengthRef.current) {
      const timer = setTimeout(() => {
        const noteArea = noteAreaRef.current;
        const lastCard = noteArea?.querySelector(".card-container > *:last-child");
        if (noteArea && lastCard) {
          const containerHeight = noteArea.clientHeight;
          const lastCardBottom = lastCard.offsetTop + lastCard.offsetHeight;
          const scrollOffset = lastCardBottom - containerHeight + 100; // Add padding at bottom
          
          noteArea.scrollTo({
            top: scrollOffset,
            behavior: "smooth"
          });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    lastNotesLengthRef.current = notes.length;
  }, [notes]);

  function handleClick() {
    const createdAt = new Date();
    const newNote = {
      id: Date.now(),
      title: "Add title",
      content: "Add content",
      createdAt: createdAt,
      starred: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]);
      // localStorage.removeItem("notes");
    }
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

  function handleStarredNotes() {
    const newStarred = !starred;
    setStarred(newStarred);

    setNotes((prevCards) =>
      prevCards.map((note) =>
        note.id === currentNoteId ? { ...note, starred: newStarred } : note
      )
    );

    const currentNote = notes.find((note) => note.id === currentNoteId);
    if (currentNote && newStarred) {
      setStarredNotes((prevState) => [
        ...prevState,
        { ...currentNote, starred: newStarred },
      ]);
    }
  }

  function handleDeleteNote() {
    setNotes((prevCards) =>
      prevCards.filter((card) => card.id !== currentNoteId)
    );
  }

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
          {notes.length === 0 ? (
            <p>This is where you can manage your notes...</p>
          ) : (
            <>
              <div className="card-container">
                {notes.map((notes) => (
                  <Notes
                    key={notes.id}
                    notes={notes}
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
