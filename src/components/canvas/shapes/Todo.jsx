import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { ShapeInteractiveState } from "../utils/ShapeInteractiveState";
import { CheckboxTodoList } from "@/components/shadcn-studio/checkbox/checkbox-04";

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
            <HTMLContainer className="bg-[#ffd494] cursor-pointer pointer-events-auto p-3 h-full w-full rounded-xl overflow-hidden animate-in zoom-in-90 duration-300">
                <ShapeInteractiveState shapeId={shape.id}>
                    <CheckboxTodoList />
                </ShapeInteractiveState>
            </HTMLContainer>
        );
    }

    // eslint-disable-next-line no-unused-vars
    indicator(shape) {
        return null;
    }
}
