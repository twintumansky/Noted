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

  indicator() {
    return null;
  }
}
