import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { ShapeInteractiveState } from "../utils/ShapeInteractiveState";
import { FolderShape } from "../vectors/FolderShape";

export class FolderUtil extends BaseBoxShapeUtil {
  static type = "folder";

  getDefaultProps() {
    return {
      w: 115,
      h: 185,
      title: "New Folder",
      isOpen: false,
      childrenIds: [],
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

  onDoubleClick = (shape) => {
    const isFolderOpen = !shape.props.isOpen;
    this.editor.updateShape({
      id: shape.id,
      type: "folder",
      props: {
        isOpen: isFolderOpen,
        w: isFolderOpen ? 200 : 115,
        h: isFolderOpen ? 180 : 185,
      },
    });
  };

  component(shape) {
    const { isOpen, title } = shape.props;

    return (
      <HTMLContainer className="pointer-events-auto select-none flex items-center justify-center">
        <ShapeInteractiveState shapeId={shape.id}>
          <FolderShape isOpen={isOpen} titile={title} />
        </ShapeInteractiveState>
      </HTMLContainer>
    );
  }

  // eslint-disable-next-line no-unused-vars
  indicator(shape) {
    return null;
  }
}
