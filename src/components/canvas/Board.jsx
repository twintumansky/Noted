import { Tldraw, toRichText } from 'tldraw';
// import { NoteShapeUtil } from './NoteShape';
import { useCanvas } from '@/context/CanvasContext';
import 'tldraw/tldraw.css';

// const customShapes = [NoteShapeUtil]
export default function Board() {

  const { setEditor } = useCanvas();

  const handleMount = (editor) => {
    setEditor(editor);
    editor.updateInstanceState({ isGridMode: true });
		editor.createShape({
      type: 'note',
      x: 100,
      y: 100,
      props: {
        color: 'yellow',
        labelColor: 'black',
        richText: toRichText('My note'),
        size: 'm',
        font: 'draw',
        align: 'middle',
        verticalAlign: 'middle',
      },
    })

		// editor.selectAll()

		// editor.zoomToSelection({
		// 	animation: { duration: 5000 },
		// })
	}

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#fbfbfb]">
      <Tldraw
        hideUi={true}
        inferDarkMode={false}
        // shapeUtils={customShapes}
        onMount={handleMount}
      />
      <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
        100%
      </div>
    </div>
  )
};