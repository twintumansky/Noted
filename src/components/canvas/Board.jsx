import { Tldraw, useValue } from "tldraw";
import { useCanvas } from "@/context/CanvasContext";
import { useCallback } from "react";
import { FolderUtil } from "./Folder";
import { NotebookUtil } from "./Notebook";
import "tldraw/tldraw.css";

const customShapes = [FolderUtil, NotebookUtil];

export default function Board() {
  const { editor, setEditor } = useCanvas();

  const zoomLevel = useValue(
    "zoom-level",
    () => {
      if (!editor) return 1;
      return Math.round(editor.getZoomLevel() * 100);
    },
    [editor],
  );

  const handleMount = useCallback(
    (editor) => {
      setEditor(editor);
      const currentShapes = editor.getCurrentPageShapes();
      if (currentShapes == 0) {
        //FOLDER SHAPE
        editor.createShape({
          type: "folder",
          x: 200,
          y: 300,
        });

        // NOTEBOOK SHAPE
        // editor.createShape({
        //   type: "notebook",
        //   x: 500,
        //   y: 300,
        // });

        //NOTE SHAPE
        // editor.createShape({
        //   type: 'note',
        //   x: 100,
        //   y: 100,
        //   props: {
        //     color: 'yellow',
        //     labelColor: 'black',
        //     richText: toRichText('Welcome to Noted...'),
        //     size: 'm',
        //     font: 'draw',
        //     align: 'middle',
        //     verticalAlign: 'middle',
        //   },
        // });
      }
    },
    [setEditor],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Tldraw
        hideUi={true}
        inferDarkMode={false}
        onMount={handleMount}
        shapeUtils={customShapes}
      />
      <div className="absolute bottom-4 right-4 z-20 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
        {zoomLevel}%
      </div>
    </div>
  );
}
