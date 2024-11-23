import { useState, useEffect, useRef } from "react";
import { MultiplicationSignIcon } from "hugeicons-react";
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
}) => {
  const [editMode, setEditMode] = useState({
    noteTitle: false,
    noteContent: false,
  });
  const [isActive, setIsActive] = useState(false);
  const animationDuration = 400;
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const handleClickTitle = () => {
    setEditMode((prevState) => ({ ...prevState, noteTitle: true }));
    setTimeout(() => titleInputRef.current?.focus(), 0);
  };
  const handleClickContent = () => {
    setTimeout(() => contentInputRef.current?.focus(), 0);
    if (content === "Click to add content...") {
      handleContentClick({ target: { value: "" } });
    }

    setEditMode((prevState) => ({ ...prevState, noteContent: true }));
  };

  const handleTitleBlur = () => {
    setEditMode((prevState) => ({ ...prevState, noteTitle: false }));
  };
  const handleContentBlur = () => {
    if (!content.trim()) {
      handleContentClick({ target: { value: "Click to add content..." } });
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
      e.preventDefault(); //lessonToLearn
      e.stopPropagation(); //lessonToLearn
    }

    setIsActive(false);
    // Wait for animation to complete before actually closing
    setTimeout(() => onClose(), animationDuration);
  };

  return (
    <div className="card-overlay" onClick={handleClose}>
      <div
        className={`notes-card ${isActive ? "active" : ""}`}
        // Prevent overlay click from closing the card
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notes-card-title">
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
        <div className="notes-card-content">
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
        <button
          className="save-button"
          onClick={(e) => {
            e.stopPropagation();
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
        {star && <div className="bookmark">🔖</div>}
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
};

export default NotesCard;
