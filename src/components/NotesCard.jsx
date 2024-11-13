import { useState, useEffect } from "react";
import { MultiplicationSignIcon } from "hugeicons-react";
import PropTypes from "prop-types";

const NotesCard = ({
  title,
  content,
  onClose,
  handleTitleClick,
  handleContentClick,
  onDelete,
}) => {
  const [notesTitleEditable, setNotesTitleEditable] = useState(false);
  const [notesContentEditable, setNotesContentEditable] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClickTitle = () => {
    setNotesTitleEditable(true);
  };

  const handleClickContent = () => {
    setNotesContentEditable(true);
  };

  const handleTitleBlur = () => {
    setNotesTitleEditable(false);
  };

  const handleContentBlur = () => {
    setNotesContentEditable(false);
  };

  // Handle animation and body scroll
  useEffect(() => {
    document.body.classList.add("no-scroll");
    
    // Add active class after a small delay to ensure initial state is rendered
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 10);

    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timer);
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
    setTimeout(() => {
      onClose();
    }, 400); // Match this with your CSS transition duration
  };

  return (
    <div className="card-overlay" onClick={handleClose}>
      <div 
        className={`notes-card ${isActive ? 'active' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notes-card-title">
          {notesTitleEditable ? (
            <input
              value={title}
              onChange={handleTitleClick}
              onBlur={handleTitleBlur}
              autoFocus
              placeholder="Add Title"
            />
          ) : (
            <p onClick={handleClickTitle}>{title || "Add Title"}</p>
          )}
        </div>
        <div className="notes-card-content">
          {notesContentEditable ? (
            <textarea
              value={content}
              onChange={handleContentClick}
              spellCheck={false}
              onBlur={handleContentBlur}
              placeholder="Add content..."
            />
          ) : (
            <p onClick={handleClickContent}>{content || "Add content..."}</p>
          )}
        </div>

        <button className="close-button" onClick={handleClose}>
          <MultiplicationSignIcon />
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
};

export default NotesCard;