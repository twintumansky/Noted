import { useEditor, useValue } from "tldraw";

export const ShapeInteractiveState = ({ shapeId, children }) => {
    const editor = useEditor();

    //when shape is selected by user or in active state
    const isSelected = useValue(
        "is-selected",
        () => editor.getSelectedShapeIds().includes(shapeId),
        [editor, shapeId],
    );

    //when shape is hovered upon by user or in hover state
    const isHovered = useValue(
        "is-hovered",
        () => editor.getHoveredShapeId() === shapeId,
        [editor, shapeId],
    );

    let shapeInteractiveStyle = "";
    if (isSelected) {
        shapeInteractiveStyle = "drop-shadow-2xl scale-[1.02]";
    } else if (isHovered) {
        shapeInteractiveStyle = "drop-shadow-xl";
    }

    return (
        <div
            className={`w-full h-full transition-all duration-300 ease-out ${shapeInteractiveStyle}`}
        >
            {children}
        </div>
    );
};
