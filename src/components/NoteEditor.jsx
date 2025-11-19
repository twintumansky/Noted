import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
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
        <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        <EditorContent editor={editor} className="tiptap-content" />
      </div>
    )
  }
  
  export default NoteEditor