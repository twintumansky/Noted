import { Tldraw, toRichText } from 'tldraw';
import { useCanvas } from '@/context/CanvasContext';
import { useCallback } from 'react';
import 'tldraw/tldraw.css';

export default function Board() {

  const { setEditor } = useCanvas();

  const handleMount = useCallback((editor) => {
    setEditor(editor);
    editor.updateInstanceState({ isGridMode: true });
    const currentShapes = editor.getCurrentPageShapes();
    if (currentShapes == 0) {
      editor.createShape({
        type: 'note',
        x: 100,
        y: 100,
        props: {
          color: 'yellow',
          labelColor: 'black',
          richText: toRichText('Welcome to Noted...'),
          size: 'm',
          font: 'draw',
          align: 'middle',
          verticalAlign: 'middle',
        },
      });
    }
  }, [setEditor]);

return (
  <div className="absolute inset-0 overflow-hidden bg-[#fbfbfb]">
    <Tldraw
      hideUi={true}
      inferDarkMode={false}
      onMount={handleMount}
    />
    <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
      100%
    </div>
  </div>
)
};