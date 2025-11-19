import { useEditor, EditorContent } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar';
import './NoteEditor.css';

const NoteEditor = ({ content, onUpdate }) => {
    const editor = useEditor({
      extensions: [
        StarterKit, // Handles bold, italic, history, bullet lists
      ],
      content: content,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        onUpdate(html);
      },
    })
  
    if (!editor) {
      return null
    }
  
    return (
      <div className="editor-container">
        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        <EditorContent editor={editor} className="tiptap-content" />
      </div>
    )
  }
  
  export default NoteEditor