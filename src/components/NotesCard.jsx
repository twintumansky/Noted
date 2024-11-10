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

  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="card-overlay" onClick={onClose}>
      <div className="notes-card" onClick={(e) => e.stopPropagation()}>
        <div className="notes-card-title">
          {notesTitleEditable ? (
            <input
              value={title}
              onChange={handleTitleClick}
              onBlur={handleTitleBlur}
              autoFocus
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
              // autoFocus
              spellCheck={false}
              onBlur={handleContentBlur}
            />
          ) : (
            <p onClick={handleClickContent}>{content || "Add content..."}</p>
          )}
        </div>

        <button className="close-button" onClick={onClose}>
          <MultiplicationSignIcon />
        </button>
        <button className="delete-button" onClick={onDelete}>
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
