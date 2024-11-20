import { useState, useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';
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
  // const [lastNoteColor, setLastNoteColor] = useState(null);
  // const [currentNoteColor, setCurrentNoteColor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const scrollContainerRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

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
      direction: 'vertical',
      gestureDirection: 'vertical',
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
      lenisInstance.resize();
      lenisInstance.scrollTo('bottom', {
        immediate: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }, 150); // Slightly longer timeout to ensure DOM update

    return () => clearTimeout(timer);
  }, [notes.length, lenisInstance]); // Only trigger on notes length change

  // const colors = [
  //   "#caaf9e", //dark-beige
  //   "#b2bf88", //apple-green
  //   "#fed78e", //yellow
  //   "#d3c8e9", //purple
  //   "#fec18f", //orange
  //   "#e4e8c8", //beige
  //   "#cf9f95", //clay-pot
  // ];
  // const getRandomColors = () => {
  //   const availableColors = colors.filter((color) => color !== lastNoteColor);
  //   const getColor =
  //     availableColors[Math.floor(Math.random() * availableColors.length)];
  //   setLastNoteColor(getColor);
  //   return getColor;
  // };

  function handleClick() {
    // const randomColor = getRandomColors();
    const createdAt = new Date();
    const newNote = {
      id: Date.now(),
      title: "",
      content: "Click to add content...",
      createdAt,
      // color: randomColor,
    };

    // Update state using callback to ensure we have the latest state
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all notes?")) {
      setNotes([]);
      localStorage.removeItem("notes");
    }
  }

  function handleCardClick(id, title, content, /*color*/) {
    setCurrentNoteId(id);
    setNotesTitle(title);
    setNotesContent(content);
    // setCurrentNoteColor(color);
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
      {/* <div className="floating-buttons">
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
      </div> */}
      <>
        <NavBar buttonDarkMode={toggleDarkMode} addButton={handleClick} deleteButton={handleClearAll}/>
        <main className="note-area" ref={scrollContainerRef}>

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
            </>
          )}
        </main>
      </>

      {cardPopover && (
        <NotesCard
          title={notesTitle}
          content={notesContent}
          // bgColor={currentNoteColor}
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
