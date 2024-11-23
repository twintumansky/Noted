import PropTypes from "prop-types";
const NotesTagList = ({ starredNotes }) => {

  function showStarredNotes() {
    console.log(starredNotes);
  };

  return (
    <div className='notes-tag-list'>
        <button>All Notes</button>
        <button onClick={()=>{showStarredNotes()}}>Starred</button>
        <button>Date</button>
        <button>Sort</button>
        <button>Deleted</button>
    </div>
  );
};

export default NotesTagList;
NotesTagList.propTypes = {
  starredNotes: PropTypes.array.isRequired,
};