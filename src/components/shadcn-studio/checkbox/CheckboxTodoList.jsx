import { useEditor } from "tldraw";
import { Checkbox } from "@/components/ui/checkbox";

export const CheckboxTodoList = ({ shape }) => {
  const editor = useEditor();
  const { checked, text } = shape.props;

  const handleCheckedChange = (newChecked) => {
    editor.updateShape({
      id: shape.id,
      type: "todo",
      props: { checked: newChecked === true },
    });
  };

  const handleTextChange = (e) => {
    editor.updateShape({
      id: shape.id,
      type: "todo",
      props: { text: e.target.value },
    });
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="w-full h-full flex items-center p-3 gap-2">
      <div onPointerDown={stopPropagation} onClick={stopPropagation}>
        <Checkbox checked={checked} onCheckedChange={handleCheckedChange} />
      </div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Add item..."
        className={`
            flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-600/70
            select-text
            ${checked ? "line-through opacity-50" : ""}
          `}
        onKeyDown={stopPropagation}
        onKeyUp={stopPropagation}
        onPointerDown={stopPropagation}
      />
    </div>
  );
};
