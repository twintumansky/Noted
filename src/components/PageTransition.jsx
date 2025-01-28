import { useState } from 'react';
import Intro from './Intro';
import NotesSection from './NotesSection';

function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = () => {
    setIsTransitioning(true);
  };

  return (
    <div className="page-container">
      <div className={`page intro ${isTransitioning ? 'slide-up' : ''}`}>
        <Intro onArrowClick={handleTransition} />
      </div>
      <div className={`page notes ${isTransitioning ? 'slide-up' : ''}`}>
        <NotesSection />
      </div>
    </div>
  );
}

export default PageTransition; 