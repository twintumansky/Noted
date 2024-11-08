import { useEffect } from 'react';
import { MultiplicationSignIcon } from 'hugeicons-react';
import PropTypes from "prop-types";


const NotesCard = ({ onClose }) => {
    useEffect( ()=> {
        console.log('component mounted')
        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
            console.log('component unmounted')
        };
    }, [])

    return (
        <div className="card-overlay" onClick = {onClose}>
            <div className='notes-card' onClick={(e) => e.stopPropagation()}>
                <h3>Title </h3>
                <p>Input field</p>
                <button className='close-button' onClick={onClose}><MultiplicationSignIcon /></button>
            </div>
        </div>
    )
};

NotesCard.propTypes = {
    onClose:PropTypes.func.isRequired,
};
export default NotesCard;
