import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";

export class NotebookShapeUtil extends BaseBoxShapeUtil {
    static type = 'notebook';

    getDefaultProps() {
        return {
            w: 109,
            h: 156,
            title: "New notebook",
            isOpen: false,
            childrenIds: [],
        };
    };

    onDoubleClick = (shape) => {
        const isNotebookOpen = !shape.props.isOpen;
        this.editor.updateShape({
            id: shape.id,
            type: "notebook",
            props: {
                isOpen: isNotebookOpen,
                w: isNotebookOpen ? 200 : 109,
                h: isNotebookOpen ? 180 : 156,
            },
        });
    };
}