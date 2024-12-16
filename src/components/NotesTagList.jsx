import { NavLink } from "react-router-dom";

const NotesTagList = () => {
  return (
    <div className="notes-tag-list">
      <ul>
        <li>
          <NavLink
            to="/main"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/starred"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Starred
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main/deleted"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Deleted
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NotesTagList;
