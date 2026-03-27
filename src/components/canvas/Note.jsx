import { BaseBoxShapeUtil, HTMLContainer } from 'tldraw';
import { NoteShape } from './vectors/NoteShape';

export class NoteUtil extends BaseBoxShapeUtil {
  static type = 'note';

  getDefaultProps() {
    return {
      w: 109,
      h: 156,
      title: 'New Note',
      isOpen: false,
      childrenIds: [],
    }
  }

  onDoubleClick = (shape) => {
    const isNoteOpen = !shape.props.isOpen;

    this.editor.updateShape({
      id: shape.id,
      type: "note",
      props: {
        isOpen: isNoteOpen,
        w: isNoteOpen ? 200 : 109,
        h: isNoteOpen ? 180 : 156,
      },
    });
  };

  component(shape) {
    const { isOpen, title } = shape.props;
    return (
      <HTMLContainer className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-full pointer-events-auto">
        <NoteShape
          title={title}
          isOpen={isOpen}
        />
      </HTMLContainer>
    )
  }

  indicator(shape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={12} />
  }
};