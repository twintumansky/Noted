import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { FolderShape } from "./vectors/FolderShape";

export class FolderUtil extends BaseBoxShapeUtil {
  static type = "folder";

  getDefaultProps() {
    return {
      w: 109,
      h: 156,
      title: "New Folder",
      isOpen: false,
      childrenIds: [],
    };
  }

  onDoubleClick = (shape) => {
    const isFolderOpen = !shape.props.isOpen;
    this.editor.updateShape({
      id: shape.id,
      type: "folder",
      props: {
        isOpen: isFolderOpen,
        w: isFolderOpen ? 200 : 109,
        h: isFolderOpen ? 180 : 156,
      },
    });
  };

  component(shape) {
    const { isOpen, title } = shape.props;

    return (
      <HTMLContainer className="pointer-events-auto select-none flex items-center justify-center">
        <FolderShape
          title={title}
          isOpen={isOpen}
        />
      </HTMLContainer >
    );
  }

  indicator(shape) {
    return (
      <rect
        width={shape.props.w}
        height={shape.props.h}
        rx={shape.props.isOpen ? 24 : 12}
      />
    );
  }
}
