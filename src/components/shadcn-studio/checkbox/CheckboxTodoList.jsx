import { useId } from "react";
import { useEditor } from "tldraw";
import { Checkbox } from "@/components/ui/checkbox";

export const CheckboxTodoList = ({ shape }) => {
  const id = useId();
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

  return (
    <div className="w-full h-full flex items-center p-3 gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        className={`flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-600/70 ${checked ? "line-through opacity-50" : ""}`}
      />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Add item..."
        className={`
            flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-600/70
            /* Apply strikethrough and fade out text when checked */
            ${checked ? "line-through opacity-50" : ""}
          `}
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      />
    </div>
  );
};
