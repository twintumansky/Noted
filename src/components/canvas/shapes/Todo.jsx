import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { ShapeInteractiveState } from "../utils/ShapeInteractiveState";
import { CheckboxTodoList } from "@/components/shadcn-studio/checkbox/CheckboxTodoList";

export const ITEM_H = 40;
export const HEADER_H = 48;
export const ADD_BTN_H = 36;

export function computeHeight(itemCount) {
    return HEADER_H + itemCount * ITEM_H + ADD_BTN_H;
}

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
                    <div className="w-full h-full bg-[#ffd494] rounded-xl animate-in zoom-in-90 duration-300 p-1">
                        <div className="w-full h-full bg-[#ffffff] rounded-xl overflow-hidden">
                            <CheckboxTodoList shape={shape} />
                        </div>
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
