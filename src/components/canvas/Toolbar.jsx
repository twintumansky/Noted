import { useCanvas } from '@/context/CanvasContext';
import { 
  PencilIcon, 
  SquareIcon,
  ArrowUpRight01Icon, 
  EraserIcon,
  Cursor02Icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Toolbar() {
  const { editor } = useCanvas();

  const setTool = (tool) => {
    if (editor) editor.setCurrentTool(tool);
  };

  const tools = [
    { id: 'select', icon: Cursor02Icon, label: 'Select' },
    { id: 'draw', icon: PencilIcon, label: 'Draw' },
    { id: 'geo', icon: SquareIcon, label: 'Shape' },
    { id: 'arrow', icon: ArrowUpRight01Icon, label: 'Arrow' },
    { id: 'eraser', icon: EraserIcon, label: 'Eraser' },
  ];

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-sm">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => setTool(tool.id)}
          className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600 hover:text-slate-900"
          title={tool.label}
        >
          <HugeiconsIcon icon={tool.icon} size={20} />
        </button>
      ))}
    </div>
  );
}