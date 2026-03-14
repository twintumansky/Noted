import { useValue } from "tldraw";
import { useCanvas } from "@/context/CanvasContext";
import {
  Folder03Icon,
  Notebook02Icon,
  File01Icon,
  ParagraphBulletsPoint01Icon,
  StickyNote03Icon,
  Add01Icon,
  PencilIcon,
  SquareIcon,
  ArrowUpRight01Icon,
  EraserIcon,
  Cursor02Icon,
  Hold03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Toolbar() {
  const { editor } = useCanvas();

  const currentToolId = useValue(
    "current tool id",
    () => editor?.getCurrentToolId(),
    [editor],
  );

  const setTool = (tool) => {
    if (editor) editor.setCurrentTool(tool);
  };

  const tools = [
    { id: "select", icon: Cursor02Icon, label: "Select" },
    { id: "hand", icon: Hold03Icon, label: "Hand" },
    { id: "draw", icon: PencilIcon, label: "Draw" },
    { id: "geo", icon: SquareIcon, label: "Shape" },
    { id: "arrow", icon: ArrowUpRight01Icon, label: "Arrow" },
    { id: "eraser", icon: EraserIcon, label: "Eraser" },
  ];

  const createShapes = (type, title) => {
    if (!editor) return;

    const center = editor.getViewportScreenCenter();
    editor.createShape({
      type: type,
      x: center.x - 150,
      y: center.y - 100,
      props: {
        title: title,
        isExpanded: false,
      },
    });
  };

  const shapesArray = [
    { id: 'folder', label: 'Folder', icon: Folder03Icon },
    { id: 'notebook', label: 'Notebook', icon: Notebook02Icon },
    { id: 'note', label: 'Note', icon: File01Icon },
    { id: 'todo', label: 'Todo', icon: ParagraphBulletsPoint01Icon },
    { id: 'stickynote', label: 'Sticky note', icon: StickyNote03Icon },
  ];

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="p-2 text-slate-600 hover:bg-popover rounded-xl transition-all"
            title="Add shapes"
          >
            <HugeiconsIcon icon={Add01Icon} size={20} />
          </button>
        </PopoverTrigger>
        <PopoverContent side='top' align='start' className="absolute bottom-2 w-48 p-2 z-20 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border-slate-200">
          <div className='grid gap-1'>
            {shapesArray.map((shape) => {
              return (
                <button
                  key={shape.id}
                  onClick={() => { createShapes(shape.id, `New ${shape.label}`) }}
                  className=' flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-popover rounded-xl transition-colors text-sm font-medium'
                  title={shape.label}>
                  <HugeiconsIcon icon={shape.icon} size={20} />
                  {shape.label}
                </button>
              )
            })}
          </div>
        </PopoverContent>
      </Popover>

      {/* <div className="w-[1px] h-6 bg-[#d0c8ca] mx-1" /> */}
      {tools.map((tool) => {
        const isActive = currentToolId === tool.id;
        return (
          <button
            key={tool.id}
            onClick={() => setTool(tool.id)}
            className={`p-2 rounded-xl transition-all ${isActive
              ? "bg-popover text-popover-foreground shadow-inner"
              : "text-slate-600 hover:bg-popover"
              }`}
            title={tool.label}
          >
            <HugeiconsIcon icon={tool.icon} size={20} />
          </button>
        );
      })}
    </div>
  );
}
