import { Tldraw, useValue } from "tldraw";
import { useCanvas } from "@/context/CanvasContext";
import { useCallback } from "react";
import { FolderUtil } from "./shapes/Folder";
import { NotebookUtil } from "./shapes/Notebook";
import { NoteUtil } from "./shapes/Note";
import { TodoUtil } from "./shapes/Todo";
import "tldraw/tldraw.css";

const customShapes = [FolderUtil, NotebookUtil, NoteUtil, TodoUtil];

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
        //NOTEBOOK SHAPE
        editor.createShape({
          type: "todo",
          x: 500,
          y: 300,
        });
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
