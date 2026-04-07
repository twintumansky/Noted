import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { CheckboxTodoList } from "@/components/shadcn-studio/checkbox/checkbox-04";

export class TodoUtil extends BaseBoxShapeUtil {
    static type = "todo";

    getDefaultProps() {
        return {
            w: 130,
            h: 130,
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

    component() {
        return (
            <HTMLContainer className="pointer-events-all p-3 h-full w-full rounded-xl overflow-hidden transition-all duration-500">
                <CheckboxTodoList />
            </HTMLContainer>
        );
    }
}
