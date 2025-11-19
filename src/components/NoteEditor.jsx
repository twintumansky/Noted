import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="tiptap-content" />
      </div>
    )
  }
  
  export default NoteEditor