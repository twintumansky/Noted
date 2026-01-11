import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
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

  // Truncate content to show only first 100 characters
  // const truncateContent = (text) => {
  //   return text.length > 100 ? `${text.substring(0, 100)}...` : text;
  // };

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
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            size={30}
            strokeWidth={2}
          />
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


//test feature for preview on notes card---------------------------

// function Notes({ mode, notes, onCardClick }) {
//   // We need to calculate the preview text
//   const previewContent = notes.content 
//     ? notes.content.substring(0, 150) + '...' // Limit length for preview
//     : 'No content...';

//   return (
//     <div 
//       className={/* ... classes ... */} 
//       onClick={() => onCardClick(notes.id, notes.title, notes.content)}
//     >
//       {/* ... Title and Date ... */}

//       {/* 👇 FIX: Use dangerouslySetInnerHTML for HTML preview */}
//       <div 
//         className="note-card-preview"
//         // Note: The __html value is the raw HTML string
//         dangerouslySetInnerHTML={{ __html: previewContent }}
//       />
//     </div>
//   );
// }

//for previewing content on Notes -------------------------------
// const getPreviewContent = (htmlContent) => {
//   if (!htmlContent) return 'No content...';

//   // Create a temporary element to safely parse the HTML string
//   const doc = new DOMParser().parseFromString(htmlContent, 'text/html');

//   // Find the content inside the first block element (like <p>, <ul>, etc.)
//   const firstBlock = doc.body.children[0];

//   // Return the inner HTML of the first block, limited to 150 chars
//   if (firstBlock) {
//       let html = firstBlock.outerHTML;
//       if (html.length > 150) {
//           // A rough cut-off, but ensures we don't display the entire note
//           html = html.substring(0, 150) + '...'; 
//       }
//       return html;
//   }
//   return 'No content...';
// }

// // ... inside the Notes component ...

// const previewHtml = getPreviewContent(notes.content);

// // ... in the return block ...
// <div 
//   className="note-card-preview"
//   dangerouslySetInnerHTML={{ __html: previewHtml }}
// />
//---------------------------------------------------

export default Notes;
Notes.propTypes = {
  mode: PropTypes.bool.isRequired,
  notes: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
