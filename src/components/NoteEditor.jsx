import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react'
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar';
import './NoteEditor.css';
import PropTypes from "prop-types";

const NoteEditor = ({ content, onUpdate, onBlur }) => {
    const editor = useEditor({
      extensions: [
        StarterKit, // Handles bold, italic, history, bullet lists
        TaskList,
        TaskItem.configure({
        nested: true,
        }),
        Placeholder.configure({
        placeholder: 'Start typing...',
        }),
      ],
      content: content,
      autofocus: 'end',
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        onUpdate(html);
      },
      onBlur: () => {
        onBlur();
      }
    })
  
    if (!editor) {
      return null
    }
  
    return (
      <div className="editor-container">
        <MenuBar editor={editor} />
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }} className="bubble-menu">
          <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>Bold</button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>Italic</button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>Strike</button>
      </BubbleMenu>
        <EditorContent editor={editor} className="tiptap-content" />
      </div>
    )
  }

  NoteEditor.propTypes = {
    content: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  };
  
  export default NoteEditor;