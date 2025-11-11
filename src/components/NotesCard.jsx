import { useState, useEffect, useRef, useContext } from "react";
import { MultiplicationSignIcon, Bookmark02Icon, Undo03Icon } from "hugeicons-react";
import { ThemeContext } from "./context/ThemeContext";
import PropTypes from "prop-types";

const NotesCard = ({
  title,
  content,
  onClose,
  handleTitleClick,
  handleContentClick,
  onDelete,
  onSave,
  star,
  onRestore,
  isDeleted
}) => {
  const [editMode, setEditMode] = useState({
    noteTitle: false,
    noteContent: false,
  });
  const [isActive, setIsActive] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const animationDuration = 400;
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  // Toggling edit mode
  const handleClickTitle = () => {
    setEditMode(prevState => ({ ...prevState, noteTitle: true }));
    setTimeout(() => titleInputRef.current?.focus(), 0);
    if (title === "Add title") {
      handleTitleClick({ target: { value: "" } });
    }
  };
  const handleClickContent = () => {
    setEditMode(prevState => ({ ...prevState, noteContent: true }));
    setTimeout(() => contentInputRef.current?.focus(), 0);
    if (content === "Add content") {
      handleContentClick({ target: { value: "" } });
    }
  };

  // Handle out of focus inputs
  const handleTitleBlur = () => {
    if (!title.trim()) {
      handleTitleClick({ target: { value: "Add title" } });
    }
    setEditMode((prevState) => ({ ...prevState, noteTitle: false }));
  };
  const handleContentBlur = () => {
    if (!content.trim()) {
      handleContentClick({ target: { value: "Add content" } });
    }
    setEditMode((prevState) => ({ ...prevState, noteContent: false }));
  };

  // Handle animation and body scroll
  useEffect(() => {
    document.body.classList.add("no-scroll");
    setIsActive(true);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  // Handle closing animation
  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsActive(false);
    // Wait for animation to complete before actually closing
    setTimeout(() => onClose(), animationDuration);
  };

  return (
    <div className="card-overlay" onClick={handleClose}>
      <div
        className={darkMode ? `notes-card dark ${isActive ? "active" : ""}` : `notes-card ${isActive ? "active" : ""}`}
        // Prevent overlay click from closing the card
        onClick={(e) => e.stopPropagation()}
      >
        <div className={darkMode ? "notes-card-title dark" : "notes-card-title"}>
          {editMode.noteTitle ? (
            <input
              value={title}
              onChange={handleTitleClick}
              ref={titleInputRef}
              onBlur={handleTitleBlur}
            />
          ) : (
            <p onClick={handleClickTitle}>{title || "Add Title"}</p>
          )}
        </div>
        <div className={darkMode ? "notes-card-content dark" : "notes-card-content"}>
          {editMode.noteContent ? (
            <textarea
              value={content}
              onChange={handleContentClick}
              spellCheck={false}
              onBlur={handleContentBlur}
              ref={contentInputRef}
            />
          ) : (
            <p onClick={handleClickContent}>
              {content === "Click to add content..."
                ? "Click to add content..."
                : content}
            </p>
          )}
        </div>

        <button className="close-button" onClick={handleClose}>
          <MultiplicationSignIcon />
        </button>
        {isDeleted ? (
          <button
            onClick={onRestore}
            className="restore-button"
          >            
            <Undo03Icon size={22} />
          </button>
        ) : (
          <>
            <button
              className="save-button"
              onClick={() => {
                onSave();
              }}
            >
              Save
            </button>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete
            </button>
            {star && <div className="bookmark"><Bookmark02Icon size={22} /></div>}
          </>
        )
        }
      </div>
    </div>
  );
};

NotesCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleTitleClick: PropTypes.func.isRequired,
  handleContentClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  star: PropTypes.bool.isRequired,
  onRestore: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default NotesCard;
