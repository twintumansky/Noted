import { Tldraw } from 'tldraw'
import { useCanvas } from '@/context/CanvasContext'
import 'tldraw/tldraw.css'

export default function Board() {

  const { setEditor } = useCanvas();

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#fbfbfb]">
      <Tldraw
        hideUi={true}
        inferDarkMode={false}
        onMount={(editor) => {
          setEditor(editor);
          editor.updateInstanceState({ isGridMode: true });
        }}
      />
      <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
        100%
      </div>
    </div>
  )
};