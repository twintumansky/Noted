import { forwardRef } from 'react';
import '../App.css';

const NotesSection = forwardRef( (props, ref) => {
return (
    <div className='notesSection' ref={ref}>
        <p>ADD NEW NOTES</p>
    </div>
);
});

NotesSection.displayName = 'NotesSection';
export default NotesSection;