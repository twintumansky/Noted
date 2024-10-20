import Sidebar from './Sidebar'
import NavBar from './Navbar'
import { Add01Icon } from 'hugeicons-react';
import { useState, forwardRef } from "react";
import "../App.css";

const NotesSection = forwardRef((darkMode, toggleDarkMode, ref) => {
  const [intro, setIntro] = useState('This is where you can add, edit, and manage your notes.')
  const [card, setCard] = useState([])

  function handleClick() {
    setIntro("");
    setCard( prevState => [
      ...prevState,
      {id:Date.now(), content:'Add you note content...'}
    ]
    );
  }


  return (

    <div className={darkMode? "notesSection-container dark": "notesSection-container"} ref={ref}>
      <Sidebar />
      <div className={darkMode? "main-content dark": "main-content"}>
        <NavBar 
          buttonDarkMode={toggleDarkMode}
        />
        <main className="note-area">
          <p>{intro}</p>
          <div className='add-notes-button'>
            <button onClick={handleClick}><Add01Icon color='blue' /></button>
          </div>
          <div className='card-container'>
            {card.map(card => (
              <div key={card.id} className='card-element'>
                {card.content}
              </div>
            )) 
            }
          </div>
        </main>
      </div>
    </div>
  );
});

NotesSection.displayName = "NotesSection";
export default NotesSection;