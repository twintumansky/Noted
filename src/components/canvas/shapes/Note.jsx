import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";
import { NoteShape } from "../vectors/NoteShape";

export class NoteUtil extends BaseBoxShapeUtil {
  static type = "note";

  getDefaultProps() {
    return {
      w: 115,
      h: 185,
      title: "New Note",
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
    const isNoteOpen = !shape.props.isOpen;

    this.editor.updateShape({
      id: shape.id,
      type: "note",
      props: {
        isOpen: isNoteOpen,
        w: isNoteOpen ? 200 : 115,
        h: isNoteOpen ? 180 : 185,
      },
    });
  };

  component(shape) {
    const { isOpen, title } = shape.props;
    return (
      <HTMLContainer className="pointer-events-auto select-none flex items-center justify-center">
        <NoteShape title={title} isOpen={isOpen} />
      </HTMLContainer>
    );
  }

  // eslint-disable-next-line no-unused-vars
  indicator(shape) {
    return null;
  }
}
