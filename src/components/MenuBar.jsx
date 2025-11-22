import { BubbleMenu } from '@tiptap/react';
import './MenuBar.css';
import PropTypes from "prop-types";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const isActive = (type, opts) => (editor.isActive(type, opts) ? 'is-active' : '');

  return (
    <>
      {editor && (
        <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={isActive('bold')}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={isActive('italic')}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={isActive('strike')}
          >
            Strike
          </button>
        </BubbleMenu>
      )}

      <div className="menu-bar">
        <div className="menu-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`menu-btn ${isActive('bold')}`}
            data-tooltip="Bold"
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`menu-btn ${isActive('italic')}`}
            data-tooltip="Italic"
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`menu-btn ${isActive('strike')}`}
            data-tooltip="Strikethrough"
          >
            S
          </button>
        </div>

        <div className="menu-divider"></div>

        <div className="menu-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`menu-btn ${isActive('bulletList')}`}
            data-tooltip="Bullet List"
          >
            • List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`menu-btn ${isActive('orderedList')}`}
            data-tooltip="Numbered List"
          >
            1. List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={`menu-btn ${isActive('taskList')}`}
            data-tooltip="To-Do List"
          >
            ✓ Task
          </button>
        </div>
      </div>
    </>
  );
};
MenuBar.propTypes = {
  editor: PropTypes.func.isRequired,
}

export default MenuBar;