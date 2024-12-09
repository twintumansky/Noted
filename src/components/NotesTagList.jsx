import { Link } from "react-router-dom";

const NotesTagList = () => {
  return (
    <div className="notes-tag-list">
      <ul>
        <li>
          <Link to="/main">All</Link>
        </li>
        <li>
          <Link to="/main/starred">Starred</Link>
        </li>
        <li>
          <Link to="/main/Deleted">Deleted</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotesTagList;
