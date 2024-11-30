import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ArrowUpRight01Icon } from "hugeicons-react";
import NavBar from "./Navbar";
import NotesCard from "./NotesCard";
import NotesTagList from "./NotesTagList";
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
  const [starredNotes, setStarredNotes] = useState([]);
  const [starred, setStarred] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lenisInstance, setLenisInstance] = useState(null);

  const scrollContainerRef = useRef(null);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const observer = new ResizeObserver(() => {
      lenis.resize();
    });

    observer.observe(scrollContainerRef.current);

    // Cleanup
    return () => {
      lenis.destroy();
      observer.disconnect();
      setLenisInstance(null);
    };
  }, []);

  useEffect(() => {
    if (!lenisInstance || !scrollContainerRef.current) return;

    // Only scroll when notes array changes (new note added)
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.card-element');
      if (cards.length > 0) {
        const lastCard = cards[cards.length - 1];
        const containerRect = container.getBoundingClientRect();
        const cardRect = lastCard.getBoundingClientRect();

        // Check if the last card is below the viewport
        const isCardBelowViewport = cardRect.top > (containerRect.top + containerRect.height);

        if (isCardBelowViewport) {
          lenisInstance.resize();
          lenisInstance.scrollTo(lastCard, {
            immediate: false,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    }, 150); // Slightly longer timeout to ensure DOM update

    return () => clearTimeout(timer);
  }, [notes.length, lenisInstance]); // Only trigger on notes length change

  function handleClick() {
    const createdAt = new Date();
    const newNote = {
      id: Date.now(),
      title: "Create a new Note",
      content: "Add to your note content...",
      createdAt,
      starred,
    };

    // Update state using callback to ensure we have the latest state
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]);
      localStorage.removeItem("notes");
    }
  }

  function handleCardClick(id, title, content) {
    const currentNote = notes.find(note => note.id === id);
    setCurrentNoteId(id);
    setNotesTitle(title);
    setNotesContent(content);
    setStarred(currentNote?.starred || false);
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

    setNotes(prevCards =>
      prevCards.map(note =>
        note.id === currentNoteId ? { ...note, starred: newStarred } : note
      )
    );

    const currentNote = notes.find(note => note.id === currentNoteId);
    if (currentNote && newStarred) {
      setStarredNotes(prevState => [...prevState, { ...currentNote, starred: newStarred }]);
    }
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
      <>
        <NavBar
          buttonDarkMode={toggleDarkMode}
          addButton={handleClick}
          deleteButton={handleClearAll}
        />
        <main className="note-area" ref={scrollContainerRef}>
          <NotesTagList starredNotes={starredNotes} />
          {notes.length === 0 ? (
            <p>This is where you can manage your notes...</p>
          ) : (
            <>
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
                      <button
                        className="arrow-button"
                        onClick={() =>
                          handleCardClick(notes.id, notes.title, notes.content)
                        }
                      >
                        <ArrowUpRight01Icon size={30} />
                      </button>
                      <div className="card-element-inner">
                        <div className="card-element-title">{notes.title}</div>
                        <div className="card-element-content">
                          {notes.content}
                        </div>
                      </div>
                      <div className="card-element-date">
                        {formatDate(new Date(notes.createdAt))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
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
};

NotesSection.displayName = "NotesSection";
export default NotesSection;
