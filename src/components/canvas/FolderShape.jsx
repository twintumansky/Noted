import { BaseBoxShapeUtil, HTMLContainer } from "tldraw";

export class FolderShapeUtil extends BaseBoxShapeUtil {
  static type = "folder";

  getDefaultProps() {
    return {
      w: 200,
      h: 150,
      title: "New Folder",
      isExpanded: false,
      childrenIds: [],
    };
  }

  component(shape) {
    const { isExpanded, title } = shape.props;
    return (
      <HTMLContainer className="pointer-events-auto select-none">
        <div
          className={`flex flex-col h-full rounded-2xl border-2 transition-all duration-300 shadow-sm
                               ${isExpanded ? "bg-white border-slate-300 scale-105" : "bg-slate-50 border-slate-200 hover:border-slate-400"}
                               `}
          style={{ width: shape.props.w, height: shape.props.h }}
        >
          <div className="p-3 flex items-center gap-2 border-b border-slate-200/50">
            <div className="w-3 h-3 rounded-full bg-slate-300" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {title}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            {!isExpanded && (
              <span className="text-[10px] text-slate-400 font-medium italic">
                {shape.props.childrenIds.length} Items
              </span>
            )}
          </div>
        </div>
      </HTMLContainer>
    );
  };

  indicator(shape) {
    return <rect width={shape.props.w} height={shape.props.h} rx={16} />
  };
};
