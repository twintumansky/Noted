import { BaseBoxShapeUtil, HTMLContainer } from 'tldraw';

export class NoteShapeUtil extends BaseBoxShapeUtil {
  static type = 'note'

  getDefaultProps() {
    return {
      w: 300,
      h: 250,
      title: 'New Note',
      content: '',
    }
  }

  component(shape) {
    return (
      <HTMLContainer className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-full pointer-events-auto">
        <div className="font-bold text-slate-800 mb-2 border-b border-slate-100 pb-1">
          {shape.props.title}
        </div>
        <div className="text-sm text-slate-600 flex-1 overflow-hidden">
          {shape.props.content || 'Start typing...'}
        </div>
      </HTMLContainer>
    )
  }

  indicator(shape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={12} />
  }
};