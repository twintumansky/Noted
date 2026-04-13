import { useEffect, useRef } from "react";
import { useEditor, useIsEditing } from "tldraw";
import { Checkbox } from "@/components/ui/checkbox";

export const CheckboxTodoList = ({ shape }) => {
  const inputRef = useRef(null);
  const editor = useEditor();

  const { checked, text } = shape.props;
  const isEditing = useIsEditing(shape.id);

  useEffect(() => {
    if (isEditing) {
      // this ensures tldraw has finished its own state transition before attempting to focus, avoiding a race condition.
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isEditing]);

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

  const stopEventPropagation = (e) => e.stopPropagation();

  return (
    <div className="w-full h-full flex items-center p-3 gap-2">
      <div onPointerDown={stopEventPropagation} onClick={stopEventPropagation}>
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
        onKeyDown={stopEventPropagation}
        onKeyUp={stopEventPropagation}
        onPointerDown={stopEventPropagation}
      />
    </div>
  );
};
