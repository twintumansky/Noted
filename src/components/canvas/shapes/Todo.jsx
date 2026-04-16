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
                    <div className="w-full h-full bg-[#c7c0b7] rounded-xl animate-in zoom-in-90 duration-300 p-1">
                        <div className="flex flex-col items-center w-full h-full bg-white/40 rounded-xl overflow-hidden">
                            <CheckboxTodoList shape={shape} />
                            <div>
                                <button className="bg-[#4a4a4a] rounded-xl text-sm font-semibold text-[#f5f4f5] px-3 py-1">Add item</button>
                            </div>
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
