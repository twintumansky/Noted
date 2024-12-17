import { ArrowUpRight01Icon } from "hugeicons-react";
import PropTypes from "prop-types";

const Notes = ({ notes, onCardClick, mode }) => {
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
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

    return `${day} ${month} ${year}`;
  }
  return (
    <>
      <div
        className={
          mode ? "card-element dark" : "card-element"
        }
        onClick={() => onCardClick(notes.id, notes.title, notes.content)}
      >
        <button
          className="arrow-button"
          onClick={() => onCardClick(notes.id, notes.title, notes.content)}
        >
          <ArrowUpRight01Icon size={30} />
        </button>
        <div className="card-element-inner">
          <div className="card-element-title">{notes.title}</div>
          <div className="card-element-content">{notes.content}</div>
        </div>
        <div className="card-element-date">
          {formatDate(new Date(notes.createdAt))}
        </div>
      </div>
    </>
  );
};

export default Notes;
Notes.propTypes = {
  mode: PropTypes.bool.isRequired,
  notes: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
