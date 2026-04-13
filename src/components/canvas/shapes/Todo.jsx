import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { ShapeInteractiveState } from "../utils/ShapeInteractiveState";
import { CheckboxTodoList } from "@/components/shadcn-studio/checkbox/CheckboxTodoList";

export class TodoUtil extends BaseBoxShapeUtil {
    static type = "todo";

    getDefaultProps() {
        return {
            w: 150,
            h: 150,
            checked: false,
            text: "",
        };
    }

    canEdit() {
        return true;
    }

    hideSelectionBoundsBg() {
        return true;
    }
    hideSelectionBoundsFg() {
        return true;
    }
    hideResizeHandles() {
        return true;
    }
    hideRotateHandle() {
        return true;
    }

    component(shape) {
        return (
            <HTMLContainer>
                <ShapeInteractiveState shapeId={shape.id}>
                    <div className="w-full h-full bg-[#ffd494] rounded-xl overflow-hidden animate-in zoom-in-90 duration-300">
                        <CheckboxTodoList shape={shape} />
                    </div>
                </ShapeInteractiveState>
            </HTMLContainer>
        );
    }

    // eslint-disable-next-line no-unused-vars
    indicator(shape) {
        return null;
    }
}
